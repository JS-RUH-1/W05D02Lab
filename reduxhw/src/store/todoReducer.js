const initialState ={
    todos: [],
};


const todos =(state= initialState, {type,payload})=>{

    switch (type) {
        case "ADD_TODOS":
            return {...todos, todos:payload};

        case "REMOVE_TODOS":
                return {
                    ...todos,
                    todos:state.todos.filter((ele)=>{return ele.id !== payload.id;})
                };
        default:
            return state;
    }
}

export default todos;