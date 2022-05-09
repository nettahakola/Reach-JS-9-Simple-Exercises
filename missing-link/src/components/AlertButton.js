import React from 'react';

const AlertButton = (props) => {
  return (
    <button className="button-style" 
    onClick={() => clickAlert(props.name)}>
      {props.name}
      </button>
  );
}
function clickAlert(buttonName) {
  alert(`You clicked ${buttonName}`);
}
  export default AlertButton;