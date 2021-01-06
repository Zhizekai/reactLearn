import React from 'react'
import ReactDom from 'react-dom'
import RouterMain from "./component/routerMain/RouterMain";

/**
 * 这个demo主要演示路由的配置和使用
 * historyjs ,BOM,DOM. 路由主要在DOM里
 */
const demo06run = function () {

    ReactDom.render(<RouterMain/>,document.querySelector('#root'))
};
export {demo06run}