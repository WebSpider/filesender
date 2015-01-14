<?php

/*
 * FileSender www.filesender.org
 * 
 * Copyright (c) 2009-2012, AARNet, Belnet, HEAnet, SURFnet, UNINETT
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 * 
 * *	Redistributions of source code must retain the above copyright
 * 	notice, this list of conditions and the following disclaimer.
 * *	Redistributions in binary form must reproduce the above copyright
 * 	notice, this list of conditions and the following disclaimer in the
 * 	documentation and/or other materials provided with the distribution.
 * *	Neither the name of AARNet, Belnet, HEAnet, SURFnet and UNINETT nor the
 * 	names of its contributors may be used to endorse or promote products
 * 	derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

require_once(dirname(__FILE__).'/../../includes/init.php');

Logger::info('Cron started');


Logger::info('Cleanup task started');

// Close expired transfers
foreach(Transfer::allExpired() as $transfer)
    $transfer->close();

// Close expired guests
foreach(Guest::allExpired() as $guest) {
    if($guest->hasOption(GuestOptions::DOES_NOT_EXPIRE)) continue;
    
    $guest->close();
}

// Delete expired audit logs and related data
foreach(Transfer::allExpiredAuditlogs() as $transfer) {
    AuditLog::clean($transfer);
    $transfer->delete();
}

Logger::info('Cleanup complete');



Logger::info('Daily summary generation started');

foreach(Transfer::all(Transfer::AVAILABLE) as $transfer) {
    if(!$transfer->hasOption(TransferOptions::EMAIL_DAILY_STATISTICS)) continue;
    
    $start_time = time() - 24 * 3600;
    $events = array();
    
    foreach($transfer->auditlogs as $log) {
        if($log->created < $start_time) continue;
        if($log->author_type != 'Recipient') continue;
        if(!in_array($log->event, array(LogEventTypes::DOWNLOAD_ENDED, LogEventTypes::ARCHIVE_DOWNLOAD_ENDED))) continue;
        
        $events[] = array(
            'who' => $log->author->email,
            'what' => ($log->event == LogEventTypes::ARCHIVE_DOWNLOAD_ENDED) ? 'archive' : 'file',
            'what_name' => ($log->event == LogEventTypes::ARCHIVE_DOWNLOAD_ENDED) ? '' : $log->target->name,
            'when' => $log->created
        );
    }
    
    ApplicationMail::quickSend('daily_summary', $transfer->owner->email, $transfer, array('events' => $events));
}

Logger::info('Daily summary generation complete');



$report = Config::get('report_bounces');
if(in_array($report, array('daily', 'asap_then_daily'))) {
    Logger::info('Bounces reporting started');
    
    foreach(TrackingEvent::getNonReported(TrackingEventTypes::BOUNCE) as $set)
        TrackingEvent::reportSet($set);
    
    Logger::info('Bounces reporting complete');
}



$level = Config::get('storage_usage_warning');
if((int)$level) {
    Logger::info('Usage warning started');
    
    $usage = Storage::getUsage();
    
    $block_warnings = array();
    if($usage) foreach($usage as $fs => $u) {
        if($u['free_space'] > $level * $u['total_space'] / 100) continue;
        $u['free_space_pct'] = floor(100 * $u['free_space'] / $u['total_space']);
        $u['filesystem'] = $fs;
        $block_warnings[] = $u;
    }
    
    if(count($block_warnings))
        SystemMail::quickSend('storage_usage_warning', array('warnings' => $block_warnings));
    
    Logger::info('Usage warning complete');
}
