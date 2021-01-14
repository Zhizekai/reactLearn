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
export  default function countReducer(preState = initState,action) {
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