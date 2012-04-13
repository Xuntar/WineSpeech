var xhrURL = 'https://xuntar.com/winespeech/';
var xhrKey = 'gt8DSk44w';

var busy = false;
var d = new Date();
var currentTS = parseInt(((d.getTime()) / 1000),10);

win.addEventListener('focus', function(){
	setTimeout(checkForUpdates,2000);
});

//------------Modal Window-----------------
//http://developer.appcelerator.com/question/134096/editing-the-style-of-the-activity-indicator-on-android
function showModalWindow() {
	updateWin = Titanium.UI.createWindow({
		backgroundColor:'#000000',
		opacity:0.5
	});
	//updateWin.addEventListener('android:back',function(e) {
	  // do nothing
	//});
 
	/*var images = [];
	for (var i=1;i<3;i++)
	{
		images.push('images/loader/apngframe'+i+'.png');
	}
	
	var imageView = Titanium.UI.createImageView({
	 images:['images/loader/apngframe1.png','images/loader/apngframe2.png'],//images,// images is the array of images
	 duration:100, // in milliseconds, the time before next frame is shown
	 repeatCount:0,  // 0 means animation repeats indefinitely, use > 1 to control repeat count
	 //url:'images/loader/apngframe1.png',
	 top:0,
	 width:80,
	 height:80,
	 left:0,
	 opacity:1
	});
	updateWin.add(imageView);*/
	var label1 = Ti.UI.createLabel({
		text:'Updating database,',
		top:80,
		width:'auto',
		height:'auto',
		textAlign:'center',
		color:'#ffffff',
		font:{fontWeight:'bold',fontSize:18}
	});
	updateWin.add(label1);
	var label2 = Ti.UI.createLabel({
		text:'please wait...',
		top:105,
		width:'auto',
		height:'auto',
		textAlign:'center',
		color:'#ffffff',
		font:{fontWeight:'bold',fontSize:18}
	});
	updateWin.add(label2);
	/*var actInd = Titanium.UI.createActivityIndicator({
		top:90, 
		height:16,
		width:16,
		left:92,
		style:Titanium.UI.iPhone.ActivityIndicatorStyle.PLAIN
	});
	actInd.show();
	updateWin.add(actInd);*/
	updateWin.open({modal:true});
	Titanium.API.info('open');
	
	updateDatabaseFromRemote(currentTS);
	setTimeout(checkBusy, 500);
	
	function closeModalWindow() {
		var t2 = Titanium.UI.create2DMatrix();
		t2 = t2.scale(0);
		updateWin.close({transform:t2,duration:500});
		Titanium.API.info('close modalwindow');
	};
	
	// When updating, this function is on a scheduled timer, and will 
	// only stop firing once the update is complete.
	function checkBusy() {
		Titanium.API.info('Checkbusy');
		if (busy) {
			setTimeout(checkBusy, 500);
		} else {
			closeModalWindow();
		}
	};
};

// determine if database is out of date
function checkNeedsUpdating(nowTS) {
	var retval = false;
	var lastUpdatedTS = Titanium.App.Properties.getInt('lastUpdatedTS');
	var timeDiff = nowTS - lastUpdatedTS;
	// check every 30 seconds
	// only for tutorial, real apps would use much longer time (1 - 24 hours)
	if (timeDiff > 60 || timeDiff < 0) {
		retval = true;
		Ti.API.info("DB needs updating from remote");
	} else {
		Ti.API.info("DB does not need updating");
	}
	return retval;
};

// load the data from remote and store locally
function updateDatabaseFromRemote(nowTS) {
	var lastUpdatedTS = Titanium.App.Properties.getInt('lastUpdatedTS');
	models.country.options.url += "&timestamp=" + lastUpdatedTS;
	//remoteURL += "&auth=" + xhrKey;

	models.country.forceReload();
};

function checkForUpdates(){
// see if database should be refreshed
	if (checkNeedsUpdating(currentTS) && (Titanium.Network.networkType != Titanium.Network.NETWORK_NONE)) {
		busy = true;
		Titanium.API.info('Show modal window');
		showModalWindow();
	};
};