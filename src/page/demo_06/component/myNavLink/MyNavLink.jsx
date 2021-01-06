import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'

/**
 * 封装的NavLink
 */
export default class MyNavLink extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        /*this.props.children 用来接收标签体内容 ，标签属性用props就能接收*/
        const {title} = this.props;
        // console.log(this.props);
        return (
            /**
             * 这个不够简洁，可以在标签属性里执行children="about" 也会在标签体里展现，
             * 又由于props里面自带了children属性，{...this.props}已经把children="about"带入到标签里面
             * 所以可以直接自闭合，就是什么都不用写
             */
            // <NavLink activeClassName={""} {...this.props}>{this.props.children}</NavLink>
            <NavLink activeClassName={""} {...this.props}/>
        );
    }
}