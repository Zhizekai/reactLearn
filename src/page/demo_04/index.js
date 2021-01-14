import ReactDOM from "react-dom";
import React from "react";
import UserPage from "./userPage/UserPage";
import './mock/index'

/**
 * 本demo主要展示 axios，axios设置请求头，mockjs的使用
 * 设置回车搜索，本demo是搜索栏的展示,运行即可
 */
let demo04run = function () {
    ReactDOM.render(
        <UserPage/>,
        document.querySelector('#root'))
};

export {demo04run}