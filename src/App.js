import React, { Component } from "react";
import "./App.css";
import Forms from "./component/Forms";
import Monna from "./component/monna";

class App extends Component {
  state = {
    myString: "Hello",
    myString1: "React",
    myString2: "React app"
  };
  render() {
    return (
      <div className="App">
        <h1>{this.state.myString}</h1>
        <h1>{this.state.myString1}</h1>
        <Monna myString2={this.state.myString2}/>
        <Forms/>
      </div>
    );
  }
}
export default App;
