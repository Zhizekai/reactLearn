import React, {Component} from 'react';

export default class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    completeTask = (e,name) => {
        console.log(name);
        this.props.completeTask(name)
    }
    deleteTask = (name) => {
        console.log("删除",name);
        this.props.deleteItem(name)
    }

    render() {


        const todoListArr = this.props.data;
        return (
            <div><ul>
                {todoListArr.map(element => {
                    return (
                        <li className="listItem" key={element.name}>
                            <input type="checkbox" checked={element.status === 1}
                                   onChange={(e) => this.completeTask( e,element.name)}/>
                            <span style={{textDecorationLine: element.status === 0 ? 'none' : 'line-through'}}>{element.name}</span>
                            <button onClick={() =>{ this.deleteTask(element.name )}} className="delete">删除</button>
                        </li>
                    );})
                }
            </ul></div>
        );
    }
}