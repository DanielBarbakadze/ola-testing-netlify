import React, { Component } from "react";

export default class TodoError extends Component {
  render() {
    return (
      <div>
        <p>Error message:</p>
        <p style={{ color: "red" }}>{this.props.error}</p>
      </div>
    );
  }
}
