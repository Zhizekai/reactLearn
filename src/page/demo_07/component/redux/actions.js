import * as actionTypes from "./actionTypes";
import store from "./store";

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};


/**
 * 箭头函数返回一个对象，一般函数体用 {} 包裹，不认为是一个对象，默认返回对象函数体要用()包裹
 * @param data
 * @returns {{data: *, type: string}}
 */
// export const createIncrementAction = data => ({type:"increment",data});
export function createIncrementAction(data) {
    return {type: actionTypes.INCREMENT, data};

}

export function createDecrementAction(data) {
    return {type: actionTypes.DECREMENT, data};
}

/**
 * 异步函数必须依赖redux-thunk
 * @param data
 * @param time
 */
export const createIncrementAsyncAction = (data,time) => {
    console.log(data,time);
    //异步函数就是返回一个函数
    return () => {
        setTimeout(() => {
            store.dispatch(createIncrementAction(data))
        },time);
        console.log("继续执行下去了");
    }
};
export function addTodo(text) {
    return {type: actionTypes.ADD_TODO, text};
}

export function toggleTodo(index) {
    return {type: actionTypes.TOGGLE_TODO, index};
}

export function setVisibilityFilter(filter) {
    return {type: actionTypes.SET_VISIBILITY_FILTER, filter};
}