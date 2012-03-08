var Header = Ti.UI.createLabel({
	text: 'Hi there',
	font: {fontSize: 24},
	color: 'white',
	left: 10,
	top: 10
});

TabulousView1.add(Header);


var table = new Titanium.UI.createTableView({
    top: 30,
    left: 0,
    height: 200,
    width:ScreenWidth
});