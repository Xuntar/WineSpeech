// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();


//
// create base UI tab and root window
//
var winHome = Titanium.UI.createWindow({
    title:'Home',
    backgroundColor:'#fff',
    orientationModes:
    [
		Titanium.UI.PORTRAIT,
		Titanium.UI.UPSIDE_PORTRAIT
	],
	url: 'home.js',
});

var tabHome = Titanium.UI.createTab({
    icon:'images/icon_home.png',
    title:'Home',
    window:winHome,
});

//
// create controls tab and root window
//
var winLucky = Titanium.UI.createWindow({  
    title:'I\'m feeling lucky',
    backgroundColor:'#fff'
});
var tabLucky = Titanium.UI.createTab({  
    icon:'images/icon_lucky.png',
    title:'Feelin\' lucky',
    window:winLucky
});

var label2 = Titanium.UI.createLabel({
	color:'#999',
	text:'I am Window 2',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

winLucky.add(label2);

//
// create controls tab and root window
//
var winAbout = Titanium.UI.createWindow({  
    title:'Asian Palate',
    backgroundColor:'#fff'
});
var tabAbout = Titanium.UI.createTab({  
    icon:'images/icon_about.png',
    title:'Asian Palate',
    window:winLucky
});

var label2 = Titanium.UI.createLabel({
	color:'#999',
	text:'I am Window 3',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

winAbout.add(label2);

//
//  add tabs
//
tabGroup.addTab(tabHome);  
tabGroup.addTab(tabLucky);  
tabGroup.addTab(tabAbout);


// open tab group
tabGroup.open();