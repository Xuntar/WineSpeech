function HomeWindow(dic) {
    var helper = dic.helper;
    var models = dic.joli.models.get();

    //load component dependencies
    var HomeView = require('ui/home/HomeView');

    var self = Ti.UI.createWindow({
        title: 'Home',
        backgroundColor:'#000',
        navBarHidden: false,
        //barColor: '#3693cc',
		orientationModes:
		[
			Titanium.UI.PORTRAIT,
			Titanium.UI.UPSIDE_PORTRAIT
		],
		});

    var HomeView = new HomeView(dic);
    self.add(HomeView);

    return self;
};

module.exports = HomeWindow;
