import React, { Component } from "react";
import Color from "./color";

export default class ParentColor extends Component {
  state={color:"black"}
  changeColor = (newColor) => {
    this.setState({color:newColor})
  };
  render(){
    return (
    <div className="container">
      <h1 className="text-danger" style={{color:this.state.color}}>WELCOME TO CUSTOM</h1>
      <Color changeColor={this.changeColor} />
    </div>
  );
  }
  
}
