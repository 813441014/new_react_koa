const router = require('koa-router')()
const config = require('../config/db.js');
const userService = require('../config/mysqlConfig');
var mysql = require('mysql');

var pool  = mysql.createPool({
  host     : config.database.HOST,
  user     : config.database.USERNAME,
  password : config.database.PASSWORD,
  database : config.database.DATABASE,
  port     : config.database.PORT
});


router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.post('/string', async (ctx, next) => {
  // ctx.body = 'koa2 string'
    console.log(ctx);
  var obj = {
    name:"chuying",
    pass:"123"
  }
  ctx.body = await userService.addUserData(obj);
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
