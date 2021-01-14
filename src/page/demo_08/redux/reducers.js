import * as actions from './actions'
import * as types from './actionTypes'



// const initialState = {
//     visibilityFilter: actions.VisibilityFilters.SHOW_ALL,
//     todos: []
// };
//
// /*这里用了ES6 默认值的写法*/
// function todoApp(state = initialState, action) {
//     switch (action.type) {
//         case types.SET_VISIBILITY_FILTER:
//             return Object.assign({}, state, {
//                 visibilityFilter: action.filter
//             })
//         default:
//             return state
//     }
//     // 这里暂不处理任何 action，
//     // 仅返回传入的 state。
//     return state
// }

const initState = 0;
export function countReducer(preState = initState,action) {
    const {type,data} = action;
    switch (type) {
        case types.INCREMENT:
            console.log("increment",preState,action);
            return preState + data;
        case types.DECREMENT:
            console.log("decrement",preState,action);
            return preState - data;
        default:
            return preState
    }
}

const initPersonState = [{id:"001",name:"tom",age:18}];
export function personReducer(preState = initPersonState,action) {
    const {type,userData} = action;
    if (type === types.ADD_PERSON) {
        console.log("reducer add person",preState,action);
        // return [...preState,userData];
        /**
         * redux比较preState的地址和之前是否一样，一样才刷新页面
         * 这种情况preState地址和之前一样就不进行页面更新
         * personReducer必须是纯函数，preState这样就会被改写，就不是纯函数了
         */
        // console.log(preState.unshift(userData));


        return  [...preState,userData];
    }


    return preState;

}