var Header = Ti.UI.createLabel({
	text: 'Hi there',
	font: {fontSize: 24},
	color: 'white',
	left: 10,
	top: 10
});

TabulousView1.add(Header);

/*var countries = new joli.query()
	.select()
	.from('country')
	.execute('array'); // faster, without creation of models

// build the countries list
var data = [];
var initial = '';

joli.each(countries, function(country, key) {
	Titanium.API.info(country);
	/*var row = {
		hasChild: false,
		country_id: country['id'],
		title: country['name']
	};
}


var table = new Titanium.UI.createTableView({
    top: 30,
    left: 0,
    height: 200,
    width:ScreenWidth
});*/