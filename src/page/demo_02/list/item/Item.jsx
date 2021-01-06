import React, {Component} from 'react';

export default class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '我是子组件',
            msg: '子组件传值给父组件'
        };

    }

    render() {
        console.log(this.props);
        const num1 = this.props.value;
        return (
            <div>{this.props.value}
                <button onClick={(e) => {
                    this.props.setParentData(e, num1);
                }}>点击按钮
                </button>
            </div>
        );
    }
}