const testTable = require('../../model/test_table');
const co = require('co');

module.exports = co.wrap(function * (ctx) {
  const list = yield testTable.list();

  yield ctx.render('home', {
    title: 'Home',
    h1: 'hello world',
    list,
  });
});
