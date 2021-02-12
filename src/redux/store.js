import {createStore, combineReducers} from 'redux';
import authReducer from './auth'
const store = combineReducers({
    authReducer
}) 

export default createStore(store, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())