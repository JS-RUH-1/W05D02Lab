import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  increase as increaseCounter,
  decrease as decreaseCounter,
  reset as resetCounter,
} from "./reducers/counter/counter";
import { addTodos, addTodo as addNewTodo, removeTodo } from "./reducers/todos/todos";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [todo, setTodo] = useState();
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return {
      counter: state.counter.counter,
      todos: state.todos.todos,
    };
  });


  const inc = () => {dispatch(increaseCounter(10));},
  dec = () => {dispatch(decreaseCounter(10));},
  reset = () => {dispatch(resetCounter());};

  const addTodo = () => {
    const new_todo = {
      id:state.todos.length+1,
      title:todo
    };
    dispatch(addNewTodo(new_todo));
  };

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/")
      .then((res) => {
        dispatch(addTodos(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App App-header">
      <div className="counter">
        <button onClick={inc}>Increase 10</button>
        <button onClick={dec}>Decrease 10</button>
        <button onClick={reset}>Reset</button>
        <h4>{state.counter}</h4>
      </div>
      <div>
      <h1>TO DO LIST:</h1>
    </div>
      {state.todos.slice(0,5).concat(state.todos.slice(state.todos.length-5)).map((element) => {
        return (
          <div className="todo">
            <p>
              ID:{element.id}
              <br/>
              {element.title.toUpperCase()}
            </p>
            <button
              onClick={() => {
                dispatch(removeTodo(element));
              }}
            >
              Remove Todo
            </button>
          </div>
        );
      })
    }
    <div className="add_todo">
    <input onChange={(e) => setTodo(e.target.value)}/>
    <button onClick={addTodo}>Add ToDo</button>
    </div>
    </div>
  );
}

export default App;