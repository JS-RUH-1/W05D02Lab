// 1
const inirialState ={
    counter:0
}
// 2
const counter =(state = inirialState, {type,payload}) =>{
    // 3
    switch(type){
        case "Increment":
        
            
            return{
                counter:state.counter+=1
            }
            break;
        case "Decrement":
            return{
                counter:state.counter-payload
            } 
            break;
        case "Reset":
            return{
                counter:0
            }    
            break;
        default:
             return state
    }
}
// 4
export const increment = ()=>{
    return{
    type: "Increment",
    
    }
}
export const decrement = (counter)=>{
    return{
        type:"Decrement",
        payload:counter
    }
}
export const reset = ()=>{
    return{
        type:"Reset",
        
    }
}
// 5
export default counter
