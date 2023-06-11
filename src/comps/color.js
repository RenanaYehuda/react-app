import React, { Component } from "react";

export default class Color extends Component {
  changeColor = () => {
  };
  render() {
    return (
      <div className="container">
        <h2>select a color</h2>
        <div>
          <button
            onClick={() => {
              this.props.changeColor("red");
            }}
          >
            red
          </button>
          <button   onClick={() => {
              this.props.changeColor("blue");
            }}>blue</button>
          <button   onClick={() => {
              this.props.changeColor("green");
            }}>green</button>
        </div>
      </div>
    );
  }
}
