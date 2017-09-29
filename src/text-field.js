import React, { Component } from "react";

export default class TextField extends Component {
  render() {
    return (
      <input
        type="number"
        step="0.1"
        min="0"
        id="minMlInput"
        value={this.props.value}
        onChange={this.props.onInputChange}
      />
    );
  }
}
