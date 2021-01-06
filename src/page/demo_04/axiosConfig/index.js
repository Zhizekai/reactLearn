import axios from 'axios';  // 该处引入axios模块

// 构建axios实例
const axiosInstance = axios.create({
    // baseURL: process.env.BASE_API,  // 该处url会根据开发环境进行变化（开发/发布）
    baseURL: '',
    timeout: 10000  // 设置请求超时连接时间
});
/*请求拦截器*/
axiosInstance.interceptors.request.use(
    config => {
        console.log(config);  // 该处可以将config打印出来看一下，该部分将发送给后端（server端）
        config.headers.token = 'token2222222';
        return config;  // 对config处理完后返回，下一步将向后端发送请求
    },
    error => {  // 当发生错误时，执行该部分代码
        console.log(error); //调试用
        return Promise.reject(error);
    }
);
/*响应拦截器*/
axiosInstance.interceptors.response.use(
    response => {  // 该处为后端返回整个内容
        const res = response.data;  // 该处可将后端数据取出，提前做一个处理
        if ('正常情况') {
            return response;  // 该处将结果返回，下一步可用于前端页面渲染用
        } else {
            alert('该处异常');
            return Promise.reject('error');
        }
    },
    error => {
        console.log(error);
        return Promise.reject(error);
    }
);

export default axiosInstance;

