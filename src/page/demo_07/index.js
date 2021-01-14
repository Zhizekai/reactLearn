import React from 'react';
import ReactDom from 'react-dom'
import AntdMain from "./component/antdMain/AntdMain";
import store from "./component/redux/store";

/**
 * 这个demo主要展示redux 和 redux-thunk的使用方式
 */
const demo07run = () => {

    ReactDom.render(<AntdMain/>,document.querySelector('#root'))

    /**
     * 监听全局store的变化
     * DOM 的diff算法不会让所有组件全render的，
     */
    store.subscribe(() => {
        ReactDom.render(<AntdMain/>,document.querySelector('#root'))
    });
};



export {demo07run};