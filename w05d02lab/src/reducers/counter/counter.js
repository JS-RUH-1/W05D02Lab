
let initialState={
    counter:0
}

const counter = (state=initialState,{type,payload})=>{
    switch (type) {
        case 'INCREASE':
            return{counter:state.counter+payload};
        case 'DECREASE':
            return{counter:state.counter-payload};
        case 'RESET': 
            return{counter:0};
        default:
            return state;
    }
}

export default counter;

export const increase = (counter) =>{
    return{
        type: 'INCREASE', payload:counter
    }
}
export const decrease = (counter) =>{
    return{
        type: 'DECREASE', payload:counter
    }
}
export const reset = (counter) =>{
    return{
        type: 'RESET' , payload:counter
    }
}