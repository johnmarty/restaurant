/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  // copy module
  // recipe module
  , recipes = require('./routes/recipes.js')
  // , require('./data/db')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path')
  , Config = require('./config/config')
  , config = new Config()
  , copy = require('./data/copy')
  ;

var server = express.createServer();
server.use(express.bodyParser());

/**
 * Routes.
 */
server.get('/', function(req, res){
  res.render('index.ejs', copy.data.index );
});

server.get('/recipes', recipes.list);
         
server.get('/recipes/suggest', function(req, res) {
  res.render('suggest.ejs', {title: 'Suggest a Recipe'});
});

server.post('/recipes/suggest', recipes.suggest);

server.get('/recipes/:title', recipes.single);

server.get('/users', user.list);

server.get('/*', function(req, res) {
  res.status(404).render('error.ejs', {title: 'Error'});
});

/**
 * Start server
 */
server.listen(config.server.port);
console.log('Server started!');
console.log('listening on port ' + config.server.port);
console.log('deployed as : ' + process.env.NODE_ENV);
if(process.env.SHOW_CONFIG_ONSTART) {
  console.log('with this config');
  console.log(config);
}

