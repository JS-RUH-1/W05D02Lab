import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { inc, dec, reset } from "./reducers/Counter/counter";
import { addTodos, deleteTodo } from "./reducers/Todo/todos";
import { useEffect } from "react";
import axios from "axios";

function App() {
  const dispatch = useDispatch();

  const state = useSelector((state) => {
    return {
      counter: state.counter.counter,
      todos: state.todos.todos,
    };
  });
  const increment = () => {
    dispatch(inc(10));
  };
  const decrement = () => {
    dispatch(dec(10));
  };
  const resetNum = () => {
    dispatch(reset(0));
  };
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/")
      .then((res) => {
        dispatch(addTodos(res.data));
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div className="counter">
        <h2>{state.counter}</h2>
        <button onClick={increment}>+10</button>
        <button onClick={decrement}>-10</button>
        <button onClick={resetNum}>Reset</button>
      </div>

      {state.todos.map((ele) => {
        console.log(ele);
        return (
          <div className="todo">
            <p>
              Task # {ele.id}
              <br />
              {ele.title}
            </p>
            <button
              onClick={() => {
                dispatch(deleteTodo(ele));
              }}
            >
              Remove Todo
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
