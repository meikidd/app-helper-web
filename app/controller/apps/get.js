const co = require('co');
const App = require('../../model/App');
const ResponseFormater = require('../../common/responseFormater');
module.exports = co.wrap(function *(ctx) {
  const list = yield App.list();
  ctx.body = ResponseFormater.success(list);
});
