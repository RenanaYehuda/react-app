import React, { Component } from "react";
import Counter from "./counter";
import Exchange from "./exchange";
import Gallery from "./gallery";
import Message from "./message";

export default class AppHw extends Component {
  render() {
    return (
      <div className="container">
        <Message msg="first 1" bg="red" />
        <Message msg="second 2" bg="reg(0,255,255)" />
        <hr />
        <Exchange />
        <hr />
        <Counter />
        <hr />
        <Gallery />
      </div>
    );
  }
}
