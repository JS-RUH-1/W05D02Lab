const initialState = {
    counter: 0
}

const counter = (state = initialState, {type}) => {
    switch (type) {
        case 'INC':
            return {
                counter: state.counter + 1
            }
        case 'DEC':
            return {
                counter: state.counter - 1
            }
        case 'RESET':
            return {
                counter: 0
            }
        default:
            return state
    }
}

export const increment = () => {
    return {
        type: "INC",
    }
}
export const decrement = () => {
    return {
        type: "DEC",
    }
}
export const reset = () => {
    return {
        type: "RESET",
    }
}

export default counter;