function HomeData(dic) {

	var self = Titanium.UI.createView({
		left: 0,
		width: '100%',
		height: 400,
		top: 0,
		backgroundColor: '#222',
	});

	var message = Titanium.Network.networkType === Titanium.Network.NETWORK_NONE ? 'You need an internet connection to use this program' : 'Reloading data...';

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

	var HomeTabs = require('ui/home/HomeTabs');
	var homeTabs = new HomeTabs();

	homeTabs.addEventListener('ui.home.tabs.clicked', function(e){
		Titanium.API.info('Caught '+e.tableName+' button event');
		controller.update(tableview, e.tableName);
	});

	self.add(homeTabs);

	self.add(messageLabel);
	
    tableview.addEventListener('click', function(e) {
        if (e.row.className == 'conferenceRow') {
            controller.showConference(e.row.conference_id);
        }
    });

	self.add(tableview);

	return self;
}

module.exports = HomeData;