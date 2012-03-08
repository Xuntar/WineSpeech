//------------WINDOW & SCREEN--------------
//Let's set up a few variables that define our screen & window elements

var win = Ti.UI.currentWindow;
var ScreenHeight = Titanium.Platform.displayCaps.platformHeight;
var ScreenWidth = Titanium.Platform.displayCaps.platformWidth;

var viewHomeHeader = Titanium.UI.createView({
    backgroundImage:'images/background_home_header.png',
    width:480,
    height:345,
    top:0,
    left:0
});

var textFieldSearch = Titanium.UI.createTextField({
	top:100,
	left:10,
	width:280,
    autocorrect:false,
    font:{fontSize:16},
    hintText:'Search...',
    backgroundImage:'images/background_home_search_field.png'
});

var buttonSearch = Titanium.UI.createButton({
	title: 'Go',
	width:50,
	height:40,
	font:{fontSize:16,fontWeight:'bold'},
	left:10,
	top:140
});

viewHomeHeader.add(buttonSearch);
viewHomeHeader.add(textFieldSearch);

win.add(viewHomeHeader);

var TabulousView1 = Titanium.UI.createView({
	top:345,
	left:0,
	width: ScreenWidth,
	height: ScreenHeight - 600,
	backgroundColor: 'black'
});
Titanium.include("home_country.js");

var TabulousView2 = Titanium.UI.createView({
	top:345,
	left:0,
	width: ScreenWidth,
	height: ScreenHeight - 600,
});
Titanium.include("home_region.js");

var TabulousView3 = Titanium.UI.createView({
	top:345,
	left:0,
	width: ScreenWidth,
	height: ScreenHeight - 600,
	backgroundColor: 'black'
});
Titanium.include("home_appellation.js");

var TabulousView4 = Titanium.UI.createView({
	top:345,
	left:0,
	width: ScreenWidth,
	height: ScreenHeight - 600,
});
Titanium.include("home_grape_variety.js");

win.add(TabulousView1);
win.add(TabulousView2);
win.add(TabulousView3);
win.add(TabulousView4);

Titanium.include("Tabulous_Init.js");