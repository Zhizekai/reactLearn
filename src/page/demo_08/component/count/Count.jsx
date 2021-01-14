import React, {Component} from 'react';
import { Menu, Dropdown, Button, Space } from 'antd';
import {createDecrementAction, createIncrementAction, createIncrementAsyncAction} from "../../redux/actions";

export default class Count extends Component {
    constructor(props) {
        super(props);
        this.state = {
            carName:"c63",
            selectVal:0
        };
    }

    //加法
    increment = () => {
        const {selectVal} = this.state;
        this.props.createIncrementAction(selectVal*1);

    };
    //减法
    decrement = () => {
        const {selectVal} = this.state;

        this.props.createDecrementAction(selectVal*1)
    };
    //奇数再加
    incrementIfOdd = () => {
        const {selectVal} = this.state;
        if (this.props.count %2 !==0){
            this.props.createIncrementAction(selectVal*1)
        }


    };

    //异步加
    incrementAsync = () => {
        const {selectVal} = this.state;
        this.props.createIncrementAsyncAction(selectVal*1,1000)
    };

    render() {
        console.log("count",this.props);
        return (
            <div>
                <h1>当前求和为{this.props.count}</h1>
                <select onChange={(e) => {
                    this.setState({selectVal:e.target.value})
                }}>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>&nbsp;
                <Button onClick={this.increment}>+</Button>
                &nbsp;
                <Button onClick={this.decrement}>-</Button>
                &nbsp;
                <Button onClick={this.incrementIfOdd}>当前求和为奇数再加</Button>
                &nbsp;
                <Button onClick={this.incrementAsync}>异步加</Button>
                &nbsp;
            </div>
        );
    }
}