var cradle = require('cradle')
  , Config = require('../config/config')
  , config = new Config()
  ;

var db = new(cradle.Connection)(
		config.database.restaurant.url, 
		config.database.restaurant.port, 
		{
  			auth: {
	  			username: config.database.restaurant.auth.user, 
	  			password: config.database.restaurant.auth.pass
  			}
		}).database(config.database.restaurant.dbname);

module.exports = db;