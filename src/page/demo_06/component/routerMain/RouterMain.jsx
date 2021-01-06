import React, {Component} from 'react';
import {createBrowserHistory} from 'history';
import Messages from "../messages/Messages";
import Profile from "../profile/Profile";
import Home from "../home/Home";
import { withRouter } from "react-router";
import PropTypes from "prop-types";
import {
    BrowserRouter as Router,
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
        console.log("withRouter  :  ",match,location,history);
        const pathParam = window.location.pathname;
        return (
            <Router>
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
                            <li role="presentation" className={pathParam === "/home" ? "active" : ""}>
                                {/*<Link to="/home">Home</Link> /!*Link没有高亮，想要高亮用NavLink*!/*/}
                                <NavLink activeClassName={"active"} isActive={() => {
                                    console.log("active",window.location.pathname);}} to="/home">Home</NavLink>
                            </li>
                            <li role="presentation" className={pathParam === "/tjpu/profile" ? "active" : ""}
                                onClick={() => {this.setState({navActive: "profile"});}}>
                                <MyNavLink to="/tjpu/profile">Profile</MyNavLink>
                                {/*<NavLink to="/profile">Profile</NavLink>*/}
                            </li>
                            <li role="presentation" className={this.state.navActive === "messages" ? "active" : ""}
                                onClick={() => {this.setState({navActive: "messages"});}}>
                                <NavLink to="/messages">Messages</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div>
                        {/*public 就是内置服务器的根路径，请求啥返回啥*/}
                        {/*switch就是单一匹配，匹配到了一个就不匹配了*/}
                        <Switch>
                            {/*这样就会给组件传一堆值，exact是精确匹配，“/ ”就只匹配上home 其他的都不会管*/}
                            <Route path="/home" component={Home}/>
                            <Route path="/tjpu/profile" component={Profile}/>
                            <Route path="/messages" component={Messages}/>
                            {/*<Redirect to={{*/}
                            {/*    pathname: "/home"*/}
                            {/*}}/>*/}
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

export default withRouter(RouterMain);