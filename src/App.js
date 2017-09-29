import React, { Component } from "react";
import logo from "./logo.svg";
import TextField from "material-ui/TextField";
import "./App.css";

class App extends Component {
  state = {
    minLiquid: 0
  };

  handleMinLiquidInput = event => {
    console.log(event);
    this.setState({ minLiquid: event.currentTarget.value });
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <TextField
          name="minLiquid"
          id="min-liquid-input"
          onInput={this.handleMinLiquidInput}
          value={this.state.minLiquid}
        />
        <p className="min-liquid">{this.state.minLiquid}</p>
      </div>
    );
  }
}

export default App;
