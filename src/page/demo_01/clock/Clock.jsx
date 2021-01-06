import React, {Component} from 'react';

export default class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            data_num: 22
        };

        // 为了在回调中使用 `this`，这个绑定是必不可少的
        this.activateLasers = this.activateLasers.bind(this);
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }


    tick() {
        // console.log(this.props)
        this.setState({
            date: new Date()
        });
    }

    //数据绑定
    handleChange(e) {
        this.setState({value: e.target.value}
        );
    }

    activateLasers(e) {
        this.setState({
            data_num: this.state.data_num + 1
        });
        // console.log(this);
        // console.log('The link was clicked.');
    }

    render() {
        return (
            <div>
                {/*第一种方绑定监听*/}
                <button onClick={this.activateLasers}>+</button>
                <div>
                    {this.state.data_num}
                </div>
                {/*第二种绑定监听*/}
                <input value={this.state.value || ''} onChange={this.handleChange.bind(this)}/>
                <div>
                    输入的内容是：{this.state.value}
                </div>

                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}