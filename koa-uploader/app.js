const os = require('os')
const koaBody = require('koa-body')
const Koa = require('koa')
const app = new Koa()
const main = async function (ctx) {
    const tmpdir = os.tmpdir();
    const files = ctx.request.body.files || {}
    console.log(files)
}
app.use(main)
app.listen(3000)