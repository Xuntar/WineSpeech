function HomeView(dic) {
	//------------WINDOW & SCREEN--------------
	//Let's set up a few variables that define our screen & window elements
	
	var self = Ti.UI.createView();
	var ScreenHeight = Titanium.Platform.displayCaps.platformHeight;
	var ScreenWidth = Titanium.Platform.displayCaps.platformWidth;
	
	var HomeHeader = require('ui/home/HomeHeader');
	
	var homeHeader = new HomeHeader(dic);
	self.add(homeHeader);
	
	var HomeData = require('ui/home/HomeData');
	
	var homeData = new HomeData(dic);
	homeData.top = 315;
	self.add(homeData);
	
	return self;
}

module.exports = HomeView;