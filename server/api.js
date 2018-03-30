const fs = require('fs')
module.exports = function (app) {
    //连接数据库
    const mysql = require('mysql');
    const connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: '7042345',
        database: 'hcc'
    })
    connection.connect(err => {
        if (err) {
            throw err;
        }
    })
    const jsw = require('jsonwebtoken')
    //商品列表借口
    // const options = {
    //     port: 80,
    //     hostname: 'www.lb717.com',
    //     method: 'POST',
    //     path: '/mall/index/getGoodsChannel',
    //     headers: {
    //         'Content-Type': 'application/x-www-from-urlencoded;charset=utf-8'
    //     }
    // };
    const http = require('http');
    const querystring = require('querystring');
    app.post('/mall/index/getGoodsChannel', function (req, res) {
        // let data ='';
        // let request = http.request(options, (ress) => {
        //     ress.setEncoding('utf8');
        //     ress.on('data', (chunk) => {
        //         console.log(`响应主体：${chunk}`);
        //         data += chunk
        //     })
        //     res.on('end', () => {
        //         res.end(JSON.stringify(data))
        //     })
        // })
        // request.write(querystring.stringify(req.body))
        // request.end()
        console.log(req.body)
        res.end(fs.readFileSync("./shopList.json"))
    })

    //分类接口
    app.get('/category/categorySon', function (req, res) {
        //通过遍历找下标为参数的数据
        let data = JSON.parse(fs.readFileSync("./cateList.json"))
        res.end(JSON.stringify(data.list[req.query.sonId].category_list))
    })



    //添加购物车金额
    app.post('/user/Cart/addCart', function (req, res) {
        //先查找用户(查) 在存储商品id(增)    传入用户名作为唯一标示符
        connection.query('select * from hccc where token=?', [req.body.token], (err, result) => {
            if (err) {
                res.send({ code: 1, msg: "添加商品失败" })
            } else {
                //result是当前用户的信息 开始存储
                //为保证数据不覆盖先查
                console.log(req.body.goods_id)
                let arrStr;
                if (result[0].goodsId == "") {//如果为空转换
                    let arr = result[0].goodsId.split('');
                    arr.unshift(req.body.goods_id)
                    arrStr = JSON.stringify(arr)
                } else {//如果里面已经有数组
                    let arr = JSON.parse(result[0].goodsId)
                    arr.unshift(req.body.goods_id)
                    arrStr = JSON.stringify(arr)
                }
                // //result的类型竟然是数组
                // console.log(result instanceof Array)
                connection.query('update hccc set goodsId=? where token=?', [arrStr, req.body.token], (err, result) => {
                    if (err) {
                        res.send({ code: 1, msg: '添加商品失败' });
                    } else {
                        res.send({ code: 0, msg: '添加商品成功' });
                    }
                })
            }
        })

    })


    //注册接口
    app.post('/user/register', function (req, res) {
        const obj = req.body;
        const token = jsw.sign(obj.username, "hcc")
        connection.query('select * from hccc where user=?', [obj.username], (err, result) => {
            if (err) {
                res.send({ code: 1, msg: "注册失败" })
            } else {
                if (result.length > 0) {//有
                    res.send({ code: 2, msg: "用户名已经存在" })
                } else {
                    connection.query(`insert into hccc(user,password,token) values("${obj.username}","${obj.password}","${token}")`, (err, result) => {
                        if (err) {
                            res.send({ code: 1, msg: "注册失败" })
                        } else {
                            res.send({ code: 0, msg: "注册成功,为您跳转登录页" })
                        }
                    })
                }
            }
        })
    })


    //登录接口
    app.post('/user/login', (req, res) => {
        const token = jsw.sign(req.body.username, "hcc")
        connection.query('select * from hccc where user=? and password=?', [req.body.username, req.body.password], (err, result) => {
            if (err) {
                res.send({ code: 1, msg: '登录失败' })
            } else {
                if (result.length > 0) {//有
                    res.send({ code: 0, msg: '登陆成功', token:token })
                } else {
                    res.send({ code: 2, msg: '请先注册' })
                }
            }
        })
    })
}