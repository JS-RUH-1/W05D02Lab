const initialState = {
    todo: []
}

const todo = (state = initialState, {type, updatedTodos}) => {
    switch (type) {
        case 'add':
            return {
                todo: updatedTodos
            }
        case 'remove':
            return {
                todo: updatedTodos
            }
        default:
            return state
    }
}

export const addTodo = (updatedTodos) => {
    return {
        type: "add",
        updatedTodos: updatedTodos,
    }
}
export const removeTodo = (updatedTodos) => {
    return {
        type: "remove",
        updatedTodos: updatedTodos,
    }
}

export default todo;