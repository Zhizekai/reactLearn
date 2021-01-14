import React, {Component} from 'react';
import Detail from "./detail/Detail";
import {Link,Route} from "react-router-dom";
export default class Messages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messageArr:[
                {id:"01",title:"mess1"},
                {id:"02",title:"mess2"},
                {id:"03",title:"mess3"}
            ]
        };
    }

    render() {

        const {messageArr} = this.state;
        return (
            <div>

                <ul>
                    {
                        messageArr.map((msgObj,index) => {
                            return(
                                <li key={msgObj.id}>
                                    <Link to={`/messages/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
                <hr/>
                <Route path={"/messages/detail/:id/:title"} component={Detail}/>
            </div>
        );
    }
}