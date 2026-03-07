/*======================================================================*\
|| #################################################################### ||
|| # vBulletin 4.2.5 Release Candidate 1
|| # ---------------------------------------------------------------- # ||
|| # Copyright ©2000-2017 vBulletin Solutions Inc. All Rights Reserved. ||
|| # This file may not be redistributed in whole or significant part. # ||
|| # ---------------- VBULLETIN IS NOT FREE SOFTWARE ---------------- # ||
|| #        www.vbulletin.com | www.vbulletin.com/license.html        # ||
|| #################################################################### ||
\*======================================================================*/
function vB_QuickEditor_GroupMessage_Vars(A){this.init()}vB_QuickEditor_GroupMessage_Vars.prototype.init=function(){this.target="group.php";if(PATHS.forum){this.target=PATHS.forum+"/"+this.target}this.postaction="message";this.objecttype="gmid";this.getaction="message";this.ajaxtarget="group.php";this.ajaxaction="quickedit";this.deleteaction="deletemessage";this.messagetype="gmessage_message_";this.containertype="gmessage_";this.responsecontainer="commentbits"};