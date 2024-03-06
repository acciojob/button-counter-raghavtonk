
import React from "react";
import './../styles/App.css';
import { useState } from "react";

const App = () => {
  const [count ,setCount]=useState(0);
  function countHandle(){
    setCount(count+1)
  }
  return (
    <div>
        <p>Button clicked {count} times</p>
        <button onClick={countHandle}>click me</button>
    </div>
  )
}

export default App
