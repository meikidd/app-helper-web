const Tutorial = require('../../model/Tutorial');
const co = require('co');

module.exports = co.wrap(function * (ctx) {
  const list = yield Tutorial.list();

  yield ctx.render('home', {
    title: 'Home',
    h1: 'hello world',
    list: JSON.stringify(list, null, 2),
  });
});
