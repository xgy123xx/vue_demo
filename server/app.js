const express = require('express');
const app = express();
// 解决跨域问题
app.all("/*", function(req, res, next) {
    // 跨域处理
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next(); // 执行下一个路由
})

const cors = require('cors');  // 处理跨域中间件
const jwt = require('jsonwebtoken')  // jwt制作token
const bodyParser = require('body-parser'); // 处理post请求中间件
const cartListJSON = require('./db/cartList.json');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

// req请求对象 req.body获取post请求数据  
// res返回对象 res.query 获取get请求数据   res.json
app.get('/api',(req,res)=>{

})

app.listen(3000);