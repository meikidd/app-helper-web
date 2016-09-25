const koa = require('koa');
const views = require('koa-views');
const path = require('path');
const router = require('./app/router');

var app = new koa();

// views
app.use(views(path.resolve(__dirname, 'app/view'), { extension: 'ejs' }));

// router
router(app);

app.listen(7004, () => {
	console.log('server started on', 7004);
});