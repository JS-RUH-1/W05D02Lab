import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import { useState, useEffect} from 'react';

// 1
import {useDispatch , useSelector} from 'react-redux';
// 2
import { increment, decrement , reset} from './reducers/counter/counter';
import {addToDo , removeToDo,listToDo } from './reducers/todo/todos';

function App() {
  const [todos , setTodos] = useState([])
  const dispatch = useDispatch();
  useEffect(()=>{

    axios.get('https://jsonplaceholder.typicode.com/todos/')
    .then(res =>{
      console.log(res.data);
      setTodos(res.data)
      dispatch(listToDo(res.data)) 

    })


  },[])
// 3
  const [counter,setcounter] = useState(999);
  

// 4

// 5
const state = useSelector((state)=>{
  return {
    todo:state.todos.todos,
    counter:state.counter.counter
  };
});
// 6
  
  // const add = ()=>{
  //   dispatch(addToDo),
  //   setTodos(state.todos)
  // }

  




  const inc =()=>{
    dispatch(increment())
    setcounter(state.counter)
  }
  const dec = ()=>{
    dispatch (decrement(1))
    setcounter(state.counter)
  }
  const reset1 =()=>{
    dispatch (reset())
    setcounter(state.counter)
  }
  return (
    <div className="App">
      <header className="App-header">
        
       
        <h1>{state.counter}</h1>
        <input type="button" onClick={inc}/>+
       <input type="button" onClick={dec}/>-
        <input type="button" onClick={reset1}/>reset
        
        <div>
          {state.todo.map((e,index)=>{
            return(
              <div>
            
              <h3>{e.title}</h3>
              {console.log(e)}
              <button onClick={()=>dispatch(removeToDo(e))} >delete</button>
              
              </div>
            )
          })}
        </div>
      </header>
    </div>
  );
}

export default App;
