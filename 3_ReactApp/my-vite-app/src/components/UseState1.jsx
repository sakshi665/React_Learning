import { useState } from 'react'
import Child from './Child';
function UseState1() {
    const [count,setCount]=useState(0);
    
    const inc=()=>{
        setCount(count+1);
    }

    const dec=()=>{
        setCount(count-1);
    }

  return (
    <>
      <h1>Counter App</h1>
      <button onClick={inc}>+</button>
      <p>{count}</p>
      <button onClick={dec}>-</button>
      <Child count={count}> </Child>
    </>
  );
}

export default UseState1