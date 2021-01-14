import React, {Component} from 'react';
import {connect} from "react-redux";
import {createAddPersonAction} from "../../redux/actions";
import {uuid} from "../../utils/uuidGetter";

class Person extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            userAge: 0
        };
    }

    addPerson = () => {

        const {username, userAge} = this.state;
        this.props.createAddPersonAction({username, userAge});
        console.log(username, userAge);
    };

    checkState = () => {
        console.log("this.props",this.props);
        console.log("this.state",this.state);
    };

    render() {

        const {users} = this.props;
        // console.log(users,uuid());

        return (
            <div>
                <input onChange={(e) => {
                    this.setState({username: e.target.value});
                }}
                       value={this.state.inputVal}
                       type={"text"} placeholder={"输入名字"}/>
                <input onChange={(e) => {
                    this.setState({userAge: e.target.value * 1});
                }}
                       type={"text"} placeholder={"输入年龄"}/>

                <button onClick={this.addPerson}>添加</button>
                <button onClick={this.checkState}>查看当前组件的props和store里的状态</button>
                <ul>
                    {users.map((item) => {
                        console.log("render",item);
                        return (
                            <li key={item.id}>姓名：{item.name}--年龄：{item.age}</li>
                        )
                    })}
                </ul>
            </div>
        );
    }
}

export default connect(
    state => ({users: state.rens}),
    {createAddPersonAction}
)(Person);