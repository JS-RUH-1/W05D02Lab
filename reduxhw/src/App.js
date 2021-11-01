import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from "react-redux";
import {
  incCounter,
  decCounter,
  resetCounter,
} from "./reducers/counter/Counter";
import {addtodos, addtodo, removeTodo }  from "./reducers/todo/Todo";
import { useState, useEffect } from 'react';
import axios from "axios"

function App() {
  const dispatch = useDispatch();

  const [todo, setTodo] = useState();

  const state = useSelector((state) => {
  
    return {
      counter: state.counter.counter,
      todos: state.todos.todos,
    };
  });

  const addTodo = () => {
    const todo = {
    
    };
    //ديس باش تربط بين الاكشن  والرديوسر dispatch 
    dispatch(addTodo(todo));
  };
  // -------------------------------------------------------------------------------
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/")
      .then((res) => {
        dispatch(addtodos(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
// ------------------------------------------------------------------------------
  return (
    <div className="App App-header">
      <div className="counter">
      {state.counter}
      <button onClick={()=> dispatch(incCounter(1))}>incCounter</button> 
      <button onClick={()=> dispatch(decCounter(1))}>decCounter</button>
      <button onClick={()=> dispatch(resetCounter())}>resetCounter</button>
      </div>

{/* --------------------------هذا الماب عشان يعرض المعلومات---------------------------------------------------- */}

      {state.todos.map((element) => {
        return (
       <div >
     <p>Task # {element.id}<br/> {element.title.toUpperCase()} </p>
     <button onClick={() => {dispatch(removeTodo(element));}} > Remove Todo</button>
      </div>
        );
      })}
    </div>
  );
}

export default App;


