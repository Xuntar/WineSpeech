function HomeHeader(dic) {
	var self = Titanium.UI.createView({
	    backgroundImage:'/images/background_home_header.png',
	    width:480,
	    height:345,
	    top:0,
	    left:0
	});
	
	var textFieldSearch = Titanium.UI.createTextField({
		top:100,
		left:10,
		width:280,
	    autocorrect:false,
	    font:{fontSize:16},
	    hintText:'Search...',
	    backgroundImage:'/images/background_home_search_field.png'
	});
	
	var buttonSearch = Titanium.UI.createButton({
		title: 'Go',
		width:50,
		height:40,
		font:{fontSize:16,fontWeight:'bold'},
		left:10,
		top:140
	});
	
	self.add(buttonSearch);
	self.add(textFieldSearch);
	
	return self;
};

module.exports = HomeHeader;