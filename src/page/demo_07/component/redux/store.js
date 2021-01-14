import { createStore ,applyMiddleware} from 'redux'
import countReducer from './reducers'
import thunk from "redux-thunk"; //异步函数要用的中间件
let store = createStore(countReducer,applyMiddleware(thunk));
export default store;