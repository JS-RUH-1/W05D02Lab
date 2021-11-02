import React, {useState, useEffect} from "react";
import axios from 'axios'
import {useDispatch, useSelector} from 'react-redux'
import {addTodo, removeTodo, addTodos} from '../reducer/todo'

let count = 201

const TodoCompo = () => {
    const [ todo, setTodo] = useState("")

    const dispatch = useDispatch();

    const state = useSelector((state) => {
      return {
        todo: state.Todo.todo,
      }
    })

    // console.log(state.todo);

    const addTodoFunc = () => {
      const addedTodo = {
        id: count,
        title: todo
      };
      count++
  
      dispatch(addTodo(addedTodo));
      setTodo("")
      alert("The task will added down the page")
    };


    useEffect(() => {
        async function getTofo() {
          try {
              const url = 'https://jsonplaceholder.typicode.com/todos/'
              const res = await axios.get(url)
              dispatch(addTodos(res.data))
              // console.log(res.data);
          } catch (err) {
              console.log(err);
          }
        }
        getTofo()
    }, [])
    return ( 
        <div>
          <hr />
          <input type="text" id="task" style={{margin: "30px 0px 30px 30px"}} value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button onClick={addTodoFunc}>Add Task</button>

          <hr />
          {state.todo.map((ele) => (
            <div>
              <h3>{ele.id} - {ele.title}</h3>
              <button onClick={() => dispatch(removeTodo(ele))}>Remove Task</button>
            </div>
          ))}
        </div>
     );
}
 
export default TodoCompo;

