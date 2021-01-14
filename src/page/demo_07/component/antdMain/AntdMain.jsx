import React, {Component} from 'react';
import { Button } from 'antd';
import Count from "../count/Count";
import './antdMain.css'

export default class AntdMain extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div><Count/></div>
        );
    }
}