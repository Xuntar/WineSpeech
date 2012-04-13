var ScreenHeight = Titanium.Platform.displayCaps.platformHeight;
var ScreenWidth = Titanium.Platform.displayCaps.platformWidth;

//////////////////////////////CONTROL PANEL///////////////////////////

//All the necessaries are defined by variables that are set right up here at the top for easy access

//------------------------IPHONE STATUS BAR------------------------------
// If you show the status bar set this to 20, if you hide it, set this to 0 (zero)
var AccountForTheDamnStatusBar = 20;



//------------------------ALL YOUR GOODIES------------------------------

//Things you can or, should, change. This is where you set up the parameters for drawing your tabbar.

var HowManyButtonsYouWant = 4; //From 2 - 6

var TabulousViewHeight = 30;
//Height of the Tabulous view that hold all the tabbar elements. Be sure and make it tall enough to hold any button hilight elements you want to have overlap the content view (like the giraffe in the sample app). THIS IS DIFFERENT THAN TabulousTabBarBkgHeight BECAUSE WE HAVE A TALLER HILIGHT STATE ON THE CONTACT BUTTON OF OUR SAMPLE APP! If you don't use this style of button hilight, then should TabulousViewHeight equal TabulousTabBarBkgHeight!

var TabulousTabBarBkgHeight = 30; //The height of the background graphic for tabbar. in straightforward designs this will be the same height as TabulousViewHeight

var TabulousButtonHeight = 30; //Just as it says. This is the height of the unselected buttons 

var TabulousButtonSelectedHeight = 30;
//The, on the other hand, is the height of the SELECTED button. This number will be higher than the button height if you want a hilight element that extends into the content space (like the giraffe). In simple designs this # will be the SAME as TabulousButtonHeight. Standard iOS tab buttons are 44 high.

var TabulousButtonGutter = 2; //How much space do you want between buttons? if this number is set too high, it might conflict the the # of buttons distributed across the given sccreen width. Between buttons this # is doubled. Default is 2.

//Things we calculate - try not to change these unless you get what's going on.

var TabulousTopGutter = (TabulousViewHeight - TabulousTabBarBkgHeight) +((TabulousTabBarBkgHeight - TabulousButtonHeight) / 2);//We calculate this based on the height of the view, the height of the tabbar background and the height of the unselected button.

var TabulousSelectedTopGutter = (TabulousViewHeight - TabulousButtonSelectedHeight) / 2; //We calculate this based on the height of the view and the height of the selected button hilight



//------------------------PLATFORM FUN------------------------------

//The variable TabulousTop is used to set the coordinates for the top edge of the view that holds the Tabulous tabbar. 

if (Ti.Platform.name == 'android') {
var TabulousTop = Titanium.Platform.displayCaps.platformHeight - (TabulousViewHeight * 1.25);

if (Titanium.Platform.displayCaps.density == 'high') {
var TabulousTop = Titanium.Platform.displayCaps.platformHeight - (TabulousViewHeight * 1.5);
}
}

if (Titanium.Platform.osname == 'iphone' || Titanium.Platform.osname == 'ipad') {
var TabulousTop = (Titanium.Platform.displayCaps.platformHeight - TabulousViewHeight) - AccountForTheDamnStatusBar;
}


//Need or want to adjust the viewheight? Do it here. Subtract to move it up, add to move it down. Or set this to ZERO to move the tabbar to the top of the screen.
var TabulousTop = 345 - TabulousTabBarBkgHeight;



//------------------------BUTTON OFFSETS------------------------------
//Use these variables to adjust the vertical offset of each button individually. Use negative #'s to move them up, positive to move them down and zero to have them placed with no adjustment. Note the two numbers - plain and selected. This makes it easier to compensate for unusual buttons, or button hilites, that overlap the top of the tabbar graphic into the content space.

var TabulousButton1Offset = 0;
var TabulousButton2Offset = 0;
var TabulousButton3Offset = 0;
var TabulousButton4Offset = 0;
var TabulousButton5Offset = 2;
var TabulousButton6Offset = 2;


var TabulousButton1SelectedOffset = 0;
var TabulousButton2SelectedOffset = 0;
var TabulousButton3SelectedOffset = 0;
var TabulousButton4SelectedOffset = 0;
var TabulousButton5SelectedOffset = 29;
var TabulousButton6SelectedOffset = 29;



//----------------------------------SIZES------------------------------

//This adjusts the button width automagically based on the screen width, number of buttons and the gutter width.

var TabulousButtonWidth = (ScreenWidth / HowManyButtonsYouWant) - (TabulousButtonGutter * 2) - 20;


//---------------------------TABBAR BACKGROUND GRAPHIC------------------------------

// Not obligatory - you can just composite your tabbar buttons against the content view if you prefer - just leave the name empty ''

var TabulousTabbarBkgGraphic = '';

// Or just make it a solid color - but the graphic will take precedence over the image - so comment out the line above or set the BkgGraphic variable to '' if you wanna use a solid color

var TabulousTabbarBkgColor = 'white'; //Hex or any standard color name



//---------------------------TAB BUTTON GRAPHICS------------------------------

//There are two versions of each button: regular and hilight or selected. We toggle these off and on based on which tab is currently active.

var TabulousButtonGraphic_1 = TabulousButtonGraphic_2 = TabulousButtonGraphic_3 = TabulousButtonGraphic_4 = '/images/tabbar_btn.png';
var TabulousButtonGraphic_1_HL = TabulousButtonGraphic_2_HL = TabulousButtonGraphic_3_HL = TabulousButtonGraphic_4_HL = '/images/tabbar_btn_HL.png';

//var TabulousButtonGraphic_2 = '/images/tabbar_btn_2.png';
//var TabulousButtonGraphic_2_HL = '/images/tabbar_btn_2_HL.png';

//var TabulousButtonGraphic_3 = '/images/tabbar_btn_3.png';
//var TabulousButtonGraphic_3_HL = '/images/tabbar_btn_3_HL.png';

//var TabulousButtonGraphic_4 = '/images/tabbar_btn_4.png';
//var TabulousButtonGraphic_4_HL = '/images/tabbar_btn_4b_HL.png';

var TabulousButtonGraphic_5 = '/images/tabbar_btn_5.png';
var TabulousButtonGraphic_5_HL = '/images/tabbar_btn_5_HL.png';

var TabulousButtonGraphic_6 = '/images/tabbar_btn_6.png';
var TabulousButtonGraphic_6_HL = '/images/tabbar_btn_6_HL.png';

//Prefer to use solid colors, with text or icons composited on top - then set the background color, border color & width and border radius here. If you define a label or use a transparent PNG as the graphic, then they'll be composited on top of the background color.

//NOTE: There's currently a bug in the Android version of TI that draws the background as the same color as the border.

//Leave these as all empty '' if you don't to define any of these charcteristics.

var TabulousButtonBorderWidth = 0;
var TabulousButtonBorderRadius = 0;
var TabulousButtonBorderColor = 'transparent'; //Hex or any standard color name
var TabulousButtonBkg = 'transparent'; //Hex or any standard color name

var TabulousButtonHLBorderWidth = 0;
var TabulousButtonHLBorderRadius = 0;
var TabulousButtonHLBorderColor = 'transparent'; //Hex or any standard color name
var TabulousButtonHLBkg = 'transparent'; //Hex or any standard color name



//-----------------------------TAB BUTTON LABELS------------------------------
//If you want dynamic text labels, rather than burning them into your graphics, set them up here. Leave the button title set to empty if you don't to use live text for that button.


//Let's start with our default state labels.

//Titles first
var button1Title = 'Country', button2Title = 'Region', button3Title = 'Appellation', button4Title = 'Grape Variety', button5Title = '123', button6Title = 'Testing';

//Then font settings
var TabulousLabelFont = 'Helvetica Neue', TabulousFontSize = '14', TabulousFontWeight = 'normal', TabulousFontStyle = 'normal'; 

//And color
var TabulousFontColor = 'white'; //Hex or any standard color name


//Then move on to our hilight/selected state. Make them the same, or change 'em up!
var button1HLTitle = 'Country', button2HLTitle = 'Region', button3HLTitle = 'Appellation', button4HLTitle = 'Grape Variety', button5HLTitle = '123', button6HLTitle = 'Testing';

var TabulousLabelHLFont = 'Helvetica Neue', TabulousHLFontSize = '14', TabulousHLFontWeight = 'normal', TabulousHLFontStyle = 'normal'; 

var TabulousHLFontColor = 'white'; //Hex or any standard color name




//-----------------------------FUNCTIONS & STUFF-------------------------

//Let's go ahead an declare our button name variables before we define them, just to keep the compiler happy
var TabulousButton_1 = null, TabulousButton_2 = null, TabulousButton_3 = null, TabulousButton_4 = null, TabulousButton_5 = null, TabulousButton_6 = null, TabulousButton_1_HL = null, TabulousButton_2_HL = null, TabulousButton_3_HL = null, TabulousButton_4_HL = null, TabulousButton_5_HL = null, TabulousButton_6_HL	 = null; 

function deselectAllButtons() {

if (HowManyButtonsYouWant >= 2) {
TabulousButton_1_HL.hide();
TabulousButton_1.show();
TabulousButton_2_HL.hide();
TabulousButton_2.show();
}

if (HowManyButtonsYouWant >= 3) {
TabulousButton_3_HL.hide();
TabulousButton_3.show();
}

if (HowManyButtonsYouWant >= 4) {
TabulousButton_4_HL.hide();
TabulousButton_4.show();
}

if (HowManyButtonsYouWant >= 5) {
TabulousButton_5_HL.hide();
TabulousButton_5.show();
}

if (HowManyButtonsYouWant == 6) {
TabulousButton_6_HL.hide();
TabulousButton_6.show();
}

}


function hideAllViews() {


TabulousView1.hide();
TabulousView2.hide();
TabulousView3.hide();
TabulousView4.hide();
//TabulousView5.hide();
//TabulousView6.hide();
}



//----------------------------LET'S DO THIS!------------------------------

// Let's start with our tabbar background. We have a view drawn using the variable we've already defined. 

var TabulousBarView = Ti.UI.createView({
	left: 0,
	width: '100%',
	height: TabulousViewHeight,	
	top: TabulousTop,
});

var TabulousTabBarBkg = Ti.UI.createView({
	backgroundImage:TabulousTabbarBkgGraphic,
	//backgroundColor: TabulousTabbarBkgColor,
	left: 0,
	top: (TabulousViewHeight - TabulousTabBarBkgHeight),
	width: '100%',
	touchEnabled: 'false',
	height: TabulousTabBarBkgHeight
});

TabulousBarView.add(TabulousTabBarBkg);
win.add(TabulousBarView);


//Button 1: Default, Hilight, Listener

if (HowManyButtonsYouWant >= 2) {

var TabulousButton_1 = Ti.UI.createButton({
	backgroundImage:TabulousButtonGraphic_1,
	title: button1Title,
	color: TabulousFontColor,

	borderWidth: TabulousButtonBorderWidth,
	borderRadius: TabulousButtonBorderRadius,
	borderColor: TabulousButtonBorderColor,
	left: TabulousButtonGutter,
	top: TabulousTopGutter + TabulousButton1Offset,
	width: TabulousButtonWidth,
	height: TabulousButtonHeight,
	font:{fontSize:TabulousFontSize,  fontWeight:TabulousFontWeight,fontFamily:TabulousLabelFont, fontStyle:TabulousFontStyle}
});
TabulousBarView.add(TabulousButton_1);



var TabulousButton_1_HL = Ti.UI.createButton({
	backgroundImage:TabulousButtonGraphic_1_HL,
	title: button1HLTitle,
	color: TabulousHLFontColor,
	backgroundColor: TabulousButtonHLBkg,
	borderWidth: TabulousButtonHLBorderWidth,
	borderRadius: TabulousButtonHLBorderRadius,
	borderColor: TabulousButtonHLBorderColor,
	left: TabulousButtonGutter,
	top: TabulousSelectedTopGutter + TabulousButton1SelectedOffset,
	width: TabulousButtonWidth,
	height: TabulousButtonSelectedHeight - TabulousButton1SelectedOffset,
		font:{fontSize:TabulousFontSize,  fontWeight:TabulousFontWeight,fontFamily:TabulousLabelFont, fontStyle:TabulousFontStyle}
});

TabulousBarView.add(TabulousButton_1_HL);

TabulousButton_1.addEventListener('touchstart', function()
{	

deselectAllButtons();
TabulousButton_1_HL.show();
TabulousButton_1.hide();
hideAllViews();
TabulousView1.show();


});

TabulousButton_1.hide();
TabulousButton_1_HL.show();
hideAllViews();
TabulousView1.show();
 //Let's assume that button 1 is the starting tab - so we toggle it to a hilight state - both button & view - right off the bat.
}


//Button 2: Default, Hilight, Listener

if (HowManyButtonsYouWant >= 2) {

var TabulousButton_2 = Ti.UI.createButton({
	backgroundImage:TabulousButtonGraphic_2,
	title: button2Title,
	color: TabulousFontColor,
	backgroundColor: TabulousButtonBkg,
	borderWidth: TabulousButtonBorderWidth,
	borderRadius: TabulousButtonBorderRadius,
	borderColor: TabulousButtonBorderColor,
	left: TabulousButtonWidth + (TabulousButtonGutter * 2),
	top: TabulousTopGutter + TabulousButton2Offset,
	width: TabulousButtonWidth,
	height: TabulousButtonHeight,
		font:{fontSize:TabulousFontSize,  fontWeight:TabulousFontWeight,fontFamily:TabulousLabelFont, fontStyle:TabulousFontStyle}
});
TabulousBarView.add(TabulousButton_2);

var TabulousButton_2_HL = Ti.UI.createButton({
	backgroundImage:TabulousButtonGraphic_2_HL,
	title: button2HLTitle,
	color: TabulousHLFontColor,
	backgroundColor: TabulousButtonHLBkg,
	borderWidth: TabulousButtonHLBorderWidth,
	borderRadius: TabulousButtonHLBorderRadius,
	borderColor: TabulousButtonHLBorderColor,
	left: TabulousButtonWidth + (TabulousButtonGutter * 2),
	top: TabulousSelectedTopGutter + TabulousButton2SelectedOffset,
	width: TabulousButtonWidth,
	height: TabulousButtonSelectedHeight - TabulousButton2SelectedOffset,
		font:{fontSize:TabulousFontSize,  fontWeight:TabulousFontWeight,fontFamily:TabulousLabelFont, fontStyle:TabulousFontStyle}
});
TabulousBarView.add(TabulousButton_2_HL);

TabulousButton_2.addEventListener('touchstart', function()
{	

deselectAllButtons();
TabulousButton_2.hide();
TabulousButton_2_HL.show();
hideAllViews();
TabulousView2.show();

});

TabulousButton_2_HL.hide();
TabulousButton_2.show();//IF you want a different tab to be hilighted at launch. swap these out as needed.
}


//Button 3: Default, Hilight, Listener

if (HowManyButtonsYouWant >= 3) {

var TabulousButton_3 = Ti.UI.createButton({
	backgroundImage:TabulousButtonGraphic_3,
	title: button3Title,
	color: TabulousFontColor,
	backgroundColor: TabulousButtonBkg,
	borderWidth: TabulousButtonBorderWidth,
	borderRadius: TabulousButtonBorderRadius,
	borderColor: TabulousButtonBorderColor,	
	left: (TabulousButtonWidth * 2) + (TabulousButtonGutter * 3),
	top: TabulousTopGutter + TabulousButton3Offset,
	width: TabulousButtonWidth,
	height: TabulousButtonHeight,
	font:{fontSize:TabulousFontSize,  fontWeight:TabulousFontWeight,fontFamily:TabulousLabelFont, fontStyle:TabulousFontStyle}
});
TabulousBarView.add(TabulousButton_3);

var TabulousButton_3_HL = Ti.UI.createButton({
	backgroundImage:TabulousButtonGraphic_3_HL,
	title: button3HLTitle,
	color: TabulousHLFontColor,
	backgroundColor: TabulousButtonHLBkg,
	borderWidth: TabulousButtonHLBorderWidth,
	borderRadius: TabulousButtonHLBorderRadius,
	borderColor: TabulousButtonHLBorderColor,
	left: (TabulousButtonWidth * 2) + (TabulousButtonGutter * 3),
	top: TabulousSelectedTopGutter + TabulousButton3SelectedOffset,
	width: TabulousButtonWidth,
	height: TabulousButtonSelectedHeight - TabulousButton3SelectedOffset,
	font:{fontSize:TabulousFontSize,  fontWeight:TabulousFontWeight,fontFamily:TabulousLabelFont, fontStyle:TabulousFontStyle}
});
TabulousBarView.add(TabulousButton_3_HL);

TabulousButton_3.addEventListener('touchstart', function()
{	

deselectAllButtons();
TabulousButton_3_HL.show();
TabulousButton_3.hide();
hideAllViews();
TabulousView3.show();


});

TabulousButton_3_HL.hide();
TabulousButton_3.show();//IF you want a different tab to be hilighted at launch. swap these out as needed.
}


//Button 4: Default, Hilight, Listener

if (HowManyButtonsYouWant >= 4) {

var TabulousButton_4 = Ti.UI.createButton({
	backgroundImage:TabulousButtonGraphic_4,
	title: button4Title,
	color: TabulousFontColor,
	backgroundColor: TabulousButtonBkg,
	borderWidth: TabulousButtonBorderWidth,
	borderRadius: TabulousButtonBorderRadius,
	borderColor: TabulousButtonBorderColor,	
	left: (TabulousButtonWidth * 3) + (TabulousButtonGutter * 4),
	top: TabulousTopGutter + TabulousButton4Offset,
	width: TabulousButtonWidth + 10,
	height: TabulousButtonHeight,
	font:{fontSize:TabulousFontSize,  fontWeight:TabulousFontWeight,fontFamily:TabulousLabelFont, fontStyle:TabulousFontStyle}
});
TabulousBarView.add(TabulousButton_4);

var TabulousButton_4_HL = Ti.UI.createButton({
	backgroundImage:TabulousButtonGraphic_4_HL,
	title: button4HLTitle,
	color: TabulousHLFontColor,
	backgroundColor: TabulousButtonHLBkg,
	borderWidth: TabulousButtonHLBorderWidth,
	borderRadius: TabulousButtonHLBorderRadius,
	borderColor: TabulousButtonHLBorderColor,
	left: (TabulousButtonWidth * 3) + (TabulousButtonGutter * 4),	
	top: TabulousSelectedTopGutter + TabulousButton4SelectedOffset,
	width: TabulousButtonWidth + 10,
	height: TabulousButtonSelectedHeight - TabulousButton4SelectedOffset,
		font:{fontSize:TabulousFontSize,  fontWeight:TabulousFontWeight,fontFamily:TabulousLabelFont, fontStyle:TabulousFontStyle}
});
TabulousBarView.add(TabulousButton_4_HL);

TabulousButton_4.addEventListener('touchstart', function()
{	

deselectAllButtons();
TabulousButton_4_HL.show();
TabulousButton_4.hide();
hideAllViews();
TabulousView4.show();
});

TabulousButton_4_HL.hide();
TabulousButton_4.show();//IF you want a different tab to be hilighted at launch. swap these out as needed.
}


//Button 5: Default, Hilight, Listener

if (HowManyButtonsYouWant >= 5) {
var TabulousButton_5 = Ti.UI.createButton({
	backgroundImage:TabulousButtonGraphic_5,
	title: button5Title,
	color: TabulousFontColor,
	backgroundColor: TabulousButtonBkg,
	borderWidth: TabulousButtonBorderWidth,
	borderRadius: TabulousButtonBorderRadius,
	borderColor: TabulousButtonBorderColor,	
	left: (TabulousButtonWidth * 4) + (TabulousButtonGutter * 5),
	top: TabulousTopGutter + TabulousButton5Offset,
	width: TabulousButtonWidth,
	height: TabulousButtonHeight,
		font:{fontSize:TabulousFontSize,  fontWeight:TabulousFontWeight,fontFamily:TabulousLabelFont, fontStyle:TabulousFontStyle}
});
TabulousBarView.add(TabulousButton_5);

var TabulousButton_5_HL = Ti.UI.createButton({
	backgroundImage:TabulousButtonGraphic_5_HL,
	title: button5HLTitle,
	color: TabulousHLFontColor,
	backgroundColor: TabulousButtonHLBkg,
	borderWidth: TabulousButtonHLBorderWidth,
	borderRadius: TabulousButtonHLBorderRadius,
	borderColor: TabulousButtonHLBorderColor,
	left: (TabulousButtonWidth * 4) + (TabulousButtonGutter * 5),
	top: TabulousSelectedTopGutter + TabulousButton5SelectedOffset,
	width: TabulousButtonWidth,
	height: TabulousButtonSelectedHeight - TabulousButton5SelectedOffset,
		font:{fontSize:TabulousFontSize,  fontWeight:TabulousFontWeight,fontFamily:TabulousLabelFont, fontStyle:TabulousFontStyle}
});
TabulousBarView.add(TabulousButton_5_HL);

TabulousButton_5.addEventListener('touchstart', function()
{
	
deselectAllButtons();
TabulousButton_5_HL.show();
TabulousButton_5.hide();
hideAllViews();
TabulousView5.show();
});

TabulousButton_5_HL.hide();
TabulousButton_5.show();//IF you want a different tab to be hilighted at launch. swap these out as needed.
}


//Button 6: Default, Hilight, Listener

if (HowManyButtonsYouWant == 6) {
var TabulousButton_6 = Ti.UI.createButton({
	backgroundImage:TabulousButtonGraphic_6,
	title: button6Title,
	color: TabulousFontColor,
	backgroundColor: TabulousButtonBkg,
	borderWidth: TabulousButtonBorderWidth,
	borderRadius: TabulousButtonBorderRadius,
	borderColor: TabulousButtonBorderColor,
	left: (TabulousButtonWidth * 5) + (TabulousButtonGutter * 6),
	top: TabulousTopGutter + TabulousButton6Offset,
	width: TabulousButtonWidth,
	height: TabulousButtonHeight,
		font:{fontSize:TabulousFontSize,  fontWeight:TabulousFontWeight,fontFamily:TabulousLabelFont, fontStyle:TabulousFontStyle}
});
TabulousBarView.add(TabulousButton_6);

var TabulousButton_6_HL = Ti.UI.createButton({
	backgroundImage:TabulousButtonGraphic_6_HL,
	title: button6HLTitle,
	color: TabulousHLFontColor,
	backgroundColor: TabulousButtonHLBkg,
	borderWidth: TabulousButtonHLBorderWidth,
	borderRadius: TabulousButtonHLBorderRadius,
	borderColor: TabulousButtonHLBorderColor,
	left: (TabulousButtonWidth * 5) + (TabulousButtonGutter * 6),
	top: TabulousSelectedTopGutter + TabulousButton6SelectedOffset,
	width: TabulousButtonWidth,
	height: TabulousButtonSelectedHeight - TabulousButton6SelectedOffset,
		font:{fontSize:TabulousFontSize,  fontWeight:TabulousFontWeight,fontFamily:TabulousLabelFont, fontStyle:TabulousFontStyle}
});
TabulousBarView.add(TabulousButton_6_HL);

TabulousButton_6.addEventListener('touchstart', function()
{	
deselectAllButtons();
TabulousButton_6_HL.show();
TabulousButton_6.hide();
hideAllViews();
TabulousView6.show();

});

TabulousButton_6_HL.hide();
TabulousButton_6.show();//IF you want a different tab to be hilighted at launch. swap these out as needed.
}

