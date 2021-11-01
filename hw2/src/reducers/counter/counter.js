
const initialState = {
    counter: 0,
  };

  const counter = (state = initialState, {type}) => {

    switch (type) {
      case 'INC_COUNTER':
        return { counter: state.counter + 1 };
  
      case 'DEC_COUNTER':
        return { counter: state.counter - 1};

      case 'RESET_COUNTER':
        return {
          counter: 0
        };
      default:
        return state;
    }
  };

  export default counter;

  export const incCounter = () => {
    return {
      type: 'INC_COUNTER',
    };
  };
  
  export const decCounter = () => {
    return {
      type: 'DEC_COUNTER',
    };
  };
  
  export const resetCounter = () => {
    return {
      type: 'RESET_COUNTER'
    };
  };