import React from "react";
import { useDispatch, useSelector} from 'react-redux'
import { incFunc, decFunc, resetFunc } from '../reducer/counter'

function CounterCompo() {

  const dispatch = useDispatch()

  const state = useSelector((state) => {
    return {
      counter: state.Counter.counter,
    }
  })


  const inc = () => {
    dispatch(incFunc(1))
  }
  const dec = () => {
    dispatch(decFunc(1))
  }
  const reset = () => {
    dispatch(resetFunc())
  }

  return (
    <div className="App">

      <h2>{state.counter}</h2>
      <button onClick={inc}>Increase By 1</button>
      <button onClick={dec}>Decrease By 1</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default CounterCompo;
