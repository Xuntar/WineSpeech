function DataController(dic) {
	var joli = dic.joli;
	var models = dic.joli.models.get();
	var self = {};
	
	self.update = function(tableview, table) {
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
		var DataRow = require('ui/row/Data');
		
		joli.each(dataList, function(data, id) {
			var row = new DataRow(dic, data, {});
			dataRows.push(row);
		});
		
		tableview.setData(dataRows);
	};
	
	return self;
}

module.exports = DataController;