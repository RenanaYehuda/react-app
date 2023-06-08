import React from "react";
import { Component } from "react";

export default class Gallery extends Component {
  state = { counter: 0 };
  pics_ar = ["cake3.jpg", "orange5.jpg", "pic2.jpg", "pic3.jpg"];

  onNextClick = () => {
    let counter = this.state.counter;
    this.setState({
      counter: counter < this.pics_ar.length - 1 ? counter + 1 : 0
    });
  };
}
