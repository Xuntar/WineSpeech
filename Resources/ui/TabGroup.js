function TabGroup(dic, id) {
    var models = dic.joli.models.get();

    // load tab dependancies
    var HomeWindow = require('ui/HomeWindow');
    var LuckyWindow = require('ui/LuckyWindow');
    var AboutWindow = require('ui/AboutWindow');

    // create the tab group
    var self = Titanium.UI.createTabGroup();

    //create app windows
    var wins = [
      new HomeWindow(dic),
      new LuckyWindow(dic),
      new AboutWindow(dic),
    ];

    // create tabs
    var tabs = [];

    tabs.push(Titanium.UI.createTab({
        icon: '/images/icons/icon_home.png',
        title: 'Home',
        window: wins[0]
    }));
    tabs.push(Titanium.UI.createTab({
        icon: '/images/icons/icon_lucky.png',
        title: 'Feelin\' lucky',
        window: wins[1]
    }));
    tabs.push(Titanium.UI.createTab({
        icon: '/images/icons/icon_about.png',
        title: 'Asian Palate',
        window: wins[2]
    }));
    wins[0].containingTab = tabs[0];
    wins[1].containingTab = tabs[1];
    wins[2].containingTab = tabs[2];

    //dic.joli.each(tabs, function(tab, key) {
    //    self.addTab(tab);
    //});
    
    self.addTab(tabs[0]);
    self.addTab(tabs[1]);
    self.addTab(tabs[2]);

    //self.setActiveTab(tabs[id]);
    return self;
}

module.exports = TabGroup;