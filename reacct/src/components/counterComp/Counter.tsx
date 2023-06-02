import { counterActions } from "../../store/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

interface State {
  counter: number;
}

function Counter() {
  const counter = useSelector((state: State) => state.counter);
  const dispatch = useDispatch();

  const increament = () => {
    dispatch(counterActions.increament(0));
  };

  const decreament = () => {
    dispatch(counterActions.decreament(0));
  };

  const addBy = () => {
    dispatch(counterActions.addBy(10));
  };

  return (
    <>
      <div>{counter}</div>
      <button onClick={increament}>increament</button>
      <button onClick={decreament}>increament</button>
      <button onClick={addBy}>increament</button>
    </>
  );
}

export default Counter;
