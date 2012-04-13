function DataRow(dic, data, options) {
	var defaults = {
		backgroundColor: '#3693cc',
		borderColor: '#efefef',
		color: '#fff'
	};
	options = dic.joli.merge(defaults, options);

	var self = Ti.UI.createTableViewRow({
		data_id: data.id,
		height: 'auto',
		className: 'dataRow',
		borderColor: options.borderColor,
		hasChild: true,
		backgroundColor: options.backgroundColor,
		//backgroundSelectedImage: 'images/sessionbckgd@2x.png',
		layout: 'vertical'
	});

	var titleLabel = Ti.UI.createLabel({
		text: data.name,
		font: {
			fontSize: 16,
			fontWeight: 'bold'
		},
		left: 10,
		top: 10,
		height: 'auto',
		color: options.color,
		touchEnabled: false
	});
	self.add(titleLabel);

	return self;
}

module.exports = DataRow;