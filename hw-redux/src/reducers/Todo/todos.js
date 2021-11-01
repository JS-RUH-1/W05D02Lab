const initialState = {
  todos: [],
};

const todos = (state = initialState, { type, payLoad }) => {
  switch (type) {
    case "ADD_TODOs":
      return { todos: payLoad };
    case "DELETE_TODO":
      return {
        todos: state.todos.filter((ele) => {
          return ele.id !== payLoad.id;
        }),
      };

    default:
      return state;
  }
};

export default todos;

export const addTodos = (todos) => {
  return {
    type: "ADD_TODOs",
    payLoad: todos,
  };
};


export const deleteTodo = (todo) => {
  return {
    type: "DELETE_TODO",
    payLoad: todo,
  };
};
