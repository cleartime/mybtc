module.exports =  (router) => {
  router.get('/user', async function (ctx, next) {
    if(ctx.request.query.a == 1){
      ctx.body = '1'
    } else{
      ctx.body = '2'
    }
    // ctx.body = 'this1 a users response!';
    // ctx.response.body = {
    //   a:1,
    //   b:2
    // }
  })
}
