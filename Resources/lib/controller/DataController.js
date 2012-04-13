function DataController(dic) {
	var joli = dic.joli;
	var models = dic.joli.models.get();
	var self = {};
	
	var DataRow = require('ui/row/Data');
	
	var loadingRow = new DataRow(dic, {id: 0, name: 'Loading...'}, {});
	var loadingData = [loadingRow];
	
	self.update = function(tableview, table) {
		tableview.setData(loadingData);
		var model = models[table]; //dic.joli.models.get(table);
		//Ti.API.info('model: ' + model);
		var dataList = model.all({
			order: ['name asc']
		});
		
		if (dataList.length > 0) {
			tableview.show();
		} else {
			model.forceReload();
			tableview.hide();
			return;
		}
		
		var dataRows = [];
		
		joli.each(dataList, function(data, id) {
			var row = new DataRow(dic, data, {});
			dataRows.push(row);
		});
		
		tableview.setData(dataRows);
	};
	
	/*self.showPlayer = function(id) {
        var PlayerWindow = require('ui/player/PlayerView');
        dic.tabGroup.activeTab.open(new PlayerView(dic, id), {
            animated: true
        });
    };*/
	
	return self;
}

module.exports = DataController;