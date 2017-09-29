import React, { Component } from "react";
import logo from "./logo.svg";
import TextField from "./text-field";
import "./App.css";

class App extends Component {
  state = {
    minLiquid: 0
  };

  handleMinLiquidInput = event => {
    this.setState({ minLiquid: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <TextField
          onInputChange={this.handleMinLiquidInput}
          value={this.state.minLiquid}
        />
        <p className="min-liquid">{this.state.minLiquid}</p>
      </div>
    );
  }
}

export default App;
