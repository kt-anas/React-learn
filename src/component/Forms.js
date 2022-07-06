import React, { Component } from 'react'

export default class Forms extends Component {

    state = {
        inputValue:""
    };

    onChangeValue = event => {
        
        this.setState({inputValue: event.target.value});
    };
    onSubmit = () => {
         console.log(this.state.inputValue);
    };


  render() {
    return (
      <form>
        <h1>Forms Component</h1>
        <input type="text" value={this.state.inputValue} 
        onChange={this.onChangeValue}/>
        <button type="button" onClick={this.onSubmit}>
            Submit
        </button>
      </form>
    )
  }
}
