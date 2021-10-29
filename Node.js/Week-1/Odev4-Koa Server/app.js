const moment = require('moment');
const Koa = require("koa");
const app = new Koa();
const PORT = 3000;

// x-response-time middleware
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});

// koa.js log middleware
app.use(async (ctx, next) => {
  const startDate = moment().format("DD/MM/YYYY hh:mm:ss");
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  console.log(`${startDate} => ${ctx.method} ${ctx.url} - ${ms}ms`);
});

// response body
app.use(async (ctx) => {
  ctx.body = "Hello, World of KOA.js";
});


app.listen(PORT, () => {
  console.log(`Sunucu ${PORT} portunda çalışıyor.`);
});
