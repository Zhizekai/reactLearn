import React, {Component} from 'react';
import axios from "axios";

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue:"",
            userItems:[]
        };
    }

    handleChange = (e) => {
        this.setState({
            inputValue: e.target.value
        });
    };
    clickHandle = (e) => {
        /**
         * 此处我设置了 /api1 前缀转发，需要配置代理:
         * 1. 代理在src/setProxy里
         * 2. 或者在package.json里配置
         *
         * 此处用了src/setProxy的代理，代理和mockjs并不冲突
         *
         */
        let url = '/api1/search/users?q=';
        let query_url = url + this.state.inputValue;
        console.log(query_url);
        const that = this;
        axios.get(query_url)
            .then(function (response) {
                console.log(response.data);
                /*设置组件状态，并且通过回调函数查看组件状态*/
                // that.setState({
                //     userItem:response.data.items
                // },() => {
                //     console.log(that.state);})

                that.props.sendSearchData(response.data.items)
            }).catch(function (errnoError) {

            console.log(errnoError);
        });
    };

    handleKey =(e) => {
        if (e.keyCode === 13){
            //回车事件
            this.clickHandle();
        }
    };

    render() {
        return (
            <div>
                <section className="jumbotron">
                    <h3 className="jumbotron-heading">Search Github Users</h3>
                    <div>
                        <input value={this.state.inputValue}
                               type="text"
                               onChange={(e) => this.handleChange(e)}
                               //设置回车搜索
                               onKeyDown={(e) => this.handleKey(e)}
                               placeholder="enter the name you search"/>&nbsp;
                        <button  onClick={this.clickHandle}>Search</button>
                    </div>
                </section>
            </div>
        );
    }
}