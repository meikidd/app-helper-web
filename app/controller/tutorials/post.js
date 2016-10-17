const co = require('co');
const parse = require('co-body');
const Tutorials = require('../../model/tutorials');

module.exports = co.wrap(function *(ctx) {
  const body = yield parse(ctx);

  const elements = body.elements;
  // elements = yield elements.map(element => Element.insert(element));

  body.elements = elements.map(element => element.id).join();
  const tutorial = yield Tutorials.insert(body);

  ctx.body = {
    status: true,
    tutorial
  }
});
