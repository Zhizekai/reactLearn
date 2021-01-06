import ReactDOM from "react-dom";
import React from "react";
import clockCss from './clock.module.css';
import Clock from "./clock/Clock";


function ClockDemo(props) {
    console.log(props);
    return (
        <div className={clockCss.box1}>
            <h1>现在时间是{props.date_data1.date}</h1>
            <h1>姓名{props.date_data1.name}</h1>
        </div>
    );
}

function ClockBox1(props) {

    //其中一种css方法
    const st = {
        width: "200px",
        display: "flex",
    };
    return (
        <div style={st}>
            {/*扩展运算符直接传递*/}
            <ClockDemo {...props}/>
        </div>
    );
}

let clock_demo_01 = function () {
    let date_data = {
        name: "username",
        age: "33",
        date: new Date().toLocaleTimeString()
    };
    ReactDOM.render(
        <div className={clockCss.demo01_box}>
            <ClockBox1 date_data1 = {date_data}/>
            <Clock/>
        </div>
        , document.querySelector('#root'));
};

function run() {
    setInterval(clock_demo_01, 1000);
}

export default run;