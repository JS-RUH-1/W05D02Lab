import { createStore, combineReducers } from "redux";
import counter from "./counter/Counter";
import todos  from "./todo/Todo";

const reducers = combineReducers({ counter, todos});
 //هنا نضيف بس الي نعمل لو امبورت ويسير ياخد من هنا
// 4. Declare a variable called "store" and set it equal the method "createStore" 
//and pass the reducers variable as a value as you invoque it.
const store = createStore(reducers);

export default store;
