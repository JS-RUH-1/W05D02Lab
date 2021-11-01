const initialState = {
  counter: 0,
};

const counter = (state = initialState, { type, payLoad }) => {
  switch (type) {
    case "INC_COU":
      return { counter: payLoad + state.counter };
    case "DEC_COU":
      return { counter: state.counter - payLoad };
    case "REST_COU":
      return { counter: 0 };
    default:
      return state;
  }
};
export default counter;

export const inc = (value) => {
  return {
    type: "INC_COU",
    payLoad: value,
  };
};
export const dec = (value) => {
  return {
    type: "DEC_COU",
    payLoad: value,
  };
};
export const reset = () => {
  return { type: "REST_COU" };
};
