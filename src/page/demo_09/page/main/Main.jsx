import React, {Component} from 'react';
import jsonData from '../../list-total';
import './06style.css'
let globalDataObj = {};
const chinaData = Array.prototype.slice.call(jsonData.data.areaTree)[2];

let provinceObj = {};

/**
 * 以下代码这个情况是
 * {name:"河西区",province:"天津"}
 * {name:"河东区",province:"天津"}
 * {name:"津南区",province:"天津"}
 * {name:"和平区",province:"天津"}
 * 这样子的遍历情况，他的数据都是展开的，现在我的数据都是现成合并好的，不需要这样
 */
//处理全球的数据
Array.prototype.slice.call(jsonData.data.areaTree).forEach((item, i) => {
    if (globalDataObj[item.name] === undefined) {
        globalDataObj[item.name] = {
            confirm: 0,
            suspect: 0,
            heal: 0,
            dead: 0
        };
    }
    item.total.confirm = item.total.confirm ? item.total.confirm : 0;
    item.total.suspect = item.total.suspect ? item.total.suspect : 0;
    item.total.heal = item.total.heal ? item.total.heal : 0;
    item.total.dead = item.total.dead ? item.total.dead : 0;
    globalDataObj[item.name] = {
        confirm: globalDataObj[item.name].confirm + item.total.confirm,
        suspect: globalDataObj[item.name].suspect + item.total.suspect,
        heal:    globalDataObj[item.name].heal + item.total.heal,
        dead:    globalDataObj[item.name].dead + item.total.dead,
    };
});
//处理中国的数据
chinaData.children.forEach((item,index) => {
    if (provinceObj[item.name] === undefined){
        provinceObj[item.name] = {
            confirm: 0,
            suspect: 0,
            heal: 0,
            dead: 0
        };
    }
    item.total.confirm = item.total.confirm ? item.total.confirm : 0;
    item.total.suspect = item.total.suspect ? item.total.suspect : 0;
    item.total.heal = item.total.heal ? item.total.heal : 0;
    item.total.dead = item.total.dead ? item.total.dead : 0;
    provinceObj[item.name] = {
        confirm: provinceObj[item.name].confirm + item.total.confirm,
        suspect: provinceObj[item.name].suspect + item.total.suspect,
        heal:    provinceObj[item.name].heal + item.total.heal,
        dead:    provinceObj[item.name].dead + item.total.dead,
    };
});
let provinceList = [];
for(const key in provinceObj) {
    provinceObj[key].name = key;
    provinceList.push(provinceObj[key])
}



let provinceListSort = provinceList.sort((a,b) => {
    //从大到小排序
    if (a.confirm < b.confirm) {
        return 1;
    }else {
        return -1;
    }

});
console.log(provinceListSort);
export default class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {

        console.log(Array.prototype.slice.call(jsonData.data.areaTree));
        console.log(chinaData);
        console.log(provinceObj);
        console.log(globalDataObj);
        return (
            <div>
                <h1>中国病</h1>
                <ul>
                    <li>
                        <span>地区</span>
                        <span>确诊</span>
                        <span>死亡</span>
                        <span>治愈</span>
                    </li>
                    {

                        provinceListSort.map((item,index) => {
                            return (<li>
                                <span>{item.name}</span>
                                <span>{item.confirm}</span>
                                <span>{item.dead}</span>
                                <span>{item.heal}</span>
                            </li>)
                        })

                    }

                </ul>

            </div>
        );
    }
}