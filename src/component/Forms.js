import React, { Component } from 'react'

export default class Forms extends Component {

    state = {
         firstName:"",
         lastName:""
    };

    onChangeValue = event => {
        
        this.setState({[event.target.name]: event.target.value});
    };
    onSubmit = () => {
         console.log(this.state);
    };

// onclich onSubmit 
  render() { 
    return (
      <form>
        <h1>Forms Component</h1>
        <input type="text" placeholder="First Name"
        name = "firstName" value={this.state.firstName} 
        onChange={this.onChangeValue}/>

        <input type="text" placeholder="Last Name"
         name = "lastName" value={this.state.lastName}
         onChange={this.onChangeValue}/>
        <button type="button" onClick={this.onSubmit}>
            Submit
        </button>
      </form>
    )
  } 
}
