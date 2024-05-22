//导入express模块
const express = require('express');
require("express-async-errors");
//导入http模块
const http = require('http');
//通过express创建一个app对象
const app = express();
//通过http模块创建一个server对象,并将app对象挂载到server对象上
const server = http.createServer(app);
const path = require('path');
const buildServiceFactory = require("./factory/buildServiceFactory");
const bodyParser = require("body-parser");
const ResultJson = require("./model/ResultJson");
app.use(bodyParser.urlencoded({
    extended: false,
    limit: "50mb"
}));
app.use(bodyParser.json({
    limit: "50mb"
}));

//处理静态文件
app.use("/public", express.static(path.join(__dirname, 'public')));
app.use("/upload", express.static(path.join(__dirname, "./upload")));

//处理跨域问题
const cors = require('cors');
app.use(cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true
}));

//服务工厂要在路由前面
buildServiceFactory();
console.log("服务工厂生成完成");

//加载路由
const loadRoutes = require("./utils/loadRoutes");
loadRoutes(app);

/**
 * 全局异常处理的中间件
 */
app.use((err, req, resp, next) => {
    console.log(err);
    resp.status(500).json(new ResultJson(false, err.message));
    next();
});

//启动服务,监听端口
server.listen(3000, () => {
    console.log('Server is running on port 3000');
})