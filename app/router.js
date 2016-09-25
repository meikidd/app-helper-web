const path = require('path');
const loading = require('loading');
const router = require('koa-router')();

const controllerPath = path.resolve(__dirname, 'controller');

module.exports = app => {
  loading(controllerPath, { call:false }).into(app, 'controllers');

  router.get('/home', app.controllers.home.home);

  app.use(router.routes())
    .use(router.allowedMethods());
}