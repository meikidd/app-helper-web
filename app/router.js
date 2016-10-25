const path = require('path');
const loading = require('loading');
const router = require('koa-router')();

const controllerPath = path.resolve(__dirname, 'controller');

module.exports = function(app) {
  loading(controllerPath, {call:false}).into(app, 'controllers');

  router.get('/index', app.controllers.home.home);
  // router.get('/api/tutorials', app.controllers.tutorials.get);
  router.post('/api/tutorials', app.controllers.tutorials.post);

  router.get('/api/apps', app.controllers.apps.get);

  app.use(router.routes())
    .use(router.allowedMethods());
};
