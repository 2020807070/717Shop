//jsonwebtoken
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const api = require('./api')
//挂载中间件
app.use(bodyParser.json())

//设置跨域cors
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "http://localhost:3000")
    res.header('Access-Control-Allow-Headers', 'Content-Type')
    res.header('Content-Type', 'application/json;charset=utf-8')
    next()
})

api(app)

app.listen(9000, function () {
    console.log('listen 9000...')
})

