var db = require('../data/db'),
    copy = {};

db.view('restaurant/copy', function  (err, res) {
  copy = res[0].value;
  exports.data = copy;
});
