import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  incCounter,
  decCounter,
  resetCounter,
} from "./reducers/counter/Counter";

function App() {
  const dispatch = useDispatch();

  const state = useSelector((state) => {
    return {
      counter: state.counter.counter,
    };
  });

  // const inc = () => {
  //   dispatch(incCounter(10));
  // };
  // const dec = () => {
  //   dispatch(decCounter(10));
  // };
  // const reset = () => {
  //   dispatch(resetCounter());
  // };

  return (
    <div className="counter">
      <h2>{state.counter}</h2>
      <button
        onClick={() => {
          dispatch(incCounter(1));
        }}
      >
        Increase 10
      </button>
      <button
        onClick={() => {
          dispatch(decCounter(1));
        }}
      >
        Decrease 10
      </button>
      <button
        onClick={() => {
          dispatch(resetCounter());
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default App;
