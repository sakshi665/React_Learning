import React, { useState } from "react";
import Child from "./Child";
function CounterApp() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      <h1>Counter App</h1>
      <button onClick={increment}>+</button>
      <p>{count}</p>
      <button onClick={decrement}>-</button>
      <Child count={count}></Child>
    </>
  );
}

export default CounterApp;
