function AboutWindow(dic) {
    var helper = dic.helper;
    var models = dic.joli.models.get();

    //load component dependencies
    var AboutView = require('ui/about/AboutView');

    var self = Ti.UI.createWindow({
        title: 'Asian Palate',
        backgroundColor:'#000',
        navBarHidden: false,
        //barColor: '#3693cc',
		orientationModes:
		[
			Titanium.UI.PORTRAIT,
			Titanium.UI.UPSIDE_PORTRAIT
		],
		});

    var AboutView = new AboutView(dic);
    self.add(AboutView);

    return self;
};

module.exports = AboutWindow;
