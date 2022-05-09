import React from 'react';

const CounterButton = (props) => {
  return (
    <button className="button-style" 
    onClick={() => props.setCount(props.count + 1)}>
      {props.name}
    </button>
  );
}
  export default CounterButton;