const db = require('./index');

exports.list = function () {
  return db.query('select * from test_table');
}
