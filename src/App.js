import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { counter } from "./reducers/counter";
import { todo } from "./reducers/todo";
import axios from 'axios';
function App() {
  const dispatch = useDispatch();

  const state = useSelector((state) => {
    return {
      counter: state.counter.counter,
      todo: state.todo.todo
    };
  });

  const inc = () => {
    dispatch(counter.inc(1));
  }
  const dec = () => {
    dispatch(counter.dec(1));
  }
  const reset = () => {
    dispatch(counter.reset());
  }

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos/").then((res) => dispatch(todo.set(res.data)))
  }, []);

  return <>
  <h1>My counter {state.counter}</h1>
  <button onClick={() => inc()}>+</button> <button onClick={() => dec()}>-</button> <button onClick={() => reset()}>reset</button>
  
  <h1>Todo: </h1>
  <ul>
    {state.todo?.map(element => <li key={element.id}>
      {element.title} <button onClick={() => dispatch(todo.rem(element.id))}>delete</button>
    </li>)}
  </ul>

  </>
}

export default App;
