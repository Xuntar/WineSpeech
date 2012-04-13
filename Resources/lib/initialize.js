/**
 * Allows to initialize the application, in case it has not been made before.
 */
(function() {
	var dbName = 'winespeechDB';
	// database
	Titanium.App.Properties.setString('database_name', dbName);

	// Removing database
	//var delDB = Titanium.Database.open(dbName);
	//delDB.remove();

	// Install database
	//Titanium.Database.install('db/winespeech.sqlite',dbName);

	// urls
	Titanium.App.Properties.setString('site_url', 'https://xuntar.com/winespeech/');
	Titanium.App.Properties.setString('api_url', 'https://xuntar.com/winespeech/index.php?r=');
})();
