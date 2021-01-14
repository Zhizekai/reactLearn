import React from 'react';
import ReactDom from 'react-dom';
import Main from "./page/main/Main";

const demo09run = function () {
    ReactDom.render(<Main/>,document.querySelector('#root'))

}
export {demo09run};