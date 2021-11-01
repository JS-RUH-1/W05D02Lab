
//reduser 
//هنا ننادي القيمه الابتدائيه 0 او اري فاضي ونستخدم 
//السويتش افعال المستخدم يعني المعادلات الزياده الانقصان هنا 

const initialState ={
    counter :0,
};

const counter = (state = initialState, {type, payload}) => {

    switch (type) {
      case 'INC_COUNTER':
        return { counter: state.counter + payload };
  
      case 'DEC_COUNTER':
        return { counter: state.counter - payload
        };
      case 'RESET_COUNTER':
        return {
          counter: 0
        };
      default:
        return state;
    }
  };

  export default counter;

  //Action
  //export عشان نستخدمها في الستور
 //نعطيه اتايب و البي لود عشان ينادي السويتش 
  export const incCounter = (payload) => {
    return {
      type: 'INC_COUNTER',
      payload: payload,
    };
  };
  
  export const decCounter = (payload) => {
    return {
      type: 'DEC_COUNTER',
      payload: payload,
    };
  };
  
  export const resetCounter = () => {
    return {
      type: 'RESET_COUNTER'
    };
  };