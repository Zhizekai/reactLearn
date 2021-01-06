import React, {Component} from 'react';
import List from "../list/List";

export default class Main extends Component {
    constructor(props) {
        super(props);
        const numbers = [1, 2, 3, 4, 5];
        this.state = {
            nums :numbers
        };
        this.handleClick = this.handleClick.bind(this);
    }


    handleClick(e) {
        e.preventDefault();//阻止默认事件
        console.log('The link was clicked.');
    }

    handleClick1(num, e) {
        e.preventDefault();//阻止默认事件
        console.log(num);
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>阻止默认点击事件</button>
                <button onClick={(e) => this.handleClick1(33, e)}>传参</button>
                <input defaultValue={"22222"}/>
                <List ref={'list'} nums={this.state.nums} name={"222"}/>
            </div>
        )
    }
}
