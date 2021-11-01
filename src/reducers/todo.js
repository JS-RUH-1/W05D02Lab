const initialState = {
    todo: [],
  };

  const todoReducer = (state = initialState, {type, payload}) => {
    console.log(type, payload)
    switch (type) {
        case 'TODO_SET':
            return { todo: payload };
        case 'TODO_ADD':
            return { todo: [...state.todo,payload] };
        case 'TODO_REMOVE':
            return { todo: state.todo.filter(t => t.id !== payload) };
        default:
            return state;
    }
  };

  export default todoReducer;


export const todo = {
    add: (payload) => ({type: "TODO_ADD", payload}),
    rem: (payload) => ({type: "TODO_REMOVE", payload}),
    set: (payload) => ({type: "TODO_SET", payload})

}