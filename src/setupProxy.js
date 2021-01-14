const {createProxyMiddleware}  = require("http-proxy-middleware");

module.exports = function(app) {
    app.use(
        createProxyMiddleware ("/api1/**", {
            target: "https://api.github.com",//跨域地址，目标地址
            changeOrigin: true,  //让服务器知道从哪来的
            pathRewrite:{'^/api1':''} //把api1 替换成空字符串
        })
    );
};