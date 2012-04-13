/**
 * @author Frederik
 */
function Model(dic) {
    var joli = dic.joli;
  	var m = {};

  m.country = new joli.apimodel({
    table: 'country',
    columns: {
      id:					'INTEGER PRIMARY KEY',
      name:					'TEXT',
      sound_file_path:		'TEXT',
      is_active:			'INTEGER',
      is_deleted:			'INTEGER',
      created_date:			'INTEGER',
      last_updated_date:	'INTEGER'
    },
    /*objectMethods: {
      getFullDecoratedName: function() {
        return this.get('firstname') + ' ' + this.get('lastname').toUpperCase();
      },

      getFullName: function() {
        return this.get('firstname') + ' ' + this.get('lastname');
      }
    },*/
    url: 'http://146.255.37.38/winespeech/index.php?r=country/getcountries'
  });
  
  m.region = new joli.apimodel({
    table: 'region',
    columns: {
      id:					'INTEGER PRIMARY KEY',
      name:					'TEXT',
      sound_file_path:		'TEXT',
      is_active:			'INTEGER',
      is_deleted:			'INTEGER',
      created_date:			'INTEGER',
      last_updated_date:	'INTEGER'
    },
    url: 'http://146.255.37.38/winespeech/index.php?r=region/getregions'
  });

  // table_updates model (required by joliapi)
  m.table_updates = new joli.model({
    table: 'table_updates',
    columns: {
      id:                 'INTEGER PRIMARY KEY AUTOINCREMENT',
      name:               'TEXT',
      updated_at:         'TEXT'
    }
  });

  return m;
};

module.exports = Model;