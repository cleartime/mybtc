module.exports =  (router) => {
  router.get('/welcome', async function (ctx, next) {
    ctx.state = {
      text: 'text'
    };

    await ctx.render('welcome', {title: ctx.state});
  })
}
