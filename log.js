/*!
 * log.js
 * 0.31
 *
 * Copyright 2010, Neil Donaldson
 * Date: Mon Aug 16 01:00:00 2010
 */
log_version="0.31";
Log = function(id,t) {//string, string div name
	$('#'+t).append('<div id="log_'+id+'"></div>');
			
	var l = $('#log_'+id);
	l.addClass('log');
	l.append('<p>Log'+log_version+': id:'+id+'</p>');
	l.find('p').addClass('log_header');
	//$('#log_'+id+' > p').addClass('log_header');
	
	this.w = function(txt, wipe) {
		if (wipe) {
			l.empty().append('<p>Log Restarted: id='+id+'</p>');
			l.find('p').addClass('log_header');
		}
		l.append('<p>'+txt+'</p>');		
	}
};