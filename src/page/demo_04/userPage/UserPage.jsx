import React, {Component} from 'react';
import './userPage.css';
import img1 from '../public/logo.svg';
import Search from "./search/Search";
import List from "./list/List";

import axiosInstance from "../axiosConfig";


export default class UserPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userItems: []
        };
    }

    getSearchData = (data1) => {
        this.setState({userItems: data1});
    };
    getMockData = () => {
        axiosInstance.get('https://api.github.com/search/users?q=1',
        ).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        });
    };


    render() {
        return (
            <div className="container">
                <button onClick={this.getMockData}>mock</button>
                <Search sendSearchData={this.getSearchData}/>
                <List userData={this.state.userItems}/>
            </div>
        );
    }
}