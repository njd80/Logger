/*!
 * log.js
 * Copyright 2010, Neil Donaldson
 * 
 
 0.42 01/09/10 
 - check for valid target(t) DOM element
 - append to body if not

	
*/
log_version="0.42";
Log = function(id,t) {//string, string div id
	
	/*OPTIONS*/
	/*Template log*/
	var _log = [
		'<div id="log_'+id+'" class="log">',
		'<p class="header">'+id+'</p>',
		'<div id="w"></div>',
		'<p class="footer">Log v'+log_version+'</p>',
		'</div>'
	].join('\n');
	
	if (document.getElementById(t)){
		$('#'+t).append(_log);	//append new log to target div
	} else {
		$('body').append(_log);	//append log to body
	}
	//$('#log_'+id);		//the new log
	//$('#log_'+id+' #w');	//the writing window	
	
	this.w = function(txt, wipe) {
		if (wipe) {
			$('#log_'+id+' #w').empty();
		}
		$('#log_'+id+' #w').append('<p>'+txt+'</p>');
		return;
	};
};