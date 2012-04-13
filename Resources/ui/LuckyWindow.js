function LuckyWindow(dic) {
    var helper = dic.helper;
    var models = dic.joli.models.get();

    //load component dependencies
    var LuckyView = require('ui/lucky/LuckyView');

    var self = Ti.UI.createWindow({
        title: 'I\'m feeling lucky',
        backgroundColor:'#000',
        navBarHidden: false,
        //barColor: '#3693cc',
		orientationModes:
		[
			Titanium.UI.PORTRAIT,
			Titanium.UI.UPSIDE_PORTRAIT
		],
		});

    var LuckyView = new LuckyView(dic);
    self.add(LuckyView);

    return self;
};

module.exports = LuckyWindow;
