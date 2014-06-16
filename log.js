/*!
 * log.js
 * Copyright 2010-2014, Neil Donaldson
 * 
 * see Readme.md for version information
 
*/
/*
log_version="0.43";
Log = function(id,t) {//string, string div id

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
	
	this.w = function(txt, wipe) {
		if (wipe) {
			$('#log_'+id+' #w').empty();
		}
		$('#log_'+id+' #w').append('<p>'+txt+'</p>');
		return;
	};
};
*/

(function() {
/* SETTINGS */
  var parameters = {
    overwrite: false,               //overwrite previous messages
    size: 10,                       //number of messages
    timestamps: true                //show timestamps
  };

  var styling = {
    scroll: false,                  //scroll with page or stick
    horizontalPosition: "right",    //page horizontal pos
    verticalPosition: "bottom",     //page vertical pos
    color: "#ddd"                   //background color
  };
/* END SETTINGS */  
  

  /* Create a new Log */
  function createLog() {
    var l = new LoggerObject;
    
    return l;
  }
  
  /* Log Object */
  var LoggerObject = function() {
    id: "tempID";
  };
  
  /* INITIALIZATION */
  (function () {
    defaultLog = createLog();
  })();
  
/* *********************************************************** */  
/* PUBLIC FUNCTIONS */
  
  newLog = function() {
    return createLog();    
  };
  
  log = function(text) {
    console.log(text);
    console.log(defaultLog);
  };
  
/* END PUBLIC FUNCTIONS */
})();


