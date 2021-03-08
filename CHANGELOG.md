#  (2021-03-08)


### admin

* (cfg) allow admins to view user transfers metadata (#799) ([b37cf6d](https://github.com/fransward/filesender/commit/b37cf6dc9f1788edbec47eeaf0ad17beed175d04)), closes [#799](https://github.com/fransward/filesender/issues/799)
* allow search for transfer by sender email (#894) ([40462ec](https://github.com/fransward/filesender/commit/40462ec8d1b2cac7bf316ad1b35c11dd90a897d4)), closes [#894](https://github.com/fransward/filesender/issues/894)
* allow transfer search by partial sender email (#901) ([9228151](https://github.com/fransward/filesender/commit/9228151de4150ccb1fb3d8bf7814b0322d7826c6)), closes [#901](https://github.com/fransward/filesender/issues/901)
* transfers allow search by id range (#800) ([279d625](https://github.com/fransward/filesender/commit/279d6256b6aea89c6a9fcc1bd874d1924a823998)), closes [#800](https://github.com/fransward/filesender/issues/800)

### AEAD

* only generate and store one for GCM modes where it is useful (#647) ([a75c7d6](https://github.com/fransward/filesender/commit/a75c7d6bc7274b2472c3513b3c8c29793282a17a)), closes [#647](https://github.com/fransward/filesender/issues/647)

### archive

* streamArchive withHeaders parameter is a relic and should be removed. (#605) ([5e2164c](https://github.com/fransward/filesender/commit/5e2164ceb133aba01dbe19679697699e3f85cf7b)), closes [#605](https://github.com/fransward/filesender/issues/605)

### archives

* remove difference in action when enable_recipient is false (#617) ([f702253](https://github.com/fransward/filesender/commit/f70225321dc0bc65b5701660eb625f1fe6fa01e5)), closes [#617](https://github.com/fransward/filesender/issues/617)

### aup

* allow transfer modification (#607) ([ca9be99](https://github.com/fransward/filesender/commit/ca9be99de95ba509b29c461e48707abab3ae1190)), closes [#607](https://github.com/fransward/filesender/issues/607)

### AUP

* bring back the checkmark to bind users to the site terms and conditions (#234) ([5d6628f](https://github.com/fransward/filesender/commit/5d6628f3b94e11e33e96b57f33585762be3143df)), closes [#234](https://github.com/fransward/filesender/issues/234)

### auth

* some protection from recursive loops during setup (#214) ([0ce2147](https://github.com/fransward/filesender/commit/0ce2147dc618278d4e8dadb8da12c4a71ce62f03)), closes [#214](https://github.com/fransward/filesender/issues/214)
* web interface for local password management (#762) ([7b16e36](https://github.com/fransward/filesender/commit/7b16e363019ced339dfe6da545d206c92e17c486)), closes [#762](https://github.com/fransward/filesender/issues/762)

### Auth

* new SimpleSAMPphp module to verify against filesender db (#761) ([bbe0b03](https://github.com/fransward/filesender/commit/bbe0b039e532163381c85ecab909fb489c38b691)), closes [#761](https://github.com/fransward/filesender/issues/761)

### autoloader

* zip64 poking around broke things (#205) ([f550ca1](https://github.com/fransward/filesender/commit/f550ca1e3c3e164251c2982ad6ed40d19f0d426d)), closes [#205](https://github.com/fransward/filesender/issues/205)

### baddata

* mitigation for issue 293 (#304) ([66fb7a7](https://github.com/fransward/filesender/commit/66fb7a71ef1a7cb824647e16bc0cc99560437b0f)), closes [#304](https://github.com/fransward/filesender/issues/304)

### Bugfix

* 'To' and 'Expires' form labels were not clickable. (#289) ([317eb2c](https://github.com/fransward/filesender/commit/317eb2cb454dea6c46f563b2a3b299280ba45700)), closes [#289](https://github.com/fransward/filesender/issues/289)

### chunkedstorage

* crypto happens browser to browser, no point in backend (#151) ([d1aeb9f](https://github.com/fransward/filesender/commit/d1aeb9f1b4525b7373886708e970b6687a43ff32)), closes [#151](https://github.com/fransward/filesender/issues/151)

### ci

* add the auto resume test shell back (#349) ([ba5852a](https://github.com/fransward/filesender/commit/ba5852ad4aa3667155c198ec03840a5ba88c0ea5)), closes [#349](https://github.com/fransward/filesender/issues/349)
* catch attempts to use the database we are not planning to use (#411) ([d7e96d0](https://github.com/fransward/filesender/commit/d7e96d004f557a1e5739fec6c2c5f34258d0439d)), closes [#411](https://github.com/fransward/filesender/issues/411)
* do the tests against mariadb as well as postgresql (#407) ([edf7d06](https://github.com/fransward/filesender/commit/edf7d06b79a7bd8ea3b12f40bacf52fc8c73445a)), closes [#407](https://github.com/fransward/filesender/issues/407)
* lets give trusty a go to see where the bricks fall (#400) ([f47fccc](https://github.com/fransward/filesender/commit/f47fccc997e16c81fb31136b6d406da463256b11)), closes [#400](https://github.com/fransward/filesender/issues/400)
* lets see if the old browser in ci can handle these modes (#641) ([ebf4d17](https://github.com/fransward/filesender/commit/ebf4d1794d99e3c89e823725929f9480e3cf4bcc)), closes [#641](https://github.com/fransward/filesender/issues/641)
* lets split the 2 jobs into 5 (#410) ([b91da72](https://github.com/fransward/filesender/commit/b91da72aacc936008dc7cfc865d0ee147cc65b90)), closes [#410](https://github.com/fransward/filesender/issues/410)
* move the database migration generic code calls up (#313) ([551458a](https://github.com/fransward/filesender/commit/551458afd15b4dc7d70064f7451f9a95ba2d91df)), closes [#313](https://github.com/fransward/filesender/issues/313)
* rest endpoint to clear function call cache (#350) ([d1b5be1](https://github.com/fransward/filesender/commit/d1b5be1637daf94986abf4f416fd233afcb57e0b)), closes [#350](https://github.com/fransward/filesender/issues/350)
* try on mariadb 10.2 (#833) ([a239b78](https://github.com/fransward/filesender/commit/a239b78a60555f0a16c88e0d8359842cdd93ea17)), closes [#833](https://github.com/fransward/filesender/issues/833)
* update for cron testing (#813) ([c0e057a](https://github.com/fransward/filesender/commit/c0e057a344be1a29555d10151edbacad0df5ed9a)), closes [#813](https://github.com/fransward/filesender/issues/813)
* working on a new selenium test for auto resume upload (#348) ([e21b72f](https://github.com/fransward/filesender/commit/e21b72f91e00b0138b32913f5f2dee22e0a79b64)), closes [#348](https://github.com/fransward/filesender/issues/348)

### CI

* move to modern chrome (#822) ([bf43dd1](https://github.com/fransward/filesender/commit/bf43dd1632422f383db444df451a926ce8ba92b7)), closes [#822](https://github.com/fransward/filesender/issues/822)
* now that we have recent chrome, use streamsaver in CI (#827) ([114ade8](https://github.com/fransward/filesender/commit/114ade812d0088f2abf8d0d5adef5df3ea0a9b78)), closes [#827](https://github.com/fransward/filesender/issues/827)
* starting to update tests (#826) ([d1bc66d](https://github.com/fransward/filesender/commit/d1bc66d36373d41bd125b0901a474ccd5ee187ff)), closes [#826](https://github.com/fransward/filesender/issues/826)

### clientlogs

* buttons to send and clear them (#725) ([19f06e4](https://github.com/fransward/filesender/commit/19f06e433e771188b44f8a9d1aa785d153a9d0e2)), closes [#725](https://github.com/fransward/filesender/issues/725)
* increse log size to 100 by default. Rename stash_len to be consistent with config.php name (#732) ([67a4aca](https://github.com/fransward/filesender/commit/67a4acabcd1623144644b299fe63c4b02bf16d53)), closes [#732](https://github.com/fransward/filesender/issues/732)
* update to allow export (#793) ([1297a77](https://github.com/fransward/filesender/commit/1297a777762d14c7a158b12d15721aa30145d25f)), closes [#793](https://github.com/fransward/filesender/issues/793)

### cloud

* amazon s3 storage backend (#255) ([ef8fe6d](https://github.com/fransward/filesender/commit/ef8fe6d5992d86803e18981ddaaf058f52641216)), closes [#255](https://github.com/fransward/filesender/issues/255)
* check chunk sizes match in config, more azure error handling (#261) ([60941bf](https://github.com/fransward/filesender/commit/60941bfc346cd051db8718e5e6aef358ca3c83e8)), closes [#261](https://github.com/fransward/filesender/issues/261)

### Cloud

* new azure storage backend (#253) ([f7cf1d6](https://github.com/fransward/filesender/commit/f7cf1d63f7237ee9b3db2574a09b7dee3c4723c1)), closes [#253](https://github.com/fransward/filesender/issues/253)

### collections

* if no ids then retyrn empty (#553) ([00fcb00](https://github.com/fransward/filesender/commit/00fcb006749ac9ae284ae6090a25f76151a13abb)), closes [#553](https://github.com/fransward/filesender/issues/553)

### config

* a validation script to do more complex validation (#795) ([b80e217](https://github.com/fransward/filesender/commit/b80e217c2069b767e6368eafa6a04930564e274c)), closes [#795](https://github.com/fransward/filesender/issues/795)
* complain early if the admin settings are not going to work (#524) ([f8cdcc7](https://github.com/fransward/filesender/commit/f8cdcc7aedf6c936f7e63ea7eee40f1d4e800998)), closes [#524](https://github.com/fransward/filesender/issues/524)

### core

* allow auto retry if the server didnt like the chunk (#882) ([7d780fc](https://github.com/fransward/filesender/commit/7d780fccee3afd141b00839a7cca1871a05d15aa)), closes [#882](https://github.com/fransward/filesender/issues/882)

### cron

* cleanup for old pdf config file (#204) ([4ca8216](https://github.com/fransward/filesender/commit/4ca8216599b2a83877f2257bc348b994175fce67)), closes [#204](https://github.com/fransward/filesender/issues/204)
* seems running locally can bump into an issue with no REMOTE_ADDR (#792) ([b9bda42](https://github.com/fransward/filesender/commit/b9bda427903bcd87d4f33119457944fcf880873a)), closes [#792](https://github.com/fransward/filesender/issues/792)

### crypto

* add new AES-256-GCM encryption modes (#640) ([64c318c](https://github.com/fransward/filesender/commit/64c318c072fbfe60cadeeee3baabe3d58f20c3ed)), closes [#640](https://github.com/fransward/filesender/issues/640)
* add to test page some performance generators (#693) ([adfb74a](https://github.com/fransward/filesender/commit/adfb74aa0206ad6ae2bf1a823f118f5f61f937b6)), closes [#693](https://github.com/fransward/filesender/issues/693)
* cache keys if possible to avoid redundant work (#671) ([fd2ed51](https://github.com/fransward/filesender/commit/fd2ed5111afa4b766809a03b3d740f24b28a67c3)), closes [#671](https://github.com/fransward/filesender/issues/671)
* default setting for new crypto_pbkdf2_expected_secure_to_year key (#698) ([187c7b9](https://github.com/fransward/filesender/commit/187c7b9cca6a1ff716bc89098271e6d8a2862bbf)), closes [#698](https://github.com/fransward/filesender/issues/698)
* new dialog displayed with pbkdf2 is taking place (#692) ([6dd77d1](https://github.com/fransward/filesender/commit/6dd77d16e46aa4b3c3e09d696492d70ed8f466e5)), closes [#692](https://github.com/fransward/filesender/issues/692)
* new password generation that is 256bit random data (#625) ([3b5c09c](https://github.com/fransward/filesender/commit/3b5c09c4e7ca5db10b88fddb0348b3e35b01bcda)), closes [#625](https://github.com/fransward/filesender/issues/625)
* set the cbc/gcm overrides in obtainkey too (#672) ([6d345b4](https://github.com/fransward/filesender/commit/6d345b457d0c4c3f9cecf3e2f7a2793e38845a42)), closes [#672](https://github.com/fransward/filesender/issues/672)

### Crypto

* This allows keyversion 1 to work in Edge and IE11 on Windows 10 (#708) ([632bc19](https://github.com/fransward/filesender/commit/632bc1956d0d059eeef1c31b941c8b894fbf19ec)), closes [#708](https://github.com/fransward/filesender/issues/708)

### db

* add a new generated text column to transfersview (#651) ([df37913](https://github.com/fransward/filesender/commit/df37913b48cffa2590ae9ff2d99263886b66c28a)), closes [#651](https://github.com/fransward/filesender/issues/651)
* allow two user accounts for elevated priv in database.php (#520) ([2cf0c94](https://github.com/fransward/filesender/commit/2cf0c94861b5b85c7efd72c0e90fc4e50d3cca4a)), closes [#520](https://github.com/fransward/filesender/issues/520)
* auditlog and statlog can be quite large (#172) ([650036a](https://github.com/fransward/filesender/commit/650036a494353f71c41921ea43b0421da7e63cf4)), closes [#172](https://github.com/fransward/filesender/issues/172)
* column names are all lower case for easier cross db interaction. (#188) ([f8671dd](https://github.com/fransward/filesender/commit/f8671dd88113b2c30d01837d06c0eccb084b6f9e)), closes [#188](https://github.com/fransward/filesender/issues/188)
* delay creating fks to the end of script (#405) ([9d2f859](https://github.com/fransward/filesender/commit/9d2f8591acb8e7f2ac5a0261273747b31d98fbec)), closes [#405](https://github.com/fransward/filesender/issues/405)
* initial support for views (#380) ([847cb7a](https://github.com/fransward/filesender/commit/847cb7a3fdf3d6727bac5387266f45fe5e34ecb5)), closes [#380](https://github.com/fransward/filesender/issues/380)
* make translatableemails.variables mediumtext (#791) ([26bb3dc](https://github.com/fransward/filesender/commit/26bb3dc42b27429bc4683727b0d5b84bda0ccf10)), closes [#791](https://github.com/fransward/filesender/issues/791)
* Move from scattered user_id strings to userid numeric ids (#382) ([c7b665b](https://github.com/fransward/filesender/commit/c7b665b9fa1ab422a92f494aeba1ef795bf9ec47)), closes [#382](https://github.com/fransward/filesender/issues/382)
* pass addUser to fix empty db case (#389) ([b656cc8](https://github.com/fransward/filesender/commit/b656cc83837ff3b348236504444b00fcb5341d9b)), closes [#389](https://github.com/fransward/filesender/issues/389)
* set user creation time in new db schema (#392) ([e5ac033](https://github.com/fransward/filesender/commit/e5ac033e026c2cf759e2b240327b581d2f75e047)), closes [#392](https://github.com/fransward/filesender/issues/392)
* some secondary indexes to speed up that upload page graph (#168) ([e7ef0c9](https://github.com/fransward/filesender/commit/e7ef0c91c2ba75ff71720ff99a01d51ff0447dae)), closes [#168](https://github.com/fransward/filesender/issues/168)
* update auditlogs query for pg and mariadb compat (#704) ([b320a6f](https://github.com/fransward/filesender/commit/b320a6f875fe075c112518f8adb8592ba3c51b6f)), closes [#704](https://github.com/fransward/filesender/issues/704)
* upsert and ability to store enum tables  (#447) ([6484604](https://github.com/fransward/filesender/commit/648460428ef30ef6b32804b49499c8ecd1213db8)), closes [#447](https://github.com/fransward/filesender/issues/447)
* warning for DDL and MariaDB (#866) ([92543e4](https://github.com/fransward/filesender/commit/92543e4ee6dc553419b503a0b5195c7a26cb3cee)), closes [#866](https://github.com/fransward/filesender/issues/866)

### debug

* cleanup (#632) ([c6235eb](https://github.com/fransward/filesender/commit/c6235eb8759c784880780bc7c75034de3ae182e9)), closes [#632](https://github.com/fransward/filesender/issues/632)

### defconfig

* dirtree has to be enabled by default (#312) ([ca8191e](https://github.com/fransward/filesender/commit/ca8191eab8136fce0db708439b3034d3b34ca5e6)), closes [#312](https://github.com/fransward/filesender/issues/312)

### deps

* update jquery and some others at the same time (#837) ([7c08ee8](https://github.com/fransward/filesender/commit/7c08ee83c4c81c5318067ebf6472be44625bb667)), closes [#837](https://github.com/fransward/filesender/issues/837)

### docs

* add shredding to the menu (#260) ([96ab6f0](https://github.com/fransward/filesender/commit/96ab6f0e48ed4362ed8cb6473b24888865192e0d)), closes [#260](https://github.com/fransward/filesender/issues/260)
* bring in the contributed nginx install info (#280) ([f777525](https://github.com/fransward/filesender/commit/f7775254b9c00ab34ba83b10d2acdb8bfc7ec3dd)), closes [#280](https://github.com/fransward/filesender/issues/280)
* clean up the logging section a bit (#311) ([fdc47ba](https://github.com/fransward/filesender/commit/fdc47ba29fcaf01121e61a1aca3a7e3e7188d9e6)), closes [#311](https://github.com/fransward/filesender/issues/311)
* getting ready for 2.0 (#329) ([480ac67](https://github.com/fransward/filesender/commit/480ac67c8992355ed7bf7893b527239d73bfeb1f)), closes [#329](https://github.com/fransward/filesender/issues/329)
* gpg section for reporting sensitive issues (#710) ([c12fe00](https://github.com/fransward/filesender/commit/c12fe00e2f3f29c574d7b44935ec07b425a2546a)), closes [#710](https://github.com/fransward/filesender/issues/710)
* ie11 and keyversion (#487) ([0750aef](https://github.com/fransward/filesender/commit/0750aef7c5f7bcbd48e8aec8742c82aa3358329f)), closes [#487](https://github.com/fransward/filesender/issues/487)
* landing page to cite version 2.0 (#333) ([1901e8d](https://github.com/fransward/filesender/commit/1901e8d561220ac4a8ec034e52b7b80e46359867)), closes [#333](https://github.com/fransward/filesender/issues/333)
* make sure not to translate the subject keyword from english in the email headers (#495) ([11ca92f](https://github.com/fransward/filesender/commit/11ca92fde62faab9a041e60bcb7aac0881edb7d0)), closes [#495](https://github.com/fransward/filesender/issues/495)
* maybe jumped the gun on the release. Allow info for older versions too (#525) ([30a5ee5](https://github.com/fransward/filesender/commit/30a5ee5593e4443c7a6164edf8910bc56452084f)), closes [#525](https://github.com/fransward/filesender/issues/525)
* more info on how to run this thing ([538ceed](https://github.com/fransward/filesender/commit/538ceed73eb9e72f0d0d4cd44725c411473ed689))
* references to id tags are all lower case (#320) ([ca77ee9](https://github.com/fransward/filesender/commit/ca77ee9480baf2d29c9c8a2826193a1c70a62337)), closes [#320](https://github.com/fransward/filesender/issues/320)
* release update for rc1 (#317) ([867855d](https://github.com/fransward/filesender/commit/867855d3045ed9f5a20d8501f1efb7a5147124e7)), closes [#317](https://github.com/fransward/filesender/issues/317)
* remove that last stale reference to the old help_url (#492) ([c0f85be](https://github.com/fransward/filesender/commit/c0f85be2130edabac0308d073937a09cd93fa359)), closes [#492](https://github.com/fransward/filesender/issues/492)
* running selenium locally (#356) ([adb2b05](https://github.com/fransward/filesender/commit/adb2b05568bb12e0fb0192c6943b4ec6fdefd4b5)), closes [#356](https://github.com/fransward/filesender/issues/356)
* some info for folks to setup a local user/pass access (#319) ([ce8ffe6](https://github.com/fransward/filesender/commit/ce8ffe6ea0dc09f3fc24278fec56278beb88fa92)), closes [#319](https://github.com/fransward/filesender/issues/319)
* some more thoughts on simplesamlphp configuration (#552) ([6662038](https://github.com/fransward/filesender/commit/6662038a151fe29e194f50126c5e4018406e38ce)), closes [#552](https://github.com/fransward/filesender/issues/552)
* some more updates to clean things up a little (#251) ([8ab5092](https://github.com/fransward/filesender/commit/8ab5092d4d64e9e01f2a34be51129f41549d6ad8)), closes [#251](https://github.com/fransward/filesender/issues/251)
* tested this out on a Debian 9 vm (#331) ([80a0999](https://github.com/fransward/filesender/commit/80a09996b778c15b9cf173840d881e71d3bb1f3b)), closes [#331](https://github.com/fransward/filesender/issues/331)
* these are some community contributed ideas (#180) ([d6929b1](https://github.com/fransward/filesender/commit/d6929b13fcb486a697d2c6b505c75c624f301469)), closes [#180](https://github.com/fransward/filesender/issues/180)
* unify dev/doc with docs so there is only one copy (#250) ([db34d5f](https://github.com/fransward/filesender/commit/db34d5f58fdec7a93f3b553ec39fc2d158504903)), closes [#250](https://github.com/fransward/filesender/issues/250)
* update gems to latest (#864) ([55f0374](https://github.com/fransward/filesender/commit/55f03748c1153a8365ee931e1f6137a623d6941e)), closes [#864](https://github.com/fransward/filesender/issues/864)
* update poeditor link (#608) ([3c93e4a](https://github.com/fransward/filesender/commit/3c93e4a5be88055c6a20a64bdeeb3cdcc7180e03)), closes [#608](https://github.com/fransward/filesender/issues/608)
* update the PASS to match declared PASSWORD (#834) ([873c465](https://github.com/fransward/filesender/commit/873c465dc8ec7bf5e801ff6b36e64a9fbf5ac42b)), closes [#834](https://github.com/fransward/filesender/issues/834)
* update the release notes, notes (#653) ([119255a](https://github.com/fransward/filesender/commit/119255a14c08bea563d341addb207ed7e59c9c1d)), closes [#653](https://github.com/fransward/filesender/issues/653)
* update to indicate release (#275) ([9a2d26c](https://github.com/fransward/filesender/commit/9a2d26c431239da12b705bfa6657f7356ead7574)), closes [#275](https://github.com/fransward/filesender/issues/275)
* update to mention php 7.2 and where min versions are at in the docs (#489) ([a68fb96](https://github.com/fransward/filesender/commit/a68fb96881f23c3158bfd6b7702239ef299e9ff0)), closes [#489](https://github.com/fransward/filesender/issues/489)

### Docs

* small updates, refresh the release page instructions (#246) ([452527c](https://github.com/fransward/filesender/commit/452527cbc7eaa1eb1623101ad2b7244b8388109e)), closes [#246](https://github.com/fransward/filesender/issues/246)

### DOCS

* mysql install update (#164) ([4fe3b30](https://github.com/fransward/filesender/commit/4fe3b3072af5d568a5b29c056661113becd111c8)), closes [#164](https://github.com/fransward/filesender/issues/164)

### Edit

* managing camel cases on filenames ([66a42c4](https://github.com/fransward/filesender/commit/66a42c4a01335b1dcc9e75c9eb58687de0833277))
* Managing camel cases on filenames ([b3c63a0](https://github.com/fransward/filesender/commit/b3c63a0abd4e76609fcb4c1a8a6d22a8e70d6893))

### encryption

* ability to set minimum password length (#236) ([a494d0b](https://github.com/fransward/filesender/commit/a494d0b269a40f97fc239026351d0a41c6728573)), closes [#236](https://github.com/fransward/filesender/issues/236)
* new Key derivation using importKey then deiveKey (#375) ([fa99862](https://github.com/fransward/filesender/commit/fa998623d6e1b3f5be2dbc7d8ef4ca1e91cc5481)), closes [#375](https://github.com/fransward/filesender/issues/375)

### exceptions

* allow some extra optional logging (#147) ([5263ba2](https://github.com/fransward/filesender/commit/5263ba2b359f6c7b3086772e36bb9f5812f6e689)), closes [#147](https://github.com/fransward/filesender/issues/147)

### externalStorage

* share the run() and streams update (#215) ([f4cb684](https://github.com/fransward/filesender/commit/f4cb684de3f0889e906f742820c6a521dfa42075)), closes [#215](https://github.com/fransward/filesender/issues/215)

### fis007

* add client side indication to help the user detect issues early (#64) ([4a718ad](https://github.com/fransward/filesender/commit/4a718adfbbfd6d1114aaa028e7ed55b4b9461d5d)), closes [#64](https://github.com/fransward/filesender/issues/64)

### fis011

* you need to be authenticated in order to delete files (#70) ([94b6847](https://github.com/fransward/filesender/commit/94b68476fc80d9df98fedeb7c0a804de9f512b81)), closes [#70](https://github.com/fransward/filesender/issues/70)

### fixed

* #944 added #spinner to default.css and made relevant html changes to upload.php and multiupload.php so both progress bars are identical. ([cccf8f4](https://github.com/fransward/filesender/commit/cccf8f4fc90a7d891743cac985358830ed024b31)), closes [#944](https://github.com/fransward/filesender/issues/944)
* #947 replaced escape() with encodeURIComponent ([743f53f](https://github.com/fransward/filesender/commit/743f53ff626d8ede52138b73da29d8d203c8ebdd)), closes [#947](https://github.com/fransward/filesender/issues/947)

### Fixed

* #936 removed all html5 code from upload.php, file contains only flash related code. ([572cddc](https://github.com/fransward/filesender/commit/572cddcbe002e16fedb05d3864001411f058b375)), closes [#936](https://github.com/fransward/filesender/issues/936)
* #995 Deleted duplicate copy of tsunami.php ([6e61cae](https://github.com/fransward/filesender/commit/6e61caeb52d129290aa12e7ea441755f496e34c4)), closes [#995](https://github.com/fransward/filesender/issues/995)
* #996 replaced all occurrences of Tsunami with TeraSender ([b67a3f2](https://github.com/fransward/filesender/commit/b67a3f22470ed60f79f63279ca013d1e3587923a)), closes [#996](https://github.com/fransward/filesender/issues/996)
* #997 Added code which makes a box for each individual recipient, without adding the same recipient multiple times. Also added code which allows users to remove recipients. ([1fbd4c2](https://github.com/fransward/filesender/commit/1fbd4c2460cc3110f557dd5dcd5bc9eb2f38c769)), closes [#997](https://github.com/fransward/filesender/issues/997)
* #997 Added the feature into the single upload page, fixed a bug where the results page showed multiple copies of the same file. ([93565ac](https://github.com/fransward/filesender/commit/93565ac320c643b8f2ac1979eb84f00f303730e4))
* #997 Moved existing code such that it doesn't interfere with common.js. Made changes so that values are removed from the 'to' field once they exist in the box below. ([b534cdb](https://github.com/fransward/filesender/commit/b534cdbc37dbcbd2b4a5f0940b389d071057eef2)), closes [#997](https://github.com/fransward/filesender/issues/997)

### flash

* remove older references to Flash (#722) ([8086e9d](https://github.com/fransward/filesender/commit/8086e9df8e1f4660b6e21d159b6d61fb58721526)), closes [#722](https://github.com/fransward/filesender/issues/722)

### formatting

* add script to format code (#422) ([4ed5a81](https://github.com/fransward/filesender/commit/4ed5a81f23b3aa6a488256edfbccb5d3f5e66726)), closes [#422](https://github.com/fransward/filesender/issues/422)

### GCM

* AEAD version 1 to ensure whole file and iv (#645) ([08b6282](https://github.com/fransward/filesender/commit/08b6282d60f0556a69fa09a40ff52f2b04f24981)), closes [#645](https://github.com/fransward/filesender/issues/645)
* we can relax the IV counter. New chunk max size checks (#646) ([ea29d6c](https://github.com/fransward/filesender/commit/ea29d6c705831bda01a3739ef28f906c8e96d957)), closes [#646](https://github.com/fransward/filesender/issues/646)

### GDPR

* Allow a user to leave the system (#387) ([da6d746](https://github.com/fransward/filesender/commit/da6d7467f3c0a025dee381ce3c0695b95939d889)), closes [#387](https://github.com/fransward/filesender/issues/387)

### gems

* update nokogiri dep (#291) ([613c78e](https://github.com/fransward/filesender/commit/613c78e400ff53e421e4eb13e3c06ecd077d9e4b)), closes [#291](https://github.com/fransward/filesender/issues/291)

### gitignore

* better git status (#688) ([fcf65d5](https://github.com/fransward/filesender/commit/fcf65d50ce70f33204401b6ccea36439082cd63b)), closes [#688](https://github.com/fransward/filesender/issues/688)

### Graphs

* show average upload performance for last 30 days (#139) ([c8f7620](https://github.com/fransward/filesender/commit/c8f762001c4de17195263af6a9db6e957217fb7a)), closes [#139](https://github.com/fransward/filesender/issues/139)

### guests

* better handling of do not expire (#683) ([8c66d8c](https://github.com/fransward/filesender/commit/8c66d8ce5a1464939871e89e9c8fe930a8df4265)), closes [#683](https://github.com/fransward/filesender/issues/683)
* can_only_send_to_me default=1 and available=0 (#496) ([c1cd876](https://github.com/fransward/filesender/commit/c1cd876b32b20c4ecd0afb79329ce088a70cbb34)), closes [#496](https://github.com/fransward/filesender/issues/496)
* improved interaction of get_a_link and send_to_me (#606) ([3f902bd](https://github.com/fransward/filesender/commit/3f902bda8585491c18433bd6d728aad937d5402a)), closes [#606](https://github.com/fransward/filesender/issues/606)
* show a nicer dialog when user has max guests (#684) ([94e862e](https://github.com/fransward/filesender/commit/94e862eb4ffbb492239764a4c71439a2ea3d90a4)), closes [#684](https://github.com/fransward/filesender/issues/684)
* use sql directly in fromGuestsOf and allow restriction (#614) ([7fab63d](https://github.com/fransward/filesender/commit/7fab63ddd360bc5458945a0981bb07a2c91f2c22)), closes [#614](https://github.com/fransward/filesender/issues/614)

### i18n

* ability to import translations from poeditor exports (#265) ([74fcb1f](https://github.com/fransward/filesender/commit/74fcb1f7df4c0c43e530fe2b83408cb87971e8e3)), closes [#265](https://github.com/fransward/filesender/issues/265)
* add new terms before trying to update translations (#856) ([c296ecc](https://github.com/fransward/filesender/commit/c296eccab99a691dc81aa0b8d334e68cbc218bcb)), closes [#856](https://github.com/fransward/filesender/issues/856)
* add these new files too (#780) ([865a499](https://github.com/fransward/filesender/commit/865a499df0fdd0f598b48dff638c3376456d6c96)), closes [#780](https://github.com/fransward/filesender/issues/780)
* auto import from poedtor on 2019-11-19-1574142468 (#691) ([07659ee](https://github.com/fransward/filesender/commit/07659ee146a3e3b04a0963ea34d0aae0bd23276a)), closes [#691](https://github.com/fransward/filesender/issues/691)
* auto import from poedtor on 2019-11-28-1574931900 (#702) ([86cc727](https://github.com/fransward/filesender/commit/86cc727202d0f448bf558bf8c06b321f600ced61)), closes [#702](https://github.com/fransward/filesender/issues/702)
* auto import from poedtor on 2019-11-28-1574934103 (#703) ([31e856f](https://github.com/fransward/filesender/commit/31e856f8646717151c343b5bae48e50c9bbe24da)), closes [#703](https://github.com/fransward/filesender/issues/703)
* auto import from poedtor on 2020-02-02-1580589029 (#738) ([b2ea31c](https://github.com/fransward/filesender/commit/b2ea31c6717c81634298c2299c0ce9edf18a5488)), closes [#738](https://github.com/fransward/filesender/issues/738)
* auto import from poedtor on 2020-03-01-1583063700 (#753) ([64226af](https://github.com/fransward/filesender/commit/64226af12b6e35536ae66bb45c70eb68d2b70f63)), closes [#753](https://github.com/fransward/filesender/issues/753)
* auto import from poedtor on 2020-04-25-1587786159 (#779) ([a30c0a4](https://github.com/fransward/filesender/commit/a30c0a4625e7188d5e548a07473a46b6a967ecba)), closes [#779](https://github.com/fransward/filesender/issues/779)
* auto import from poedtor on 2020-05-22-1590106731 (#805) ([45e6aa1](https://github.com/fransward/filesender/commit/45e6aa1ba25e87fdd9da8dfac8cb49fb01779413)), closes [#805](https://github.com/fransward/filesender/issues/805)
* auto import from poedtor on 2020-10-07-1602044483 (#847) ([77d9071](https://github.com/fransward/filesender/commit/77d9071b0921bc63173495b8420f66be3f6fca7c)), closes [#847](https://github.com/fransward/filesender/issues/847)
* auto import from poedtor on 2020-12-06-1607205049 (#887) ([e5e5c0d](https://github.com/fransward/filesender/commit/e5e5c0d56f1bfa6c024078ddbf91b1bc4dbaf227)), closes [#887](https://github.com/fransward/filesender/issues/887)
* break out language download script so that convert-php-to-poeditor-json.php can use it (#855) ([29cc788](https://github.com/fransward/filesender/commit/29cc788d9055c8b469685955bffabf45ebd75e2d)), closes [#855](https://github.com/fransward/filesender/issues/855)
* bring in new da_DK translation (#624) ([ed9eb5e](https://github.com/fransward/filesender/commit/ed9eb5e858119bba8387221b814f943d5d6841ae)), closes [#624](https://github.com/fransward/filesender/issues/624)
* change file.name to file.path for dirtree (#310) ([a1890bf](https://github.com/fransward/filesender/commit/a1890bfa45d8c5cab9e0f79f9f1d594e87a18659)), closes [#310](https://github.com/fransward/filesender/issues/310)
* export-terms-to-new-and-deleted-lists.sh exported to poeditor (#768) ([b4ea4bf](https://github.com/fransward/filesender/commit/b4ea4bfed6b5249098f662e7dd6ea202c5b9c9a4)), closes [#768](https://github.com/fransward/filesender/issues/768)
* graphs can be internationalized (#288) ([4e0515d](https://github.com/fransward/filesender/commit/4e0515df5799ce44d639714e7265de21c3622761)), closes [#288](https://github.com/fransward/filesender/issues/288)
* import en_AU from poeditor (#271) ([d424b1c](https://github.com/fransward/filesender/commit/d424b1cd735638178fceba955c946990bc62a9d3)), closes [#271](https://github.com/fransward/filesender/issues/271)
* import langs expects to be in the scriptdir. en_au tested (#689) ([7e9cb30](https://github.com/fransward/filesender/commit/7e9cb30121bf1c6b7152828838abf8e4e601c015)), closes [#689](https://github.com/fransward/filesender/issues/689)
* import languages and a new script to help (#618) ([c826c06](https://github.com/fransward/filesender/commit/c826c0684948ba1ff8997fd06f73d133017bf3a5)), closes [#618](https://github.com/fransward/filesender/issues/618)
* import languages from poeditor (#279) ([759479c](https://github.com/fransward/filesender/commit/759479cb2a7cd1c6ca33027e47a72489f48eb503)), closes [#279](https://github.com/fransward/filesender/issues/279)
* import script updates (#270) ([cb79d77](https://github.com/fransward/filesender/commit/cb79d7754189d5556d9d02009eb571f03b8bc7a4)), closes [#270](https://github.com/fransward/filesender/issues/270)
* mark these files to help changes go to poeditor (#309) ([1b19884](https://github.com/fransward/filesender/commit/1b198844aa554b4db08ea31d4ca9a24b9e16173b)), closes [#309](https://github.com/fransward/filesender/issues/309)
* new command line to upload newterms to poeditor (#857) ([8f01152](https://github.com/fransward/filesender/commit/8f0115212b98ad6a5f5e073ca9d4a0e278f440d5)), closes [#857](https://github.com/fransward/filesender/issues/857)
* new script to import from json from poeditor (#687) ([ed3fb0b](https://github.com/fransward/filesender/commit/ed3fb0b7c9ae7d5fe044a444f07c59aeaa02bb0d)), closes [#687](https://github.com/fransward/filesender/issues/687)
* new terms added to poeditor (#650) ([0c9b3b4](https://github.com/fransward/filesender/commit/0c9b3b4ce28148f06baf76aeaba45e19b511d1df)), closes [#650](https://github.com/fransward/filesender/issues/650)
* new translations from pr 832 (#836) ([42e401d](https://github.com/fransward/filesender/commit/42e401d3860fd0a01e93f1936a6333a290903c11)), closes [#836](https://github.com/fransward/filesender/issues/836)
* optional ability to filter terms to upload using existing terms (#854) ([af3ab9c](https://github.com/fransward/filesender/commit/af3ab9c0e53fdfb1f6fb19bb4f47d9989e0c6f5a)), closes [#854](https://github.com/fransward/filesender/issues/854)
* Poeditor update 20191109 (with fixes for #674 and #675) (#680) ([7647bad](https://github.com/fransward/filesender/commit/7647bade64462fd5cdffee307242e34272f367c5)), closes [#674](https://github.com/fransward/filesender/issues/674) [#675](https://github.com/fransward/filesender/issues/675) [#680](https://github.com/fransward/filesender/issues/680) [#675](https://github.com/fransward/filesender/issues/675) [#675](https://github.com/fransward/filesender/issues/675) [#674](https://github.com/fransward/filesender/issues/674) [#674](https://github.com/fransward/filesender/issues/674) [#674](https://github.com/fransward/filesender/issues/674) [#675](https://github.com/fransward/filesender/issues/675)
* revert to order and definitions as in release 2.11 plus one new item. (#685) ([9ed00c7](https://github.com/fransward/filesender/commit/9ed00c7b269c6aa45ba821ebc3e3c48298b50280)), closes [#685](https://github.com/fransward/filesender/issues/685) [#669](https://github.com/fransward/filesender/issues/669)
* running import-all-from-poeditor.sh on all languages (#690) ([e480abd](https://github.com/fransward/filesender/commit/e480abd884143570df4378137e1e6b337543ceb0)), closes [#690](https://github.com/fransward/filesender/issues/690)
* script update and language import for en_au (#267) ([22b7091](https://github.com/fransward/filesender/commit/22b7091029481d6daacd97c5d88c19131791c999)), closes [#267](https://github.com/fransward/filesender/issues/267)
* scripts to export selected terms from the local repository to poeditor (#852) ([e84fbe2](https://github.com/fransward/filesender/commit/e84fbe23ce70b6675531e3ccd1a099dd632c71fe)), closes [#852](https://github.com/fransward/filesender/issues/852)
* this was changed as it is a variable rather than static config (#619) ([8285517](https://github.com/fransward/filesender/commit/828551739f10dccf7ced9f94febf4c2b30854fef)), closes [#619](https://github.com/fransward/filesender/issues/619)
* update oldterms to include current data from en_AU (#686) ([c59a344](https://github.com/fransward/filesender/commit/c59a3442b021d4569d848a0e43ba78a305cb5d02)), closes [#686](https://github.com/fransward/filesender/issues/686)
* update stale documentation (#862) ([431ea90](https://github.com/fransward/filesender/commit/431ea90f40eeac8162812989267db41c41ebe62d)), closes [#862](https://github.com/fransward/filesender/issues/862)
* when adding a locale you must update this too (#634) ([24ab4db](https://github.com/fransward/filesender/commit/24ab4db29a82f53c506b6550072ac0e6e1794574)), closes [#634](https://github.com/fransward/filesender/issues/634)

### i38n

* ability to export new terms from github to poeditor (#283) ([f315a75](https://github.com/fransward/filesender/commit/f315a75d4d6313e45b0db95e948d3e12cff8e910)), closes [#283](https://github.com/fransward/filesender/issues/283)
* empty_file term (#369) ([918be8b](https://github.com/fransward/filesender/commit/918be8b28a0007aea098120fc6128151e94a6160)), closes [#369](https://github.com/fransward/filesender/issues/369)
* sort all the remaining lang.php files (#278) ([5f332d9](https://github.com/fransward/filesender/commit/5f332d9841f20d13cbe2db489a7c0e9b3880084d)), closes [#278](https://github.com/fransward/filesender/issues/278)

### ie11

* fix for generated passwords (#711) ([2a3745f](https://github.com/fransward/filesender/commit/2a3745f29754c0c48c1b2ea809f08f5c3f277955)), closes [#711](https://github.com/fransward/filesender/issues/711)

### lang

* import from poeditor again (#316) ([922e096](https://github.com/fransward/filesender/commit/922e096e9767c6c84c3444503f82226d0983dc5b)), closes [#316](https://github.com/fransward/filesender/issues/316)
* import german from poeditor (#366) ([70d98f9](https://github.com/fransward/filesender/commit/70d98f953854122dadb4583a8b6dbfae2960cbbb)), closes [#366](https://github.com/fransward/filesender/issues/366)
* new terms for aggregate graphs (#451) ([5ba19bd](https://github.com/fransward/filesender/commit/5ba19bd03193cbd37318d4b3dc1c292e0a9e6226)), closes [#451](https://github.com/fransward/filesender/issues/451)
* sorted new terms (#352) ([115d3e0](https://github.com/fransward/filesender/commit/115d3e0f5188e159a3508863e7cd17ac6e2566b3)), closes [#352](https://github.com/fransward/filesender/issues/352)
* updated terms by scripts (#391) ([f3396b7](https://github.com/fransward/filesender/commit/f3396b7188824e9ec2b33be62bebe7ce8ca943e3)), closes [#391](https://github.com/fransward/filesender/issues/391)
* updates terms list (#353) ([ef95858](https://github.com/fransward/filesender/commit/ef958580df0c92aa64dbfd82dd03ad81057fc12a)), closes [#353](https://github.com/fransward/filesender/issues/353)

### layout

* move to 900px to allow some space again (#485) ([51f0e16](https://github.com/fransward/filesender/commit/51f0e16448deeeaa9183a13608f4b2487a0e8f7e)), closes [#485](https://github.com/fransward/filesender/issues/485)

### Limits

* ability to set maximum file size for encrypted files (#235) ([ac55115](https://github.com/fransward/filesender/commit/ac55115a39afbad45dd422ff7768d5684d4e9e1f)), closes [#235](https://github.com/fransward/filesender/issues/235)

### localdbauth

* create-user command line script chicken and egg (#763) ([265197a](https://github.com/fransward/filesender/commit/265197aec3305350d1fbb62f632e1bb32bbd9253)), closes [#763](https://github.com/fransward/filesender/issues/763)

### logs

* remove some of the clutter that hits them (#170) ([faabed9](https://github.com/fransward/filesender/commit/faabed996d5b880d94d905a95f66dfce11bac840)), closes [#170](https://github.com/fransward/filesender/issues/170)

### mail

* do not double encode the right side of the URL (#494) ([4b67d93](https://github.com/fransward/filesender/commit/4b67d937d6afc07270b35d2b0174aa8a8f5e0ab8)), closes [#494](https://github.com/fransward/filesender/issues/494)

### mariadb

* try a few of these things and see what happens on 10.0 (#413) ([3c668c0](https://github.com/fransward/filesender/commit/3c668c06fa734f3b7a63092f9790a939e931d2ca)), closes [#413](https://github.com/fransward/filesender/issues/413)

### myprofile

* move actions to the end of the page (#481) ([9f9fe83](https://github.com/fransward/filesender/commit/9f9fe83cbe33179abe08b380cb7c90021643e9f9)), closes [#481](https://github.com/fransward/filesender/issues/481)

### mysql

* updates for table name case and delete from sql (#663) ([a4595bc](https://github.com/fransward/filesender/commit/a4595bcfc794c16e2c2696bea1ace16f476da40a)), closes [#663](https://github.com/fransward/filesender/issues/663)

### osx

* always show zip64 warning (#512) ([41edce5](https://github.com/fransward/filesender/commit/41edce550d9edc8842e1abc5d64533c53849e4ef)), closes [#512](https://github.com/fransward/filesender/issues/512)
* show warning on 2gb instead of 4gb (#292) ([cc9aae9](https://github.com/fransward/filesender/commit/cc9aae90f852231e5f17dc01dbd2662458a48c9f)), closes [#292](https://github.com/fransward/filesender/issues/292)

### pbkdf2

* enable dialog by default (#701) ([93cba75](https://github.com/fransward/filesender/commit/93cba7571ed50f2f3920b5cb955607c7ad23eea1)), closes [#701](https://github.com/fransward/filesender/issues/701)

### privacy

* add some information about bounces and allow frequent emails to be cleared (#913) ([7877cfb](https://github.com/fransward/filesender/commit/7877cfb5dfa4adb3fb6017edcd06e042731e1206)), closes [#913](https://github.com/fransward/filesender/issues/913)
* sunsets on how long data is held (#381) ([a07a96e](https://github.com/fransward/filesender/commit/a07a96ee20c7dd3d7488c283e00f6bec183e6249)), closes [#381](https://github.com/fransward/filesender/issues/381)

### quotas

* handle zero as unlimited and force save when value changes (#415) ([807b132](https://github.com/fransward/filesender/commit/807b1322c068e88f7daf978be36e5b42a39791e4)), closes [#415](https://github.com/fransward/filesender/issues/415)

### Re

* #911 Added some new email flow options into multiupload.php and added settings in config-dist to make these configurable. ([89ab001](https://github.com/fransward/filesender/commit/89ab0017034b3afdec2293e86d67fd3c888f2d74)), closes [#911](https://github.com/fransward/filesender/issues/911)
* #911 Created default values for email-flow checkboxes which are controlled via config. ([e81846a](https://github.com/fransward/filesender/commit/e81846a9b7910a5223839c8720920ba07d35a66e)), closes [#911](https://github.com/fransward/filesender/issues/911)
* #911 Fixed a typo for daily statistics ([7c94b6f](https://github.com/fransward/filesender/commit/7c94b6fa953117f4606b91931e5ff1d999e7cc32))
* #911 Re: #934 Replaced the text for the email options with calls to lang(). ([dfb0c6b](https://github.com/fransward/filesender/commit/dfb0c6b6830445da80426e853fdd8b0a1bb78e1b)), closes [#911](https://github.com/fransward/filesender/issues/911) [#934](https://github.com/fransward/filesender/issues/934)
* #913 Changed the validation messages relating to number of selected files to be more consistant with the rest of the error messages on the page. (Now displayed using fileMsg and status bar) ([6aa7cbb](https://github.com/fransward/filesender/commit/6aa7cbbdcec35d275b62a1b8e4830ef5d0ce04fd)), closes [#913](https://github.com/fransward/filesender/issues/913)
* #913 Changed the way the statistics are hidden such that they re-appear correctly and don't affect the layout of the page. ([37129bc](https://github.com/fransward/filesender/commit/37129bc22abcc7a59d4639062a1789593dc2a3af)), closes [#913](https://github.com/fransward/filesender/issues/913)
* #914 Some minor changes to the progress bar to make buttons a standard size, removed the suspend button, added lang calls to control the text on the buttons. ([72f4c81](https://github.com/fransward/filesender/commit/72f4c8138a6bbb6cbfbf83bd9d3f0be57af8f97c)), closes [#914](https://github.com/fransward/filesender/issues/914)
* #916 Changed pause functionality such that it now waits for all web workers to finish uploading their current chunk before pausing. This is still an early version and requires a way of differentiating between the 3 states; Uploading, Pausing, Paused. ([a035d35](https://github.com/fransward/filesender/commit/a035d35006c0735bf221a6a0e2e0802404c598a8)), closes [#916](https://github.com/fransward/filesender/issues/916)
* #916 Changed the functionality on cancel upload button such that it now removes all database information containing that transaction. This has NOT been tested to work with guest vouchers. ([a677f93](https://github.com/fransward/filesender/commit/a677f931afd55dcd9a2393aea08d588050960234)), closes [#916](https://github.com/fransward/filesender/issues/916)
* #916 Changed the location of the landing page so that the user never leaves the upload page if they cancel the upload. Details of success/failure are now placed in the status bar. ([8bba704](https://github.com/fransward/filesender/commit/8bba7049fadfdff58d472fc49e4e3362adeade62)), closes [#916](https://github.com/fransward/filesender/issues/916)
* #916 Early version of pause/resume functionality in place. Pause / Resume work but percentages and upload speeds may not be displayed correctly in some places after resuming. ([d011cf1](https://github.com/fransward/filesender/commit/d011cf1a692cb3503bc8edf1c1e211304e57fe1d)), closes [#916](https://github.com/fransward/filesender/issues/916)
* #916 Improved the pause/resume functionality such that it now displays 'pausing...' until all current chunks have finished uploading, at which point the upload is then marked as paused. Result.php takes into consideration the amount of time spent paused and updates the average upload speed accordingly. ([6b5f968](https://github.com/fransward/filesender/commit/6b5f96874fd8641a91f4bd8922809dd85c45be5f)), closes [#916](https://github.com/fransward/filesender/issues/916)
* #916 Successful upload cancel now takes the user away from the upload page to the results page. This page however should be more reflective as to what has actually happened. ([aa13936](https://github.com/fransward/filesender/commit/aa139362a162cb89e0db2dcac61388de8e3c864d)), closes [#916](https://github.com/fransward/filesender/issues/916)
* #918 Added a checkbox to the 'delete transaction' dialog which asks if the uploader wishes the inform the users of the deletion via email. ([18472dd](https://github.com/fransward/filesender/commit/18472dd0be53f3b2bc85ddc1d5bc7fcc11a0af4a)), closes [#918](https://github.com/fransward/filesender/issues/918)
* #918 Added a list of the recipients to the title tag of the 'to' field which displays on hover. ([960e537](https://github.com/fransward/filesender/commit/960e53713447e0058c63e4b7d6be0b46c1a00e32)), closes [#918](https://github.com/fransward/filesender/issues/918)
* #918 Added a shell for the recipients table which will act as a way of seeing individual recipients download activity for the expanded tracking code. Currently doesn't contain any download information. ([7dead46](https://github.com/fransward/filesender/commit/7dead46c1173e8efa2de9040a05926856506937f)), closes [#918](https://github.com/fransward/filesender/issues/918)
* #918 Added content to the recipients table which retrieves a list of all recipients and lists all the files associated with the tracking code for each person, and the number of times they have downloaded each file. The download statistic is currently inaccurate and doesn't reflect the individual. Also added a blank column to the right hand side to create consistent spacing between all sides. ([ce909c4](https://github.com/fransward/filesender/commit/ce909c40a421e15b07162fe45c36d2556fbf2bd9)), closes [#918](https://github.com/fransward/filesender/issues/918)
* #918 Added in functionality for a 'delete transaction' button which closes off all files for all recipients. Added in new language definitions for this. ([d1a4dbc](https://github.com/fransward/filesender/commit/d1a4dbcf5d1c8d568402085ad457cc3c08f0fc69))
* #918 Added in functionality that allows for the addition of new recipients to a upload transaction. this required the addition of the new function 'addRecipientsToTransaction' in functions.php and some changes to the html of files.php ([9251108](https://github.com/fransward/filesender/commit/9251108ebecc3cbb6bbf02d4f648a985e036bc68)), closes [#918](https://github.com/fransward/filesender/issues/918)
* #918 added some styling to the 'pre' html tag to create consistency within 'message' field. ([0a699a1](https://github.com/fransward/filesender/commit/0a699a1eaa3f04554b75c4df27e202088b6bea22)), closes [#918](https://github.com/fransward/filesender/issues/918)
* #918 Changed addRecipientsToTransaction in functions.php such that it returns true when a recipient is added and false if nothing happened. Also re-added form validation into the add recipient form, and changed the status bar errors accordingly. ([73c56ef](https://github.com/fransward/filesender/commit/73c56ef105413a70955fb37f41a9ac77dde6a118)), closes [#918](https://github.com/fransward/filesender/issues/918)
* #918 changed addRecipientsToTransactions so that it adds a new filevoucheruid to each file to create valid download links ([c710594](https://github.com/fransward/filesender/commit/c71059418647dd4d383aca5a8b21b698c578c93c)), closes [#918](https://github.com/fransward/filesender/issues/918)
* #918 Changed files.php post requests from 'gid' to 'groupid' to prevent them interfering with the gid used in index.php. Changed the criteria for 'resend' such that it uses the multi-file download email and produces a valid download link. ([442a886](https://github.com/fransward/filesender/commit/442a886d0fd81205e859309abcebda469586f2a1)), closes [#918](https://github.com/fransward/filesender/issues/918)
* #918 Changed openAddRecipient parameters such that it shows the full list of files the new recipient will gain access to rather than just the first one. ([64f64f4](https://github.com/fransward/filesender/commit/64f64f4b7f90463797d17e2f522d3cc3d16065bf)), closes [#918](https://github.com/fransward/filesender/issues/918)
* #918 Changed the 'downloaded' column in the recipients table to reflect their total number of downloads rather than the maximum for a single file for consistency. ([8e38727](https://github.com/fransward/filesender/commit/8e387271ef204116df1a57dc2a45cf1fb5b2acbc)), closes [#918](https://github.com/fransward/filesender/issues/918)
* #918 Changed the functionality of 'show all' on the top bar such that it only opens the row and not the contents of the row (recipients table remains shut) ([aff2ce3](https://github.com/fransward/filesender/commit/aff2ce3d2795d6e1909a34fe26285c8f343bb60f)), closes [#918](https://github.com/fransward/filesender/issues/918)
* #918 Changed the values of the download columns such that they display totals rather than just the maximum. Added a function which calculates the total number of times a file has been downloaded using logs. ([620f573](https://github.com/fransward/filesender/commit/620f57342143c9cd5be76789b53acb3a75a1d0c4)), closes [#918](https://github.com/fransward/filesender/issues/918)
* #918 Changes made to add more consistency between tables. added in some code which shows how many un-displayed recipients there are for a tracking code. ([b3204c1](https://github.com/fransward/filesender/commit/b3204c105ed4139c36da37d712a9a04509e09489)), closes [#918](https://github.com/fransward/filesender/issues/918)
* #918 Corrected a tooltip error which said 'Delete recipient' on the 'Delete transaction' button. ([4278199](https://github.com/fransward/filesender/commit/4278199fe07a654c22b0fad632c6af091a552873)), closes [#918](https://github.com/fransward/filesender/issues/918)
* #918 Made sure the 'message' field doesn't show in the alternate colour if the subject field is empty. ([59fae61](https://github.com/fransward/filesender/commit/59fae61f167009b0328403b4f61b2f8369d265c2)), closes [#918](https://github.com/fransward/filesender/issues/918)
* #918 Re #951 Added in new functionality for the 'delete' button which revokes access to a transaction for a specific recipient. ([eb0cd77](https://github.com/fransward/filesender/commit/eb0cd778e307ad180a551e6ec748ce7df62fd527)), closes [#918](https://github.com/fransward/filesender/issues/918) [#951](https://github.com/fransward/filesender/issues/951)
* #918 Re: #911  Added a checkbox to the 'delete recipient' dialog which asks if the uploader wishes to inform the user of the deletion via email. ([0407bd8](https://github.com/fransward/filesender/commit/0407bd87025f3720f863f48dccc308dd25b6a5bb)), closes [#918](https://github.com/fransward/filesender/issues/918) [#911](https://github.com/fransward/filesender/issues/911)
* #918 Re: #911 Fixed a php error in files.php to do with indexing and added fileuid values into addRecipientsToTransaction in functions.php, functionality for adding new recipients to a tracking code now work. ([5e185c7](https://github.com/fransward/filesender/commit/5e185c70ad0936ceb0972c0d72e5063d31f8e09f))
* #918 Removed the download link from the tracking code due to it causing inconsistent results depending on who the recipients for the tracking code were. ([7b81ba2](https://github.com/fransward/filesender/commit/7b81ba2d67d8dfe6792c309637bb15019b13d818)), closes [#918](https://github.com/fransward/filesender/issues/918)
* #918 Reworked code which replaced button text with lang strings. ([048bd1f](https://github.com/fransward/filesender/commit/048bd1f52e4e06b260fab7fcbed396e5e3f0a4fd)), closes [#918](https://github.com/fransward/filesender/issues/918)
* #918 Slight change to 'addRecipient' such that it uses the original message/subject unless specified otherwise. ([caf664e](https://github.com/fransward/filesender/commit/caf664e9995ee928f71238cc9c2da04c14a9e9cd)), closes [#918](https://github.com/fransward/filesender/issues/918)
* #934 Added in some more lang definitions and calls in EN_AU / files.php ([1042cca](https://github.com/fransward/filesender/commit/1042cca585c9e4d5d59fa4f6a4053daf7fdf6403)), closes [#934](https://github.com/fransward/filesender/issues/934)
* #934 Added some new language definitions to EN_AU and made calls to them in files.php ([d03a9d8](https://github.com/fransward/filesender/commit/d03a9d8f7eff0406493bca72b26fd1530557c515)), closes [#934](https://github.com/fransward/filesender/issues/934)
* #934 removed remaining $lang calls in vouchers.php ([3da507c](https://github.com/fransward/filesender/commit/3da507caff7d03fca81717cd59c2ac1aa1266999)), closes [#934](https://github.com/fransward/filesender/issues/934)
* #945 Moved function secondsToString into common.js and removed it from both upload.js and multiupload.js ([4feb3b2](https://github.com/fransward/filesender/commit/4feb3b2299729bf99701c45294231e2d8c9de5d2)), closes [#945](https://github.com/fransward/filesender/issues/945)
* #945 updateProgressBar has been removed from multiupload.js and placed in common.js and changes have been made to prepare upload.js for the same transition. ([1ed124c](https://github.com/fransward/filesender/commit/1ed124cde84fdc22f434eb40a79f22c02f19d299)), closes [#945](https://github.com/fransward/filesender/issues/945)
* #946 moved the empty upload box clause into validate_files() to fix a bug where no files were checked if n == -1 (never entered for loop). ([d6db2b9](https://github.com/fransward/filesender/commit/d6db2b9c50a90bfdb5832bba2eaec528b540d3b8))
* #948 Removed the code that appears in upload_flash_js from upload.php, removed code from upload.php that appears in upload_common_js. upload.php now only contains a doc ready and html code. ([a5a2ca0](https://github.com/fransward/filesender/commit/a5a2ca0b6794db9417fd68e6d0ffac037d9d6606)), closes [#948](https://github.com/fransward/filesender/issues/948)
* #948 Updated flash content to trunk version and made further changes such that it works with updateProgressBar instead of updatepb. removed updatepb from upload.js. ([1b5f851](https://github.com/fransward/filesender/commit/1b5f85138467dccb7b39627e20a19ec2a76bc2c0)), closes [#948](https://github.com/fransward/filesender/issues/948)
* #958 'glow' effect adding into CSS. added the glow into the 3 main validation fields. Also moved the 'clear all' button onto the same line as the 'select files' button for consistancy. ([66e6d03](https://github.com/fransward/filesender/commit/66e6d03a371ddc0896cc771d8baacc87f753ea8f)), closes [#958](https://github.com/fransward/filesender/issues/958)
* #958 Added code to default.css for the new status bar, replaced error messages with new status bar messages in files.php and download.php ([426eb3a](https://github.com/fransward/filesender/commit/426eb3a76ffcf1051bdaf769f96a27b4a91712ab)), closes [#958](https://github.com/fransward/filesender/issues/958)
* #958 changed doc ready in files.php to use the new statusMessage function in common.js rather than the same code repeated. ([92463c0](https://github.com/fransward/filesender/commit/92463c079dc94d6cbe87fdf9c335352b41c1adcb)), closes [#958](https://github.com/fransward/filesender/issues/958)
* #958 changed the colour of the incorrect field labels in multiupload.php to be more reflective of where the errors occur. Thanks to Jan for the suggestion. ([44d852d](https://github.com/fransward/filesender/commit/44d852d85109e6e01091c3daa0e0d28a7ffbb700)), closes [#958](https://github.com/fransward/filesender/issues/958)
* #958 Moved all messages into the new status bar for vouchers.php ([e5f6a9c](https://github.com/fransward/filesender/commit/e5f6a9c6327e0e823fe21d3611b88d4b7931f896)), closes [#958](https://github.com/fransward/filesender/issues/958)
* #958 Moved remaining 'scratch' error messages onto the status barand removed the scratch div ([740b105](https://github.com/fransward/filesender/commit/740b1050a33a94e257ea0d14e0c4e82e791f6bbd)), closes [#958](https://github.com/fransward/filesender/issues/958)
* #958 Renamed statusErr to statusMsg to be more reflective of what it is actually used for. ([93feff5](https://github.com/fransward/filesender/commit/93feff5e09627fdf5c1be0bd196c79e9b7555d50)), closes [#958](https://github.com/fransward/filesender/issues/958)
* #967 First wave of code refactoring for vouchers.php ([2240f72](https://github.com/fransward/filesender/commit/2240f729fb26f29a547cedafda089da6b1bad322)), closes [#967](https://github.com/fransward/filesender/issues/967)
* #967 First wave of refactoring on files.php ([30f77d9](https://github.com/fransward/filesender/commit/30f77d9e60755b083643fc312a06d39650c297ac)), closes [#967](https://github.com/fransward/filesender/issues/967)
* #967 first wave of refactoring on upload.js ([68bfec5](https://github.com/fransward/filesender/commit/68bfec519e058955160fa0d7cd85d2606900f114)), closes [#967](https://github.com/fransward/filesender/issues/967)
* #967 Renamed 'calendar_js.php' to 'common_js.php' and added email autocomplete script and code which replaces button text with lang calls ([cc22a44](https://github.com/fransward/filesender/commit/cc22a44287e80d94572b15a74ad0cb223532891c)), closes [#967](https://github.com/fransward/filesender/issues/967)
* #967 Replaced old button handling jquery code with call to 'addButtonText' from common_js.php ([52c8c27](https://github.com/fransward/filesender/commit/52c8c27386f20a332fe80fc01e456ffa64e3edbb)), closes [#967](https://github.com/fransward/filesender/issues/967)
* #967 Some minor code styling changes to upload_common_js, renamed groupid to groupID ([04f9b8d](https://github.com/fransward/filesender/commit/04f9b8d5915e59a04c18a1e98c887bc82bf0c389)), closes [#967](https://github.com/fransward/filesender/issues/967)
* #967 Some refactoring / tidying to common.js ([e177343](https://github.com/fransward/filesender/commit/e177343d6e09d8ae7263e1c4f9a633bfb7715900)), closes [#967](https://github.com/fransward/filesender/issues/967)
* #974 Changed the default height off the file selection box to further reduce the size of the multiupload page. Number of files that fits by default (without scroll bar) is reduced from 5 to 4. ([6f2b3f5](https://github.com/fransward/filesender/commit/6f2b3f59c62cd46f20b860b2e605a568b6453319)), closes [#974](https://github.com/fransward/filesender/issues/974)
* #974 Made an effort to reduce the size of the multiupload page by placing the 'show/hide message' on the same line as above, reducing the size of the message box and removing the <p> tags around the banner at the top of the page. ([b02ddc4](https://github.com/fransward/filesender/commit/b02ddc486cf9fa9e880a85c1e0026b3091cd1250)), closes [#974](https://github.com/fransward/filesender/issues/974)
* #976 Changed blue status messages to regular sized text. Made sure message only displays if the user is actually logged in. Added a welcome message for guest users. ([a223fa1](https://github.com/fransward/filesender/commit/a223fa19f38f29d4a18539a51b20fff71a5eac63)), closes [#976](https://github.com/fransward/filesender/issues/976)
* #976 replaced the 'logged in as:' with a lang call ([9bb1772](https://github.com/fransward/filesender/commit/9bb1772a0eeb8818e658aa7df793b98081b69252)), closes [#976](https://github.com/fransward/filesender/issues/976)
* #978 Added 'you are logged in as: ' message to status bar on page load. Changes if a more important message needs displaying. ([84c9d16](https://github.com/fransward/filesender/commit/84c9d16e52507869fc0132d3edb51d4c65637568)), closes [#978](https://github.com/fransward/filesender/issues/978)
* #978 Fixed a bug where 'You are using a guest voucher' was not displaying on guest accounts. ([23d3d39](https://github.com/fransward/filesender/commit/23d3d399239ae1b7948999cf00368be4f1e30355))
* #978 Fixed a bug where window was reloading instead of calling cancelupload in all cases. Window is now only refreshed when a voucher user cancels their upload, authenticated users get their uploads fully cancelled. ([5a3fae3](https://github.com/fransward/filesender/commit/5a3fae397c02293edb3396bc8cbf77fd4e94fa39))
* #978 Fixed a problem where guest vouchers failed to work how they should, where the first call to 'validateupload' in fs_multi_upload was not sending the voucher id, which resulted in a non-authenticated error in the javascript console. ([7a15801](https://github.com/fransward/filesender/commit/7a15801fa5eade753b0f31485e4e0549df3aa328))
* #988 Fully updating progress bars now work when the user has access to html5 but NOT access to web workers. Tested on Firefox, Chrome, Internet Explorer. ([0ab6375](https://github.com/fransward/filesender/commit/0ab6375e2d47923a61abfe0f8fb46e702fbe4d62)), closes [#988](https://github.com/fransward/filesender/issues/988)
* #989 Added in code which skips an upload if the filedata array for that element has been cleared ([43facb6](https://github.com/fransward/filesender/commit/43facb6a679289c8d17991c57aea5014af118071)), closes [#989](https://github.com/fransward/filesender/issues/989)
* #989 Fixed a bug where files previously deleted would re-appear after using clear/undo. Removing a file from the upload box now has expected results. ([8101887](https://github.com/fransward/filesender/commit/81018873c516e1e3aa3333f7ca8555502487dbea))
* #993 replaced all occurrences of fread with a version that uses chunkSize where applicable ([8fe620d](https://github.com/fransward/filesender/commit/8fe620decf1c4b46e268433180d6175aa94954a0)), closes [#993](https://github.com/fransward/filesender/issues/993)
* #994 Added error glow around invalid selected files. Added code which moves the scrollbar to the first file containing an error. ([97f57ae](https://github.com/fransward/filesender/commit/97f57aec8d63c7b760142988a5cb960d02826235)), closes [#994](https://github.com/fransward/filesender/issues/994)
* #994 Fixed a bug where invalid files were displaying their filename twice and where the title on these files was "<img style=" ([8e02774](https://github.com/fransward/filesender/commit/8e02774c4c5909d5cd33fceeaf5104c5298cfc2e))

### Reports

* allow IP address to be hidden (#140) ([dbf1fd0](https://github.com/fransward/filesender/commit/dbf1fd0fb3ebdadce7eb0ace7d06b18264e63618)), closes [#140](https://github.com/fransward/filesender/issues/140)

### restapi

* update to new numeric userids (#458) ([4022d8d](https://github.com/fransward/filesender/commit/4022d8db0de52854f862ba719828ad1b2edffd7b)), closes [#458](https://github.com/fransward/filesender/issues/458)

### saml

* better reporting for things going wrong in setup (#213) ([c89d181](https://github.com/fransward/filesender/commit/c89d18163fdfb0752aad8db80e45ecfadd64a0b9)), closes [#213](https://github.com/fransward/filesender/issues/213)

### security

* clean up the policy, add docs (#539) ([a550ea2](https://github.com/fransward/filesender/commit/a550ea29c5bf0c1d4e1930989c89fc70467b1e09)), closes [#539](https://github.com/fransward/filesender/issues/539)
* start removing the possible use of frames. (#538) ([f3da6e3](https://github.com/fransward/filesender/commit/f3da6e3d085854a8789dee7a5eedbad4d19786ce)), closes [#538](https://github.com/fransward/filesender/issues/538)

### Shredding

* new clearing house to shred deleted files (#259) ([51e7c87](https://github.com/fransward/filesender/commit/51e7c8708cdd13e26eac4c4be780516013b57b4d)), closes [#259](https://github.com/fransward/filesender/issues/259)

### sql

* bring back more advanced view, fk creation no longer uses if exists (#421) ([8e334fa](https://github.com/fransward/filesender/commit/8e334fa0bca5b3c241ada4c31adefd715f8791c3)), closes [#421](https://github.com/fransward/filesender/issues/421)
* update the admin stats SQL (#521) ([c340b7c](https://github.com/fransward/filesender/commit/c340b7c4f0572e336a464666d1560ba0d26e8063)), closes [#521](https://github.com/fransward/filesender/issues/521)

### SQL

* upload graph working on postgresql as well (#149) ([cb32c27](https://github.com/fransward/filesender/commit/cb32c277c8d1d2f90fdc22c4830cd5ba92069168)), closes [#149](https://github.com/fransward/filesender/issues/149)

### stall

* new mode to show more info to user (#211) ([c623b93](https://github.com/fransward/filesender/commit/c623b930bffd56ce88409a2df91fe6f0502847b2)), closes [#211](https://github.com/fransward/filesender/issues/211)

### stats

* show user count estimate on statistics page (#771) ([5d162b4](https://github.com/fransward/filesender/commit/5d162b437cc6d5292f5b464bfe995bd15635f4ab)), closes [#771](https://github.com/fransward/filesender/issues/771)

### Stats

* Some more stats for the admin page #141 (#143) ([ea0611d](https://github.com/fransward/filesender/commit/ea0611d785addd296c64c0996e12fb8ed8a18619)), closes [#141](https://github.com/fransward/filesender/issues/141) [#143](https://github.com/fransward/filesender/issues/143)

### Storage

* bind storage_type to each file that is saved (#153) ([c850a0d](https://github.com/fransward/filesender/commit/c850a0dd9cced7805f2a46198203e074feb2eba0)), closes [#153](https://github.com/fransward/filesender/issues/153)
* New StorageFilesystemChunked to store the chunks as individual files (#135) ([6c47d71](https://github.com/fransward/filesender/commit/6c47d71684267e5bafe67199614dcb1f8c098a4b)), closes [#135](https://github.com/fransward/filesender/issues/135)
* use a big varchar to store the storage_type (#154) ([f4f16b9](https://github.com/fransward/filesender/commit/f4f16b96bdf9db65082da40bd6203dba8d430e12)), closes [#154](https://github.com/fransward/filesender/issues/154)

### streamsaver

* hint to user not to leave download page while active (#819) ([bc2f567](https://github.com/fransward/filesender/commit/bc2f5670fcedb01f703d95d6c5e16fefd424681d)), closes [#819](https://github.com/fransward/filesender/issues/819)

### sysadmin

* Help the sysadmin with missing SAML attributes (#127) ([2244a11](https://github.com/fransward/filesender/commit/2244a11bd536c1780e6b619471085d5570727bb8)), closes [#127](https://github.com/fransward/filesender/issues/127)

### tar

* calculate the content-length and set header (#514) ([52b9d4e](https://github.com/fransward/filesender/commit/52b9d4e3165d44ec4a5c27359841cd8d98689bb8)), closes [#514](https://github.com/fransward/filesender/issues/514)

### terasender

* automatically restart uploading a chunk if the previous upload failed  (#308) ([5917eef](https://github.com/fransward/filesender/commit/5917eefa5b59d8995ad6c4c2ca39f1fd5b67df77)), closes [#308](https://github.com/fransward/filesender/issues/308)
* resume again (#274) ([a9b0e19](https://github.com/fransward/filesender/commit/a9b0e1946a4c71aa18fffcb6b6a4ebc64f53f5b6)), closes [#274](https://github.com/fransward/filesender/issues/274)

### Test

* #991 Added code which calculates the size of the upload box based on the value supplied in config ([05250fe](https://github.com/fransward/filesender/commit/05250fe105f73e3cd5e6693446f812d6d8813392)), closes [#991](https://github.com/fransward/filesender/issues/991)
* #997 Changed validate_fileto to take a (otherwise defaulted) parameter such that the raw html values of the email boxes can't be changed and still validate ([7aeccd2](https://github.com/fransward/filesender/commit/7aeccd2e807515f98853cea9f66755617f2c4228)), closes [#997](https://github.com/fransward/filesender/issues/997)

### translation

* do not halt when a typo causes a bad property access (#518) ([d0281b3](https://github.com/fransward/filesender/commit/d0281b3f618f3e16241c425114c15bb67884ddd2)), closes [#518](https://github.com/fransward/filesender/issues/518)

### translations

* bring in en_AU to start with (#503) ([f445e0b](https://github.com/fransward/filesender/commit/f445e0b2284df9eade2e8db52a34e83df3d12ac8)), closes [#503](https://github.com/fransward/filesender/issues/503)
* bring in new languages from poeditor (#507) ([cf10be8](https://github.com/fransward/filesender/commit/cf10be88322089370fcd065e57d09f96ff491152)), closes [#507](https://github.com/fransward/filesender/issues/507)
* bring in some more from poeditor (#506) ([65ecf02](https://github.com/fransward/filesender/commit/65ecf02ae57e842d208153533cdf52ceba913824)), closes [#506](https://github.com/fransward/filesender/issues/506)
* filter openbox chars back to spaces (#508) ([8eb2ff9](https://github.com/fransward/filesender/commit/8eb2ff9f7b47344581cce9d5d92a7cf86e834efb)), closes [#508](https://github.com/fransward/filesender/issues/508)

### ui

* admin transfers pass page size (#802) ([aab39b2](https://github.com/fransward/filesender/commit/aab39b28d203754ef4a358dde3531315d2e0018d)), closes [#802](https://github.com/fransward/filesender/issues/802)
* allow a subdirectory of templates to be selected as the active theme (#604) ([5c00bf7](https://github.com/fransward/filesender/commit/5c00bf7605ac7a24800bc92c78cd97eca45be5de)), closes [#604](https://github.com/fransward/filesender/issues/604)
* allow clicking headers in admin/transfers page (#893) ([6273ae1](https://github.com/fransward/filesender/commit/6273ae1d478da1fc42420207678f9544315d6a38)), closes [#893](https://github.com/fransward/filesender/issues/893)
* allow going back from generated to user selected password (#895) ([3e51491](https://github.com/fransward/filesender/commit/3e51491880b9c2c72584388a6af27a3451ab7c82)), closes [#895](https://github.com/fransward/filesender/issues/895)
* allow tables on my transfers page to be sorted (#796) ([b1d62b4](https://github.com/fransward/filesender/commit/b1d62b4b9deb5e03e8586544a45ddb215375f300)), closes [#796](https://github.com/fransward/filesender/issues/796)
* bring out statistics from admin page (#611) ([bddcebd](https://github.com/fransward/filesender/commit/bddcebd7f2cb957aba7a742bf6def286fa99f316)), closes [#611](https://github.com/fransward/filesender/issues/611)
* either forbid or warn if password is in message (#915) ([23a2337](https://github.com/fransward/filesender/commit/23a23375d7112bd56d8f572f9a90f61814074ea6)), closes [#915](https://github.com/fransward/filesender/issues/915)
* encryption password length check update (#462) ([2ab1880](https://github.com/fransward/filesender/commit/2ab188015ffa42ca17fd66a8c32414a091bd407c)), closes [#462](https://github.com/fransward/filesender/issues/462)
* in admin/users only show user once in potential abuse list (#807) ([5d788e0](https://github.com/fransward/filesender/commit/5d788e078346c32cca545633e47cac2588b9fa1e)), closes [#807](https://github.com/fransward/filesender/issues/807)
* new option to allow admin to extend expire time on transfer (#896) ([31f5f0c](https://github.com/fransward/filesender/commit/31f5f0c8d1f943fc2b32a72309d2e910811a377f)), closes [#896](https://github.com/fransward/filesender/issues/896)
* show a file not found message if that happens (#669) ([2665f90](https://github.com/fransward/filesender/commit/2665f90366be57b7b7784a772cde327afd14a2fd)), closes [#669](https://github.com/fransward/filesender/issues/669)
* The download page has different fontsizes (#237) ([a6060ff](https://github.com/fransward/filesender/commit/a6060ff3388c638eec3169ea0995bc14b4a93c0b)), closes [#237](https://github.com/fransward/filesender/issues/237)

### upload

* abstract out the pause and resume functions (#610) ([4b9565f](https://github.com/fransward/filesender/commit/4b9565f30554358d9a076cc101746fe838a9019c)), closes [#610](https://github.com/fransward/filesender/issues/610)
* add a upload directory button where supported. (#529) ([92813f2](https://github.com/fransward/filesender/commit/92813f2087824a686c737f5a4804a678ba740c5c)), closes [#529](https://github.com/fransward/filesender/issues/529)
* if fwrite() returns short, tell user (#152) ([c8625be](https://github.com/fransward/filesender/commit/c8625be6c16df8bf84578beab4da6b4e4f4a846c)), closes [#152](https://github.com/fransward/filesender/issues/152)
* some client side hint in the log as to why resume is silently dropped (#240) ([a7efd94](https://github.com/fransward/filesender/commit/a7efd9444888d16b6fcbde97dce4bace19accf95)), closes [#240](https://github.com/fransward/filesender/issues/240)

### uploading

* catch terasender startup fails, xhr timeout, better net stall reporting (#527) ([2324f37](https://github.com/fransward/filesender/commit/2324f372f55126f33468886a0459221780642878)), closes [#527](https://github.com/fransward/filesender/issues/527)

### ux

* sort error file entries to the top (#371) ([f67aa96](https://github.com/fransward/filesender/commit/f67aa963eb36beda9fa6814bdd53d6f2b7825538)), closes [#371](https://github.com/fransward/filesender/issues/371)

### UX

* better error message when you attempt to download expired or deleted transfer (#769) ([6ac0b7a](https://github.com/fransward/filesender/commit/6ac0b7a40f58f6adedb34fde88281c4488d37ed6)), closes [#769](https://github.com/fransward/filesender/issues/769)

### v2

* Allow back-feed of last client side logs to server (#339) ([337b87b](https://github.com/fransward/filesender/commit/337b87b668c8c840ff758d331a64ea9d7cb42913)), closes [#339](https://github.com/fransward/filesender/issues/339)

### WIP

* Initial take on configurable additional email headers (#890) ([280007c](https://github.com/fransward/filesender/commit/280007cd69875d4f81a44c16bf8a5ac0fc7000cd)), closes [#890](https://github.com/fransward/filesender/issues/890)

### zip

* calculate the size of the zip and set content-length (#516) ([8b88857](https://github.com/fransward/filesender/commit/8b888574b766539a1bb5fb079e76929ab4c60152)), closes [#516](https://github.com/fransward/filesender/issues/516)
* fencepost error (#171) ([c99adcc](https://github.com/fransward/filesender/commit/c99adccf56f4a49514e8997182880f187fefd476)), closes [#171](https://github.com/fransward/filesender/issues/171)

### zip64

* files less than 4gb should show the size in the 32 bit field (#185) ([a1fff58](https://github.com/fransward/filesender/commit/a1fff58c89c3a27288567e16b981e67a7ab08113)), closes [#185](https://github.com/fransward/filesender/issues/185)

### zips

* switch streaming library (#183) ([0a430e6](https://github.com/fransward/filesender/commit/0a430e6e3af68373987cf2d94397bc5a81d13da4)), closes [#183](https://github.com/fransward/filesender/issues/183)



