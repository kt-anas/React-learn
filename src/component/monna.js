import React, { Component } from "react";

export default class Monna extends Component {
    state = {
        counter:0
    };
    onIcrement = () => {
        this.setState({counter: this.state.counter + 1});
    };
    onDecrement = () => {
        this.setState({counter: this.state.counter -1});
    };
  render() {
    return (
      <div>
        <h1>monna Component hello</h1>
         
        <h1>{this.state.counter}</h1>
        <button onClick={this.onIcrement}>+</button>
        <button onClick={this.onDecrement}>-</button>
      </div>
    );
  }
}
//  onClick => this => state => this.state => this.setState