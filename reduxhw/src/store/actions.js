const increment = () => {
  return {
    type: "INC",
    payload: 1,
  };
};
const decrement = () => {
  return {
    type: "DEC",
    payload: 1,
  };
};

const addTodos = (todo)=>{
return {
    type:"ADD_TODOS",
    payload:todo,
}
};

const removeTodos =(todo) => {
    return {
        type:"REMOVE_TODO",
        payload:todo,
    }
}

export { increment, decrement, addTodos, removeTodos };
