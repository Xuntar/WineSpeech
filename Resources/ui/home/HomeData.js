function HomeData(dic) {

	var TabulousViewHeight = 30;

	var self = Titanium.UI.createView({
		left: 0,
		width: '100%',
		height: 400,
		top: 0,
		backgroundColor: '#222',
	});

	var TabulousButtonGraphic = '/images/tabbar_btn.png';
	var TabulousButtonGraphic_HL = '/images/tabbar_btn_HL.png';

	var TabulousButtonHeight = 30; //Just as it says. This is the height of the unselected buttons

	var TabulousButtonSelectedHeight = 30;
	//The, on the other hand, is the height of the SELECTED button. This number will be higher than the button height if you want a hilight element that extends into the content space (like the giraffe). In simple designs this # will be the SAME as TabulousButtonHeight. Standard iOS tab buttons are 44 high.

	var TabulousButtonGutter = 2; //How much space do you want between buttons? if this number is set too high, it might conflict the the # of buttons distributed across the given sccreen width. Between buttons this # is doubled. Default is 2.

	//Things we calculate - try not to change these unless you get what's going on.

	var TabulousButtonOffset = 0;

	var TabulousButtonSelectedOffset = 0;

	var TabulousButtonWidth = 106;

	//Titles first
	var button1Title = 'Country', button2Title = 'Region', button3Title = 'Appellation', button4Title = 'Grape Variety';

	//Then font settings
	var TabulousLabelFont = 'Helvetica Neue', TabulousFontSize = '14', TabulousFontWeight = 'normal', TabulousFontStyle = 'normal';

	//And color
	var TabulousFontColor = 'white'; //Hex or any standard color name


	//Then move on to our hilight/selected state. Make them the same, or change 'em up!
	var button1HLTitle = 'Country', button2HLTitle = 'Region', button3HLTitle = 'Appellation', button4HLTitle = 'Grape Variety';

	var TabulousLabelHLFont = 'Helvetica Neue', TabulousHLFontSize = '14', TabulousHLFontWeight = 'normal', TabulousHLFontStyle = 'normal';

	var TabulousHLFontColor = 'white'; //Hex or any standard color name

	var TabulousButtonBkg = 'transparent'; //Hex or any standard color name

	var TabulousButtonHLBkg = 'transparent'; //Hex or any standard color name

	var TabulousButton_1 = Ti.UI.createButton({
		backgroundImage:TabulousButtonGraphic,
		title: button1Title,
		color: TabulousFontColor,
		left: TabulousButtonGutter,
		top: TabulousButtonOffset,
		width: TabulousButtonWidth,
		height: TabulousButtonHeight,
		font:{fontSize:TabulousFontSize,  fontWeight:TabulousFontWeight,fontFamily:TabulousLabelFont, fontStyle:TabulousFontStyle}
	});

	var TabulousButton_1_HL = Ti.UI.createButton({
		backgroundImage:TabulousButtonGraphic_HL,
		title: button1HLTitle,
		color: TabulousHLFontColor,
		backgroundColor: TabulousButtonHLBkg,
		left: TabulousButtonGutter,
		top: TabulousButtonSelectedOffset,
		width: TabulousButtonWidth,
		height: TabulousButtonSelectedHeight,
		font:{fontSize:TabulousFontSize,  fontWeight:TabulousFontWeight,fontFamily:TabulousLabelFont, fontStyle:TabulousFontStyle}
	});

	self.add(TabulousButton_1);
	self.add(TabulousButton_1_HL);

	TabulousButton_1.hide();
	TabulousButton_1_HL.show();

	TabulousButton_1.addEventListener('touchstart', function()
		{
		deselectAllButtons();
		TabulousButton_1_HL.show();
		TabulousButton_1.hide();
		Ti.API.info('clicked on btn 1');
		controller.update(tableview, 'country');
		//hideAllViews();
		//TabulousView1.show();
		}
	);

	var TabulousButton_2 = Ti.UI.createButton({
		backgroundImage:TabulousButtonGraphic,
		title: button2Title,
		color: TabulousFontColor,
		left: TabulousButtonWidth + (TabulousButtonGutter * 2),
		top: TabulousButtonOffset,
		width: TabulousButtonWidth,
		height: TabulousButtonHeight,
		font:{fontSize:TabulousFontSize,  fontWeight:TabulousFontWeight,fontFamily:TabulousLabelFont, fontStyle:TabulousFontStyle}
	});

	var TabulousButton_2_HL = Ti.UI.createButton({
		backgroundImage:TabulousButtonGraphic_HL,
		title: button2HLTitle,
		color: TabulousHLFontColor,
		backgroundColor: TabulousButtonHLBkg,
		left: TabulousButtonWidth + (TabulousButtonGutter * 2),
		top: TabulousButtonSelectedOffset,
		width: TabulousButtonWidth,
		height: TabulousButtonSelectedHeight,
		font:{fontSize:TabulousFontSize,  fontWeight:TabulousFontWeight,fontFamily:TabulousLabelFont, fontStyle:TabulousFontStyle}
	});

	self.add(TabulousButton_2_HL);
	self.add(TabulousButton_2);

	TabulousButton_2.show();
	TabulousButton_2_HL.hide();

	TabulousButton_2.addEventListener('touchstart', function()
		{
		deselectAllButtons();
		TabulousButton_2_HL.show();
		TabulousButton_2.hide();
		}
	);

	var TabulousButton_3 = Ti.UI.createButton({
		backgroundImage:TabulousButtonGraphic,
		title: button3Title,
		color: TabulousFontColor,
		left: (TabulousButtonWidth *2) + (TabulousButtonGutter * 3),
		top: TabulousButtonOffset,
		width: TabulousButtonWidth,
		height: TabulousButtonHeight,
		font:{fontSize:TabulousFontSize,  fontWeight:TabulousFontWeight,fontFamily:TabulousLabelFont, fontStyle:TabulousFontStyle}
	});

	var TabulousButton_3_HL = Ti.UI.createButton({
		backgroundImage:TabulousButtonGraphic_HL,
		title: button3HLTitle,
		color: TabulousHLFontColor,
		backgroundColor: TabulousButtonHLBkg,
		left: (TabulousButtonWidth * 2) + (TabulousButtonGutter * 3),
		top: TabulousButtonSelectedOffset,
		width: TabulousButtonWidth,
		height: TabulousButtonSelectedHeight,
		font:{fontSize:TabulousFontSize,  fontWeight:TabulousFontWeight,fontFamily:TabulousLabelFont, fontStyle:TabulousFontStyle}
	});

	self.add(TabulousButton_3_HL);
	self.add(TabulousButton_3);

	TabulousButton_3.show();
	TabulousButton_3_HL.hide();

	TabulousButton_3.addEventListener('touchstart', function()
		{
		deselectAllButtons();
		TabulousButton_3_HL.show();
		TabulousButton_3.hide();
		}
	);

	var TabulousButton_4 = Ti.UI.createButton({
		backgroundImage:TabulousButtonGraphic,
		title: button4Title,
		color: TabulousFontColor,
		left: (TabulousButtonWidth * 3) + (TabulousButtonGutter * 4),
		top: TabulousButtonOffset,
		width: TabulousButtonWidth,
		height: TabulousButtonHeight,
		font:{fontSize:TabulousFontSize,  fontWeight:TabulousFontWeight,fontFamily:TabulousLabelFont, fontStyle:TabulousFontStyle}
	});

	var TabulousButton_4_HL = Ti.UI.createButton({
		backgroundImage:TabulousButtonGraphic_HL,
		title: button4HLTitle,
		color: TabulousHLFontColor,
		backgroundColor: TabulousButtonHLBkg,
		left: (TabulousButtonWidth * 3) + (TabulousButtonGutter * 4),
		top: TabulousButtonSelectedOffset,
		width: TabulousButtonWidth,
		height: TabulousButtonSelectedHeight,
		font:{fontSize:TabulousFontSize,  fontWeight:TabulousFontWeight,fontFamily:TabulousLabelFont, fontStyle:TabulousFontStyle}
	});

	self.add(TabulousButton_4_HL);
	self.add(TabulousButton_4);

	TabulousButton_4.show();
	TabulousButton_4_HL.hide();

	TabulousButton_4.addEventListener('touchstart', function()
		{
		deselectAllButtons();
		TabulousButton_4_HL.show();
		TabulousButton_4.hide();
		}
	);

	function deselectAllButtons() {
		TabulousButton_1_HL.hide();
		TabulousButton_1.show();
		TabulousButton_2_HL.hide();
		TabulousButton_2.show();
		TabulousButton_3_HL.hide();
		TabulousButton_3.show();
		TabulousButton_4_HL.hide();
		TabulousButton_4.show();
	};

	var DataController = require('lib/controller/DataController');
	
	var tableview = Titanium.UI.createTableView({
		editable: false,
		top: 30,
		height: 200,
		backgroundColor: '#f00',
		rowBackgroundColor: '#0f0',
		data: [],
		layout: 'vertical'
	});
	
	var controller = new DataController(dic);
	controller.update(tableview, 'country');
	
	var message = Titanium.Network.networkType === Titanium.Network.NETWORK_NONE ? 'You need a network connection to use this program' : 'Reloading data...';
	
	var messageLabel = Titanium.UI.createLabel({
		text: message,
		top: 40,
		height: 'auto',
		textAlign: 'left',
		color: '#fff',
		font: {
			fontSize: 20,
		},
	})
	
	self.add(tableview);
	self.add(messageLabel);

	return self;
}

module.exports = HomeData;