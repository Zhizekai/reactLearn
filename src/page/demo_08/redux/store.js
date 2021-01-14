import { createStore ,applyMiddleware,combineReducers} from 'redux'
import {countReducer,personReducer} from './reducers'
import thunk from "redux-thunk"; //异步函数要用的中间件


//传入的对象就是redux总状态对象
const allReducer = combineReducers({
    he:countReducer,
    rens:personReducer
})


let store = createStore(allReducer,applyMiddleware(thunk));
export default store;