import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addTodos, addTodo, removeTodo } from "./reducers/todos/todos";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [todo, setTodo] = useState();
  const dispatch = useDispatch();

  const state = useSelector((state) => {
    return {
      todos: state.todos.todos,
    };
  });

  // dispatch(addTodo(todo));

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/")
      .then((res) => {
        console.log(res.data);
        dispatch(addTodos(res.data));
        // setTodo(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <h1>test</h1>
      {state.todos.map((element) => {
        return (
          <div className="todo">
            <p>
              Task # {element.id}
              <br />
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
      })}
    </div>
  );
}

export default App;
