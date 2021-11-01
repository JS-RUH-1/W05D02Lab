import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "./states/counter/counter";
import { addTodo, removeTodo } from "./states/todo/todo";
import { useEffect, useState } from "react"

const axios = require('axios');

function App() {

	const dispatch = useDispatch();
  
	const state = useSelector((state) => {
		return {
			counter: state.counter.counter,
			todo: state.todo.todo,
		};
	});

	function onAddClick (){
		axios.get('https://jsonplaceholder.typicode.com/todos')
			.then(function (response) {
				let _arr = [...state.todo];
				let arr = state.todo.length;
				let updatedTodos = _arr.concat(response.data[arr]);
				dispatch(addTodo(updatedTodos));
			}
		)	
	}

	function deleteOnClick (id){
		let todoArray = [...state.todo];
		console.log ( todoArray )
		todoArray[id-1] = null;
		console.log ( todoArray )
		dispatch(removeTodo(todoArray));
	}
	return (
		<div>
			<h1>{state.counter}</h1>

			<button onClick={() => {dispatch(increment())}}>increment</button>
			<button onClick={() => {dispatch(decrement())}}>decrement</button>
			<button onClick={() => {dispatch(reset())}}>Reset</button>

			<hr></hr>
			<button onClick={() => {onAddClick()}}>Add todo</button>
		<ul>
			{state.todo.map((element) => {
				if ( element ){
					return (<li>{element.title.toUpperCase()} <button onClick={() => deleteOnClick(element.id)}>Delete</button></li>)
				}
			})}
			</ul>
		</div>
	);
}

export default App;
