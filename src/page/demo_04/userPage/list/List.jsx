import React, {Component} from 'react';
import img1 from "../../public/logo.svg";

export default class List extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        const imgCss = {
            width: '100px'
        };
        const userData1 = this.props.userData
        return (
            <div className="row">
                {userData1.map((item,index) => {
                    return (
                        <div className="card" key={index}>
                            <a href={item["html_url"]} target="_blank"  rel="noreferrer">
                                <img src={item["avatar_url"]} style={imgCss} alt={'react图片'}/>
                            </a>
                            <p className="card-text">{item["login"]}</p>
                        </div>
                    );})}

                {/*立即执行函数，这样会显示*/}
                {((str1) => {
                    return str1;
                })("立即执行函数")}

                {/*这样就不会显示*/}
                {/*{() => {*/}
                {/*    return 2222;*/}
                {/*}}*/}
            </div>
        );
    }
}