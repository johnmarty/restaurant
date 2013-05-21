/*
 * GET home page.
 */

exports.index = function(req, res){
	var copy = require('../data/copy').data;
	console.log("index.js "+copy['Welcome'].content );
  res.render('index', { title: copy['Welcome'].content });
};