import CounterButton from "../components/CounterButton";
import React, { useState } from 'react';


const Ex4 = () =>{
  const [count, setCount] = useState(0);

    return (
      <div>
        <h3 className="">Ex4</h3>
        <div className="container">
          <p>You have clicked the button {count} times</p>
          <CounterButton name="Increment" count={count} setCount={setCount} />
          </div>
      </div>
    );
  }

  export default Ex4