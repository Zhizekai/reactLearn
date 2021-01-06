import React, {Component} from 'react';
import HeadBox from "../headBox/HeadBox";
import axios from "axios";

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputVal: "",
            isHot: true
        };
    }

    sendReqFindUser = () => {
        console.log("发送axios请求");
        //需要在package.json里配置代理请求 "proxy": "https://api.github.com"
        axios.get("/api1/search/users?q=1", {
            headers: {"auth": "123"}
        }).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        });
    };


    render() {


        return (
            <div className={"row"}>
                <HeadBox/>

                <button onClick={this.sendReqFindUser}>点我想git发送请求</button>

            </div>
        );
    }
}