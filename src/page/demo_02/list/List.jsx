import React, {Component} from 'react';
import Item from "./item/Item";
import PropTypes from 'prop-types';

class List extends Component {
    constructor(props) {
        super(props);
        let list2 = this.props.nums;
        this.state = {
            name: '我是父组件',
            msg: '父组件传值给子组件',
            childrenMsg: '',
            list_item_arr: list2 || [],
            list_item_html: []
        };
    }

    componentDidMount() {
        let list2 = this.state.list_item_arr;
        const list1 = list2.map((num) => {
            return (
                <Item key={num.toString()}
                      setParentData={this.getChildData}
                      value={num}>
                </Item>);
        });

        //更新state之后立即执行回调函数
        this.setState({
            list_item_html: list1
        }, () => {
            console.log(this.state);
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    getChildData = (e, num) => {
        let nextArr = this.state.list_item_html;

        nextArr = nextArr.filter((num1, index) => {
            console.log(num1.props.value !== num);
            return num1.props.value !== num;
        });
        this.setState({
            childrenMsg: num,
            list_item_html: nextArr
        });
    };

    render() {
        console.log(this.props);
        return (
            <div>
                list
                {this.state.list_item_html}
                <div>
                    当前点击的是{this.state.childrenMsg}
                </div>
            </div>
        );
    }
}

List.propType = {
    name: PropTypes.string,
    nums: PropTypes.array
};
List.defaultProps = {
    value: 222
};

export default List;