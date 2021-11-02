// Create initial State for the first
const initialState = {
    counter: 0
}

// Make a reducer => take an action and search for type and make xome calculate
const Counter = (state = initialState, {type, payload}) => {
    switch(type){
        case "INC":
            return {counter : state.counter + payload}

        case "DEC":
            return {counter : state.counter - payload}

        case "RESET":
        return {counter : 0}

        default:
            return state
    }
}

// export to use it in store.js file 
export default Counter

// Make a functions for every type 

export const incFunc = (payload) => {
    return {
        type: "INC",
        payload: payload
    }
}
export const decFunc = (payload) => {
    return {
        type: "DEC",
        payload: payload
    }
}
export const resetFunc = (payload) => {
    return {
        type: "RESET",
    }
}