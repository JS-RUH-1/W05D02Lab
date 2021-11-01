
// redoser 

const initialState={
    todos:[],
    //هنا الاري فاضي عشان يدخل من المستخدم ونقدر نحذف منو
}

const todos = (state =initialState, {type, payload}) =>{
   switch (type){
       case "add_todos":
           return {todos: payload};
       case "add_todo":
           return {todos: [...state.todos,payload]};
           //هما عشان يضف التدو ع كيفو 
       case "remove_todo":
           return {
               
               //filter
               //  هنا نستخدم الفلتر عشان ياخذ القيمه الي بنحذفها ما يحذف عشوائي
               // ما يسوي اري جديده
               todos:state.todos.filter((element)=>{
                return element.id !== payload.id;
           }) };
           default:
               return state;
   } 
};
export default todos;

// action
export const addtodos =(todos)=>{
    return{
        type:"add_todos",
        payload: todos,
    };
};

export const addTodo =(todo)=>{
    return{
        type:"add_todo",
        payload: todo,
    };
};

export const removeTodo =(todo)=>{
    return{
        type:"remove_todo",
        payload: todo,
    };
};