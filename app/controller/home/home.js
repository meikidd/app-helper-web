const testTable = require('../../model/test_table');
// console.log(testTable);
module.exports = function (ctx) {
  // const list = yield testTable.list();
  return testTable.list()
    .then(function(list) {
      return ctx.render('home', {
        title: 'Home',
        h1: 'hello world',
        list: JSON.stringify(list[0], null, 2)
      });
    });
  // yield ctx.render('home', {
  //   title: 'Home',
  //   h1: 'hello world',
  //   // list,
  // });
};
