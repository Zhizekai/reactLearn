import Main from "./main/Main";
import ReactDOM from "react-dom";
import React from "react";

let demo02 = function () {
    ReactDOM.render(<Main/>,document.querySelector('#root'))
};
//解构运算导出
export  {demo02} ;