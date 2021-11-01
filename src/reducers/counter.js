const initialState = {
    counter: 0,
  };

  const counterReducer = (state = initialState, {type, payload}) => {

    switch (type) {
      case 'COUNTER_INCREMENT':
        return { counter: state.counter + payload };
  
      case 'COUNTER_DECREMENT':
        return { counter: state.counter - payload };

      case 'COUNTER_RESET':
        return {
          counter: 0
        };
        
      default:
        return state;
    }
  };

  export default counterReducer;



export const counter = {
  inc: (payload) => ({type: "COUNTER_INCREMENT", payload}),
  dec: (payload) => ({type: "COUNTER_DECREMENT", payload}),
  reset: () => ({type: "COUNTER_RESET"})
}

