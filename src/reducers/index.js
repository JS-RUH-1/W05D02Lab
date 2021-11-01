// 1. import createStore, combineReducers from redux
import { createStore, combineReducers } from "redux";
// 2. import the reducer from its file location.
import counterReducer from "./counter";
import todoReducer from "./todo";

// 3. Define a variable called "reducers", we will use to store all the reducer functions with the combineReducers method.
const reducers = combineReducers({ 
    counter: counterReducer,
    todo: todoReducer
});
// 4. Declare a variable called "store" and set it equal the method "createStore" and pass the reducers variable as a value as you invoque it.
const store = createStore(reducers);

export default store;