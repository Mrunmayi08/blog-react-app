import React, { useReducer } from "react";
const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "inc":
      return state + 1;
    case "dec":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};
const CounterOne = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>count {count}</div>
      <button onClick={() => dispatch("inc")}>Increment</button>
      <button onClick={() => dispatch("dec")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </div>
  );
};

export default CounterOne;
