const initialState = {
    todos: [],
  };

  const todos = (state = initialState, { type, updateTodo }) => {
    switch (type) {

      case "ADD_TODOS":
        return { todos: updateTodo };

      case "REMOVE_TODO":
        return {todos: updateTodo};


      default:
        return state;
    }
  };

  export default todos;

  export const addTodos = (updateTodo) => {
    return {
      type: "ADD_TODOS",
      updateTodo: updateTodo,
    };
  };


  export const removeTodo = (updateTodo) => {
    return {
      type: "REMOVE_TODO",
      updateTodo: updateTodo,
    };
  };

//   export default addTodos
