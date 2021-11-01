const initialState ={
    todos:[]
    
}

const todos = (state = initialState, { type, payload }) => {
    switch (type) {
        case "AddToDos":
            return{todos:payload}
        
        case "Add":
            return { todos:payload};
            
            break;
        case "Remove":
         return { 
             todos:state.todos.filter((e)=>{
               return e.id !== payload.id

         })};
            
        break;
    
        default:return state 
            break;
    }

}

export default todos 


export const listToDo = ((payload)=>{
    
    return{
    type:'AddToDos',
    payload:payload
    }
})


export const addToDo =  ((payload)=>{
   return{
    type:'Add',
    payload:payload
   }
})

export const removeToDo =  ((payload)=>{
    return{
     type:'Remove',
     payload:payload
    }
 })
