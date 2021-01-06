import React, {Component} from 'react';

export default class HeadBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputVal: "",
            isHot: true
        };
    }

    showData = () => {
        // const input = document.getElementById("input1");


        /*ref 标记就是返回 获取真实DOM*/
        // console.log(this.refs["input1"]);
        const {input1} = this.refs; // 解构赋值
        const {input2: input22} = this; //回调函数的ref ，把ref挂在this上了，解构赋值取别名
        const {input3} = this;
        console.log("input1",input1["value"]); //获取真实DOM的value
        console.log("input2",input22["value"]);
        console.log("input3",input3["value"]);

        // debugger; //断点
    };

    //展示右侧输入框的数据
    showDataOnBlur = () => {
        // const input = document.getElementById("input1");

        /*获取真实DOM*/
        // console.log(this.refs["input1"]);
        const {input4} = this.refs; // 解构赋值
        console.log(input4["value"]); //获取真实DOM的value
        // debugger; //断点
    };

    render() {


        const box1 = {
            height:"200px",
            width:"400px",
            padding:"30px",
            backgroundColor:"red"
        };
        return (
            <div>
                <div className={"col-md-6"}>
                    input1
                    <input onChange={(e) => this.setState({inputVal: e.target.value})}
                           ref={"input1"}
                           value={this.state.inputVal}
                           type={"text"} placeholder={"点击按钮提示数据"}/>
                </div>

                <div className={"col-md-6"}>
                    {/*回调函数的ref*/}
                    input2
                    <input ref={(currentNode) => {
                        //挂在当前实例对象上
                        this.input2 = currentNode;
                    }} type={"text"} placeholder={"回调点击按钮提示数据"}/>
                </div>

                <div className={"col-md-6"}>
                    {/*回调函数的ref的被调用次数，组件每次更新的时候被调用两次,
                    第一次传入一个空的currentNode= null，第二次传入当前DOM对象*/}
                    input3
                    <input ref={(currentNode) => {
                        console.log("ref被调用",currentNode);
                        this.input3 = currentNode;
                    }} type={"text"} placeholder={"回调点击按钮提示数据"}/>
                </div>

                <button onClick={this.showData}>点我展示数据</button>
                {/*失去焦点展示数据，字符串形式的ref*/}
                <input onBlur={this.showDataOnBlur} ref={"input4"} type={"text"} placeholder={"失去焦点提示数据"}/>
                <h2>今天天气很{this.state.isHot ? "hot" : "cold"}</h2>
                <button onClick={() => {this.setState({"isHot": !this.state.isHot});}}>点我切换天气
                </button>

            </div>
        );
    }
}