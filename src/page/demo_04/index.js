import ReactDOM from "react-dom";
import React from "react";
import UserPage from "./userPage/UserPage";
// import './mock/index'


let demo04run = function () {
    ReactDOM.render(<UserPage/>,document.querySelector('#root'))
};

export {demo04run}