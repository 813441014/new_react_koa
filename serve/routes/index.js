const router = require('koa-router')()
const config = require('../config/db.js');
const userService = require('../config/mysqlConfig');
var mysql = require('mysql');
const koaBody = require('koa-body')({
  multipart: true,  // 允许上传多个文件
  formidable: {
    uploadDir: 'public/images/headImage',// 上传的文件存储的路径
    keepExtensions: true  //  保存图片的扩展名
  }
});
var pool  = mysql.createPool({
  host     : config.database.HOST,
  user     : config.database.USERNAME,
  password : config.database.PASSWORD,
  database : config.database.DATABASE,
  port     : config.database.PORT
});


router.get('/',koaBody, async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.post('/register', async (ctx, next) => {
  // ctx.body = 'koa2 string'
    console.log("请注意");
    console.log(ctx.request.body);
    console.log(ctx.query.name);
  var obj = ctx.request.body;
  ctx.body = await userService.addUserData(obj);
})

router.post('/login', async (ctx, next) => {
  console.log("123");
  console.log(ctx);
  // console.log(ctx.request.body);
  // let _sql = `select * from users where name="${ctx.request.body.name}" pass=${ctx.request.body.pass}";`
  // // let _sql = "insert into user set name="+"'"+ctx.request.body.name+"'"+",pass="+ctx.request.body.pass
  // // console.log(_spl);
  // ctx.body = {
  //   title: _sql
  // }
  var obj = ctx.request.body;

  ctx.body = await userService.login(obj);
})


router.post('/upload',async (ctx,next) =>{
  console.log(ctx);
  console.log("111")
  console.log(ctx.request)
  console.log(ctx.request.body)
  ctx.body ="ddd"
})


router.get('/json', async (ctx, next) => {
  console.log("sdklf");
  ctx.body =
    [
        {
          id:"0"
       },
      {
        id:"0"
      },
      {
        id:"0"
      },
      {
        id:"0"
      },
      {
        id:"0"
      },
      {
      id:"0"
      },
      {
        id:"0"
      },
      {
        id:"0"
      },
      {
        id:"0"
      },
      {
        id:"0"
      },
      {
        id:"0"
      },
      {
        id:"0"
      }

    ]

})
module.exports = router
