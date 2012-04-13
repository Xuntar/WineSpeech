// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// load parameters
Ti.include('/lib/initialize.js');
var dic = {};

// require database components
var joliBase = require('lib/vendor/joli').connect(Titanium.App.Properties.getString('database_name'));
var joliApi = require('lib/vendor/joli.api');
dic.joli = new joliApi(joliBase);

var Model = require('lib/model/Model');
var model = new Model(dic);
dic.joli.models.initialize();

// in debug we want to make some cleanup when launching the app...
/*  dic.joli.models.get('country').truncate();
    dic.joli.models.get('table_updates').truncate();

    dic.joli.models.get('country').forceReload();
*/

/*var joli = require('/lib/joli').connect('winespeechDB');
var joliApi = require('/lib/joli.api');
Ti.include('/lib/models.js');
joli.models.initialize();

var lastUpdatedTS = Titanium.App.Properties.getInt('lastUpdatedTS');
if (lastUpdatedTS == null || lastUpdatedTS < 1291208400) {
	lastUpdatedTS = 1291208400;
	Ti.App.Properties.setInt('lastUpdatedTS', 1291208400 );
}*/

//load the helper functions
var Helper = require('lib/Helper');
dic.helper = new Helper(dic);
dic.activityIndicator;

//require and open top level UI component
var TabGroup = require('ui/TabGroup');
dic.tabGroup = new TabGroup(dic, 0);

if(Titanium.Platform.name != 'android') {
    dic.tabGroup.open({
        transition: Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
    });
} else {
    dic.tabGroup.open();
}