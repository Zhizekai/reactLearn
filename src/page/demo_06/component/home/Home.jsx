import React, {Component} from 'react';
import MyNavLink from "../myNavLink/MyNavLink";
import {Route,Switch} from 'react-router-dom'

/**
 * 二级路由，多级路由的dmeo
 */
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    News = () => {
        return (
            <div>news</div>
        )
    }

    Friends = () => {

        return( <div>friends</div>)
    }


    render() {
        //

        const {history,location,match} = this.props;
        const pathParam = location.pathname;
        // console.log(location.pathname);
        return (
            <div>
                <ul className="nav nav-pills">
                    <li role="presentation" className={pathParam === "/home/news"?"active":""}>
                        <MyNavLink   to={"/home/news"}>news</MyNavLink>
                    </li>
                    <li role="presentation" className={pathParam === "/home/friends" ? "active": ""}>
                        <MyNavLink to={"/home/friends"}>Friends</MyNavLink>
                    </li>
                    <li role="presentation">
                        <a href="#">Messages</a>
                    </li>
                </ul>
                <Switch>
                    <Route path={"/home/news"} component={this.News}/>
                    <Route path={"/home/friends"} component={this.Friends}/>
                </Switch>
            </div>
        );
    }
}