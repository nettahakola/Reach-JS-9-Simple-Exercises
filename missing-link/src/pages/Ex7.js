import React, { useState } from 'react';

/* this.handleChange = this.handleChange.bind(this);
this.handleSubmit = this.handleSubmit.bind(this); */

const Ex7 = () =>{
  const [formInfo, useFormInfo] = useState({      
    firstName: 'First Name',
    lastName: 'Last Name'
  })
  const HandleSubmit = () => {
    alert(`Hello, ${formInfo.firstName} ${formInfo.lastName}`);
  }
  const HandleChange = (event) => {
    const { name, value } = event.target;
    useFormInfo({
      ...formInfo,
      [name]:value
    });
  }
  return (
    <div>
      <h3 className="">Ex7</h3>
      <div className="container">
      <form onSubmit={HandleSubmit}>
        <label>
          <input name='firstName' type="text" value={formInfo.firstName} onChange={HandleChange}/>
        </label>
        <br></br>
        <label>
          <input name='lastName' type="text" value={formInfo.lastName} onChange={HandleChange} />
        </label>
        <br></br>
        <input type="submit" value="Greet me!"/>
      </form>
      </div>
    </div>
  );
}

export default Ex7