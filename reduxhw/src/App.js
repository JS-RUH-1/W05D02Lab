import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {increment, decrement,addTodos,removeTodos} from "./store/actions"


import React from 'react';
import axios from 'axios';

function App() {
  const state = useSelector((state) => {
  return {
    count: state.counter.count,
    todos:state.todo.todos
  
  };
});

  const dispatch = useDispatch();


React.useEffect(()=>{
  axios.get("https://jsonplaceholder.typicode.com/todos/")
  .then((res)=> {
    dispatch(addTodos(res.data));
    console.log(addTodos(res.data))
  }

  )
},[]);


  return (
    <div className="App">
     
<div>
     <button onClick={()=> dispatch(increment())}> + </button>
     <p> {state.count}</p>
     <button onClick={()=> dispatch(decrement())}> - </button>
</div>
<hr/>

<h2>Todos</h2>
<ul>
{state.todos.map((ele)=> {
 return(
   <div>
 <p> Task #{ele.id}</p>
  <li key={ele.id}><p> {ele.title} </p> <button onClick={()=>dispatch(removeTodos(ele.id))}> Remove </button></li>
 </div> )})}
</ul>

    </div>
  );
}

export default App;
