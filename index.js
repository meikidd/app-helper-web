const koa = require('koa');
const path = require('path');
const views = require('koa-views');
const htdocs = require('koa-static');
const router = require('./app/router');

var app = new koa();

// static files
app.use(htdocs('./htdocs'));

// views
app.use(views(path.resolve(__dirname, 'app/view'), { extension: 'ejs' }));

// router
router(app);

app.listen(7004, () => {
	console.log('server started on', 7004);
});