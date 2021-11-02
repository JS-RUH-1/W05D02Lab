const initialState = {
    todo: []
}

const Todo = (state = initialState, {type, payload}) => {
    switch(type) {
        case "ADD_TODOS":
            return {todo: payload}
        case "ADD_TODO":
            return { todo: [...state.todo, payload] };
        case "REMOVE_TODO":
            return {
                todo: state.todo.filter((element) => {
                return element.id !== payload.id;
                }),
            };
        default:
        return state;
    }
}

export default Todo

export const addTodos = (data) => {
    return {
        type: "ADD_TODOS",
        payload: data
    }

}

export const addTodo = (data) => {
    return {
        type: "ADD_TODO",
        payload: data
    }
}

export const removeTodo = (data) => {
    return {
        type: "REMOVE_TODO",
        payload: data
    }
}