const db = require('./index');

exports.list = function *() {
  let result = yield db.query('select * from test_table');
  return result[0];
}
