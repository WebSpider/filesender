// JavaScript Document

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

// Manage files
filesender.ui.files = {
    // File selection (browse / drop) handler
    add: function(files) {
        for(var i=0; i<files.length; i++) {
            var info = files[i].name + ' : ' + filesender.ui.formatBytes(files[i].size);
            
            var node = $('<div class="file" file="' + files[i].name + ':' + files[i].size + '" />').appendTo(filesender.ui.nodes.files.list);
            
            $('<span class="info" />').text(info).attr({title: info}).appendTo(node);
            
            $('<span class="remove fa fa-minus-square fa-lg" />').attr({
                title: lang.tr('click_to_delete_file')
            }).on('click', function() {
                var index = $(this).parent().attr('index');
                if(typeof index != 'undefined' && index.match(/^[0-9]+$/))
                    filesender.ui.transfer.removeFile(index);
                
                $(this).parent().remove();
                
                if(!filesender.ui.nodes.files.list.find('div').length)
                    filesender.ui.nodes.files.clear.button('disable');
            }).appendTo(node);
            
            $('<div class="progressbar" />').append('<div />').appendTo(node);
            
            var added = filesender.ui.transfer.addFile(files[i], function(error, data) {
                node.addClass('invalid');
                node.addClass(error);
                $('<span class="invalid fa fa-exclamation-circle fa-lg" />').prependTo(node.find('.info'))
                node.attr({
                    title: lang.tr('invalid_file').replace({reason: lang.tr(error)})
                });
                node.find('.info').removeAttr('title');
            });
            
            filesender.ui.nodes.files.clear.button('enable');
            filesender.ui.evalUploadEnabled();
            
            if(added === false) continue;
            
            var size = 0;
            for(var j=0; j<filesender.ui.transfer.files.length; j++)
                size += filesender.ui.transfer.files[j].size;
            
            filesender.ui.nodes.stats.html(
                lang.tr('number_of_files') + ': ' + filesender.ui.transfer.files.length + '/' + filesender.config.max_html5_uploads + '<br />' +
                lang.tr('size') + ': ' + filesender.ui.formatBytes(size) + '/' + filesender.ui.formatBytes(filesender.config.max_html5_upload_size)
            );
            
            node.attr('index', added);
        }
    },
    
    // Update progress bar, run in transfer context
    progress: function(file, complete) {
        var size = 0;
        var uploaded = 0;
        for(var i=0; i<this.files.length; i++) {
            size += this.files[i].size;
            uploaded += this.files[i].uploaded;
        }
        
        var time = (new Date()).getTime() - this.time;
        var speed = uploaded / (time / 1000);
        
        filesender.ui.nodes.stats.html(
            lang.tr('uploaded') + ': ' + filesender.ui.formatBytes(uploaded) + '/' + filesender.ui.formatBytes(size) + '<br />' +
            lang.tr('average_speed') + ': ' + filesender.ui.formatBytes(speed) + '/s'
        );
        
        var id = file.name + ':' + file.size;
        var bar = filesender.ui.nodes.files.list.find('[file="' + id + '"] .progressbar div');
        if(!bar.length) return;
        
        var pct = complete ? 100 : (100 * file.uploaded / file.size).toFixed(2);
        pct = Math.min(pct, 100);
        
        bar.show();
        bar.text(pct + '%').css('width', pct + '%');
    },
    
    // Clear the file box
    clear: function() {
        filesender.ui.transfer.files = [];
        
        filesender.ui.nodes.files.input.val('');
        
        filesender.ui.nodes.files.list.find('div').remove();
        
        filesender.ui.nodes.files.clear.button('disable');
        
        filesender.ui.evalUploadEnabled();
    },
};

// Manage recipients
filesender.ui.recipients = {
    // Add recipient to list
    add: function(email) {
        if(email.match(/[,;\s]/)) { // Multiple values
            email = email.split(/[,;\s]/);
            var invalid = [];
            for(var i=0; i<email.length; i++) {
                var s = email[i].replace(/^\s+/g, '').replace(/\s+$/g, '');
                if(!s) cintinue;
                if(!this.add(s))
                    invalid.push(s);
            }
            return invalid.join(', ');
        }
        
        var added = true;
        filesender.ui.transfer.addRecipient(email, function(error, data) {
            added = false;
        });
        if(!added) return email;
        
        var node = $('<div class="recipient" />').attr('email', email).appendTo(filesender.ui.nodes.recipients.list);
        $('<span />').attr('title', email).text(email).appendTo(node);
        $('<span class="remove fa fa-minus-square" />').attr({
            title: lang.tr('click_to_delete_recipient')
        }).on('click', function() {
            var email = $(this).parent().attr('email');
            if(email)
                filesender.ui.transfer.removeRecipient(email);
            
            $(this).parent().remove();
        }).appendTo(node);
        
        filesender.ui.nodes.recipients.list.show();
        
        filesender.ui.evalUploadEnabled();
        
        return '';
    },
    
    // Add recipients from input
    addFromInput: function(input) {
        input = $(input);
        
        var marker = input.data('error_marker');
        
        var invalid = this.add(input.val());
        
        if(invalid) {
            input.val(invalid);
            input.addClass('invalid');
            if(!marker) {
                marker = $('<span class="invalid fa fa-exclamation-circle fa-lg" />').attr({
                    title: lang.tr('invalid_recipient')
                }).insertBefore(input);
                input.data('error_marker', marker);
            }
        }else{
            input.val('');
            input.removeClass('invalid');
            if(marker) marker.remove();
        }
    },
    
    // Remove email from list
    remove: function(email) {
        if(email.match(/[,;\s]/)) { // Multiple values
            email = email.split(/[,;\s]/);
            for(var i=0; i<email.length; i++) {
                var s = email[i].replace(/^\s+/g, '').replace(/\s+$/g, '');
                if(s) this.remove(s);
            }
            return;
        }
        
        filesender.ui.transfer.removeRecipient(email);
        
        filesender.ui.nodes.recipients.list.find('[email="' + email + '"]').remove();
        
        if(!filesender.ui.nodes.recipients.list.find('[email]').length)
            filesender.ui.nodes.recipients.list.hide();
        
        filesender.ui.evalUploadEnabled();
    },
    
    // Clear the recipients list
    clear: function() {
        filesender.ui.transfer.recipients = [];
        
        filesender.ui.nodes.recipients.input.val('');
        
        filesender.ui.nodes.recipients.list.find('div').remove();
        
        filesender.ui.evalUploadEnabled();
    },
};

filesender.ui.evalUploadEnabled = function() {
    var ok = true;
    
    if(!filesender.ui.transfer.files.length) ok = false;
    if(!filesender.ui.transfer.recipients.length) ok = false;
    
    if(filesender.ui.nodes.aup.length)
        if(!filesender.ui.nodes.aup.is(':checked')) ok = false;
    
    filesender.ui.nodes.uploadbtn.button(ok ? 'enable' : 'disable');
    return ok;
};

filesender.ui.startUpload = function() {
    this.transfer.expires = filesender.ui.nodes.expires.datepicker('getDate').getTime() / 1000;
    
    this.transfer.subject = filesender.ui.nodes.subject.val();
    this.transfer.message = filesender.ui.nodes.message.val();
    
    for(var o in filesender.ui.nodes.options)
        if(filesender.ui.nodes.options[o].is(':checked'))
            this.transfer.options.push(o);
    
    
    this.transfer.onprogress = filesender.ui.files.progress;
    
    this.transfer.oncomplete = function(time) {
        filesender.ui.files.clear();
        filesender.ui.recipients.clear();
        filesender.ui.nodes.subject.val('');
        filesender.ui.nodes.message.val('');
        filesender.ui.nodes.expires.datepicker('setDate', (new Date()).getTime() + 24*3600*1000 * filesender.config.default_daysvalid);
        
        alert('Done !');
        
        // TODO popup (view uploaded / upload other)
    };
    
    this.transfer.onerror = function(code, details) {
        alert('There was an error during upload : ' + code);
    };
    
    this.transfer.start();
};

$(function() {
    var form = $('#upload_form');
    if(!form.length) return;
    
    // Transfer
    filesender.ui.transfer = new filesender.transfer();
    
    // Register frequently used nodes
    filesender.ui.nodes = {
        files: {
            input: form.find(':file'),
            list: form.find('.files'),
            select: form.find('.files_actions .select_files'),
            clear: form.find('.files_actions .clear_all'),
        },
        recipients: {
            input: form.find('input[name="to"]'),
            list: form.find('.recipients'),
        },
        subject: form.find('input[name="subject"]'),
        message: form.find('textarea[name="message"]'),
        aup: form.find('input[name="aup"]'),
        expires: form.find('input[name="expires"]'),
        options: {},
        uploadbtn: form.find('.upload_button a'),
        stats: form.find('.files_actions .stats')
    };
    form.find('.basic_options input, .advanced_options input').each(function() {
        var i = $(this);
        filesender.ui.nodes.options[i.attr('name')] = i;
    });

    // Bind file list clear button
    filesender.ui.nodes.files.clear.on('click', function() {
        if($(this).button('option', 'disabled')) return;
        
        filesender.ui.files.clear();
        return false;
    }).button().button('disable');
    
    // Bind file list select button
    filesender.ui.nodes.files.select.on('click', function() {
        filesender.ui.nodes.files.input.click();
        return false;
    }).button();
    
    // Bind file drag drop events
    $('body').on('dragover', function (e) {
        e.preventDefault();
        e.stopPropagation();
    }).on('dragenter', function (e) {
        e.preventDefault();
        e.stopPropagation();
    }).on('drop', function (e) {
        if(!e.originalEvent.dataTransfer) return;
        if(!e.originalEvent.dataTransfer.files.length) return;
        
        e.preventDefault();
        e.stopPropagation();
        
        filesender.ui.files.add(e.originalEvent.dataTransfer.files);
    });
    
    filesender.ui.nodes.recipients.input.on('keydown', function(e) {
        if(e.keyCode != 13) return;
        
        // enter is pressed
        e.preventDefault();
        e.stopPropagation();
        
        filesender.ui.recipients.addFromInput($(this));
    }).on('blur', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        filesender.ui.recipients.addFromInput($(this));
    });
    
    // Bind file list select button
    filesender.ui.nodes.files.input.on('change', function() {
        // multiple files selected
        // loop through all files and show their values
        if (document.readyState != 'complete' && document.readyState != 'interactive') {
            return;
        }

        if(typeof this.files == 'undefined') return;
        
        filesender.ui.files.add(this.files);
    });
    
    // Handle "back" browser action
    var files = filesender.ui.nodes.files.input[0].files;
    if(files && files.length) filesender.ui.files.add(files);
    
    // Setup date picker
    $.datepicker.setDefaults({
        closeText: lang.tr('DP_closeText').out(),
        prevText: lang.tr('DP_prevText').out(),
        nextText: lang.tr('DP_nextText').out(),
        currentText: lang.tr('DP_currentText').out(),
        
        monthNames: lang.tr('DP_monthNames').values(),
        monthNamesShort: lang.tr('DP_monthNamesShort').values(),
        dayNames: lang.tr('DP_dayNames').values(),
        dayNamesShort: lang.tr('DP_dayNamesShort').values(),
        dayNamesMin: lang.tr('DP_dayNamesMin').values(),
        
        weekHeader: lang.tr('DP_weekHeader').out(),
        dateFormat: lang.tr('DP_dateFormat').out(),
        
        firstDay: parseInt(lang.tr('DP_firstDay').out()),
        isRTL: lang.tr('DP_isRTL').out().match(/true/),
        showMonthAfterYear: lang.tr('DP_showMonthAfterYear').out().match(/true/),
        
        yearSuffix: lang.tr('DP_yearSuffix').out()
    });
    
    // Bind picker
    var maxdate = new Date((new Date()).getTime() + 24*3600*1000 * filesender.config.default_daysvalid);
    filesender.ui.nodes.expires.datepicker({
        minDate: new Date(),
        maxDate: maxdate,
    });
    filesender.ui.nodes.expires.datepicker('setDate', maxdate);
    
    // Make options label toggle checkboxes
    form.find('.basic_options label, .advanced_options label').on('click', function() {
        var checkbox = $(this).closest('.fieldcontainer').find(':checkbox');
        checkbox.prop('checked', !checkbox.prop('checked'));
    }).css('cursor', 'pointer');
    
    // Bind advanced options display toggle
    form.find('.toggle_advanced_options').on('click', function() {
        $('.advanced_options').slideToggle();
        return false;
    });
    
    // Bind aup display toggle
    form.find('label[for="aup"]').on('click', function() {
        $(this).closest('.fieldcontainer').find('.terms').slideToggle();
        return false;
    });
    
    // Bind aup display toggle
    filesender.ui.nodes.uploadbtn.on('click', function() {
        filesender.ui.startUpload();
        return false;
    }).button().button('disable');
    
    filesender.ui.nodes.aup.on('change', function() {
        filesender.ui.evalUploadEnabled();
    });
    
    // special fix for esc key on firefox stopping xhr
    window.addEventListener('keydown', function(e) {
        (e.keyCode == 27 && e.preventDefault())
    });
    
    // Set message to display if the user changes pages / close tab / close browser
    window.onbeforeunload = function() {
        if(!filesender.ui.transfer.status.match(/^(new|done|stopped)$/))
            return true; // Ask for leaving confirmation
    };
});