const co = require('co');
const parse = require('co-body');
const Tutorial = require('../../model/Tutorial');
const App = require('../../model/App');

module.exports = co.wrap(function *(ctx) {
  const body = yield parse(ctx);

  const elements = body.elements;
  // elements = yield elements.map(element => Element.insert(element));
  const isAppExist = yield App.isNameExist(body.app);
  if(!isAppExist) {
    yield App.insert({name: body.app});
  }

  body.elements = elements.map(element => element.id).join();
  const tutorial = yield Tutorial.insert(body);

  ctx.body = {
    status: true,
    tutorial
  }
});
