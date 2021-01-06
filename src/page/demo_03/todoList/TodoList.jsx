import React, {Component} from 'react';
import ListItem from "./listItem/ListItem";

export default class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [{
                name: 'learn english', status: 0
            }, {
                name: 'Learn guitar', status: 0
            }, {
                name: 'weight less than 100', status: 0
            }, {
                name: 'have 100,000 deposit', status: 0
            }],
            inputVal: ''
        };
    }

    completeTask1 = (name) => {
        const TodoList = [];
        this.state.list.forEach((element, index) => {
            if (element.name === name) {
                const item = this.state.list[index];
                TodoList.push(Object.assign({}, item, {status: item.status === 0 ? 1 : 0}));
                this.setState({
                    list: TodoList
                });
            } else {
                TodoList.push(element);
            }
        });
    };

    deleteItem1(name) {
        const data = this.state.list.filter(element => element.name !== name);
        this.setState({
            list: data
        });
    }

    handleChange(e) {
        this.setState({
            inputVal: e.target.value
        });
    }

    addTask = () => {
        if (!this.state.inputVal) return;
        console.log([...this.state.list]);

        this.setState({
            list: [...this.state.list, {
                name: this.state.inputVal,
                status: 0
            }],
            inputVal: ''
        });

        /*上面的代码和下面的等效*/
        // const list = this.state.list;
        // list.push({
        //     name: this.state.inputVal,
        //     status: 0
        // });
        // this.setState({
        //     list: list,
        //     inputVal: ''
        // });
    };

    render() {
        return (
            <div className="reactTodoList">
                <header className="header">React todo list</header>
                <ListItem deleteItem={this.deleteItem1.bind(this)}
                          completeTask={this.completeTask1}
                          data={this.state.list}/>
                <footer>
                    <input value={this.state.inputVal}
                           onChange={this.handleChange.bind(this)} type="text"
                           placeholder="添加todo"/>
                    <button onClick={this.addTask} className="addTodo">添加</button>
                </footer>
            </div>
        );
    }
}

