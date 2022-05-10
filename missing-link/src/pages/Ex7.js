import React from "react";

class EssayForm extends React.Component {
  constructor(props) {
  super(props);
  this.state = {      
    firstName: 'First Name',
    lastName: 'Last Name'
      };
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    alert(`Hello, ${this.state.firstName} ${this.state.lastName}`);
  }

  handleChange(event){
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]:value
    })
  }
}

const Ex7 = () =>{
  return (
    <div>
      <h3 className="">Ex7</h3>
      <div className="container">
      <form onSubmit={this.handleSubmit}>
        <label>
          <input name='firstName' type="text" value={this.state.firstName} onChange={this.handleChange}/>
        </label>
        <br></br>
        <label>
          <input name='lastName' type="text" value={this.state.lastName} onChange={this.handleChange} />
        </label>
        <br></br>
        <input type="submit" value="Submit"/>
      </form>
      </div>
    </div>
  );
}
  export default Ex7