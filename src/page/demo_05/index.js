import ReactDOM from "react-dom";
import React from "react";
import Main from "./component/main/Main";



/**
 * 这个函数的功能是挂载组件到 id=root 的DOM节点上
 * 在一般项目里ReactDOM.render()会写在src/index.js的入口文件里，但在这里我做了简化处理：
 * 1. 每个模块都有自己的渲染函数,所以入口文件只要直接调用即可，
 * 2. 在当前项目里入口文件就不需要写ReactDOM.render()分别渲染了。
 *
 * 所以当前文件也就是充当了一般项目里src/index.js的功能
 *
 * 本demo主要展示 ref
 */
const demo05run = () => {
    ReactDOM.render(<Main/>,document.querySelector('#root'))
};

export {demo05run}