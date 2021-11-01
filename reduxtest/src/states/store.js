import { createStore, combineReducers } from "redux";
import counter from './counter/counter';
import todo from './todo/todo';

const reducers = combineReducers({ counter, todo });
const store = createStore(reducers);

export default store;