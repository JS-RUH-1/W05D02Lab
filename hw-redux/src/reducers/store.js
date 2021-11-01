import { createStore, combineReducers } from "redux";
import counter from "./Counter/counter";
import todos from "./Todo/todos";

const reducers = combineReducers({ counter, todos });

const store = createStore(reducers);

export default store;
