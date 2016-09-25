module.exports = ctx => {
  return ctx.render('home', {
    title: 'Home',
    h1: 'hello world',
  });
};
