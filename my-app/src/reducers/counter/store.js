// 1
import { createStore,combineReducers } from "redux";
// 2
import counter from "./counter";
import todos from "../todo/todos";
// 3
const reducers =combineReducers({counter,todos})
// 4
const store = createStore(reducers);
// 5
export default store;