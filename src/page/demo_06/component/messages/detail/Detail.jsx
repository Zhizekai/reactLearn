import React, {Component} from 'react';

const messageArr=[
    {id:"01",content:"我爱中国"},
    {id:"02",content:"我爱中国222"},
    {id:"03",content:"mes我爱中国s33333"}
];

export default class Detail extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        const {match} = this.props;
        const findResult = messageArr.find((deObj) => {
            return deObj.id === match["params"].id;
        })
        console.log(this.props.match["params"]);
        return (
            <ul>
                <li>{match["params"].id}</li>
                <li>{match["params"].title}</li>
                <li>{findResult.content}</li>
            </ul>
        );
    }
}