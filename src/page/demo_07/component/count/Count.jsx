import React, {Component} from 'react';
import { Menu, Dropdown, Button, Space } from 'antd';
import {createIncrementAction,createDecrementAction,createIncrementAsyncAction} from "../redux/actions";
import store from "../redux/store";

export default class Count extends Component {
    constructor(props) {
        super(props);
        this.state = {carName:"c63"};
    }

    // componentDidMount() {
    //     store.subscribe(()=> {
    //         console.log(store.getState());
    //         /**
    //          * 啥也不更新，就是为了利用react更新state之后自动render的特性，让组件重新render
    //          * 因为redux只管更新状态不管render
    //          */
    //         this.setState({})
    //     })
    // }

    //加法
    increment = () => {
        const {value} = this.selectNumber;
        // const {count} = this.state;
        store.dispatch(createIncrementAction(value*1));
        // this.setState({count: count + value * 1});
    };
    //减法
    decrement = () => {
        const {value} = this.selectNumber;
        // const {count} = this.state;
        // this.setState({count: count - value * 1});
        store.dispatch(createDecrementAction(value*1))
    };
    //奇数再加
    incrementIfOdd = () => {
        const {value} = this.selectNumber;
        const count = store.getState(); //reducer 返回的就是一个数字不需要解构赋值
        if (count % 2 !== 0) {
            // this.setState({count: count + value * 1});
            store.dispatch(createDecrementAction(value*1))
        }
    };
    //异步加
    incrementAsync = () => {
        const {value} = this.selectNumber;
        const count = store.getState();
        store.dispatch(createIncrementAsyncAction(value*1,1000))
        // setTimeout(() => {
        //     // this.setState({count: count + value * 1});
        //     store.dispatch(createIncrementAsyncAction(value*1))
        // }, 500);
    };

    render() {
        return (
            <div>
                <h1>当前求和为：{store.getState()}</h1>
                <select ref={c => this.selectNumber = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
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