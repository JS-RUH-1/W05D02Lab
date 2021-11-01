import './App.css';
import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import {
  incCounter,
  decCounter,
  resetCounter,
} from "./reducers/counter/counter";

import { addTodos, removeTodo } from "./reducers/todos/todos";

function App() {

  const dispatch = useDispatch();

  const state = useSelector((store) => {
    return {
      counter: store.counter.counter,
      todos: store.todos.todos,
    };
  });


  React.useEffect(() => {
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
    <div className="App">
       <div className="counter">
          <h1>Counter</h1>
          <h2>{state.counter}</h2>
          <button onClick={() => dispatch(decCounter(1))}>Increase 1</button>
          <button onClick={() => dispatch(incCounter(1))}>Decrease 1</button>
          <button onClick={() => dispatch(resetCounter())}>Reset</button>
      </div>


      <hr/><hr/>
      <h1>Todos</h1>

      {state.todos.map((element) => {
        return (
          <div className="todo">
            <p>Task # {element.id}<br/>{element.title.toUpperCase()}</p>
            <button onClick={() => { dispatch(removeTodo(element))}}>Remove Todo</button>
          </div>
        );
      })}

    </div>
  );
}

export default App;




















// import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'
// import Login from './Login'
// import Home from './Home'
// import About from './About'
// import Nav from './Nav'
// export const logedInContext = React.createContext();

// function App() {
//   const [logedIn, setLogedIn] = React.useState(false)

//   return (
//   <Router>
//     <div className="App">
//        <logedInContext.Provider value={logedIn}>
//             <Nav setLogedIn={setLogedIn}/>
//             <Switch>
//               <div className='switch-div'>
//                     <Route path="/">{logedIn ? <Redirect to="/Home" /> : <Redirect to="/Login" />}</Route>
//                     <Route path="/Login"><Login setLogedIn={setLogedIn}/></Route>
//                     <Route path="/Home"> <Home/></Route>
//                     <Route path="/About"><About /></Route>
//               </div>
//             </Switch>
//         </logedInContext.Provider>
//     </div>
//   </Router>
//   );
// }
