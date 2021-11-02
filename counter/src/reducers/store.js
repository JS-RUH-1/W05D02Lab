import { createStore, combineReducers } from "redux";
import counter from "./counter/Counter";

const reducers = combineReducers({ counter });
const store = createStore(reducers);

export default store;
