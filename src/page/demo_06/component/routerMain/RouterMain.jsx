import React, {Component} from 'react';
import Messages from "../messages/Messages";
import Profile from "../profile/Profile";
import Home from "../home/Home";
import { withRouter } from "react-router";
import PropTypes from "prop-types";
import {
    Switch,
    Route,
    Redirect,
    NavLink
} from "react-router-dom";
import MyNavLink from "../myNavLink/MyNavLink";

class RouterMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navActive: "home"
        };
    }
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    };


    render() {
        /*获取当前页面路径，路径是域名+端口后面的东西，URL是全部*/
        const { match, location, history } = this.props;
        // console.log("withRouter  :  ",match,location,history);
        const pathParam = location.pathname;

        let isAct = "/home";
        return (

                <div className={"row"}>
                    <div className={"col-md-2"}>
                        {/*以下导航栏也可以用 bootstrap3的列表组来实现，配合navlink更好可以用到里面的activeClassName*/}
                        <ul className="nav nav-pills nav-stacked">
                            {/*操作state方式改变自身状态*/}
                            {/*<li role="presentation" className={this.state.navActive === "home" ? "active" : ""}*/}
                            {/*    onClick={() => {this.setState({navActive: "home"});}}>*/}
                            {/*    /!*<Link to="/home">Home</Link> /!*Link没有高亮，想要高亮用NavLink*!/*!/*/}
                            {/*    <NavLink activeClassName={"active"} to="/">Home</NavLink>*/}
                            {/*</li> */}
                            {/*TODO 正则匹配*/}
                            <li role="presentation" className={pathParam === "/home" ? "active" : ""}>
                                {/*<Link to="/home">Home</Link> /!*Link没有高亮，想要高亮用NavLink*!/*/}
                                <NavLink isActive={(match, location) => {
                                    if (!match) {
                                        return false;
                                    }
                                    // isAct = "/home";
                                    // console.log(match,location);
                                    // only consider an event active if its event id is an odd number
                                    // const eventID = parseInt(match.params.eventID);
                                    // return !isNaN(eventID) && eventID % 2 === 1;
                                }} activeClassName={"active"} to="/home">Home</NavLink>
                            </li>
                            <li role="presentation" className={pathParam === "/tjpu/profile" ? "active" : ""}>
                                <MyNavLink to="/tjpu/profile">Profile</MyNavLink>
                                {/*<NavLink to="/profile">Profile</NavLink>*/}
                            </li>
                            <li role="presentation" className={pathParam === "/messages" ? "active" : ""}>
                                <NavLink to="/messages">Messages</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className={"col-md-8"}>
                        {/*public 就是内置服务器的根路径，请求啥返回啥*/}
                        {/*switch就是单一匹配，匹配到了一个就不匹配了*/}
                        <Switch>
                            {/*这样就会给组件传一堆值，exact是精确匹配，“/ ”就只匹配上home 其他的都不会管*/}
                            <Route path="/home" component={Home}/>
                            <Route path="/tjpu/profile" component={Profile}/>
                            <Route path="/messages" component={Messages}/>
                            {/*如果都没有匹配上就重定向到对应位置*/}
                            <Redirect to={{
                                pathname: "/messages"
                            }}/>
                        </Switch>
                    </div>
                </div>
        );
    }
}

export default withRouter(RouterMain);