import React, { Component } from "react";
import Counter from "./counter";
import Exchange from "./exchange";
import Gallery from "./gallery";

export default class AppHw extends Component {
  render() {
    return (
      <div className="container">
        <Counter />
        <hr />
        <Gallery />
        <hr />
        <Exchange />
      </div>
    );
  }
}
