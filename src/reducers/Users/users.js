const initialState ={
    user : ''
}
 function user(state= initialState, {type ,paylod}){
    switch (type) {
        case "ADD_USER":
            return {user:paylod};
        default :
            return state ;
    }
}
export const AddUsers= (user) =>{
    return {
        type :"ADD_USER",
        paylod: user
    }
}

export default user
