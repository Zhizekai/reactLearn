import React from 'react';
import ReactDom from 'react-dom';
import CountContainer from "./container/countContainer/CountContainer";
import store from "./redux/store";
import {Provider} from "react-redux";
import Person from "./container/person/Person";

/**
 * 本demo主要展示react-redux的使用
 */
const demo08run = () => {

    ReactDom.render(
        //给容器组件传store
        // <CountContainer store={store}/>,
        <Provider store={store}>
            <div>
                <CountContainer/>
                <hr/>
                <Person/>
            </div>

        </Provider>
        ,
        document.getElementById("root")
    );

};

export {demo08run};