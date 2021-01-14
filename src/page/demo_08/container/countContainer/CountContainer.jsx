import React, {Component} from 'react';
import Count from "../../component/count/Count";
import {createIncrementAction, createDecrementAction,createIncrementAsyncAction} from "../../redux/actions";
import {connect} from 'react-redux'; //连接UI组件和容器组件的东西

class CountContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        const {renshu} = this.props;
        console.log("容器组件",this);
        return (
            <div>
                <h1>下方组件的人数是：{renshu}</h1>
                <Count {...this.props}/>

            </div>
        );
    }
}

/*******
 * 详细写法
function mapStateToProps(state) {
    return {count: state};

}

function mapDispatchToProps(dispatch) {
    return {
        jia: (num) => {
            console.log(num);
            //通知redux执行加法
            dispatch(createIncrementAction(num));
        },
        jian: (num) => {
            dispatch(createDecrementAction(num));
        },
        jiaAsync: (num) => {
            setTimeout(() => {
                dispatch(createIncrementAction(num));
            }, 1000);
        }
    };
}
//es6写法 , 传入两个参数，第一个括号里第一个是状态，第二个是操作
export default connect(mapStateToProps, mapDispatchToProps)(CountContainer);
**************/

/*********
 * 不创建函数变量的简写
export default connect(
    state => ({count: state}),
    dispatch => ({
        jia: (num) => {
            console.log(num);
            //通知redux执行加法
            dispatch(createIncrementAction(num));
        },
        jian: (num) => {
            dispatch(createDecrementAction(num));
        },
        jiaAsync: (num) => {
            setTimeout(() => {
                dispatch(createIncrementAction(num));
            }, 1000);

        }
    })
)(CountContainer);
 ***********/

/**
 * 简化版：把dispatch去了,react-redux从API层帮我dispatch了
export default connect(
    state => ({count:state}),
    {
        jia:createIncrementAction,
        jian:createDecrementAction,
        jiaAsync:createIncrementAsyncAction
    }
)(CountContainer);
**/

/**
 * connect 起到了subscribe的作用，监听状态
 */
export default connect(
    //state 就是redux的总状态
    state => ({count:state.he,renshu:state.rens.length}),
    {createIncrementAction, createDecrementAction, createIncrementAsyncAction}
)(CountContainer);