import React, { Component } from 'react'

export default class Counter extends Component {

  state = {counter:0,user:"koko"};
  colors_ar = ["red","blue","green","brown"]
  // נגדיר פונקציה תמיד כפונקציית חץ שאנחנו
  // ממציאים אותה כדי שלא נצטרך להתעסק עם הביינד
  add1 = () => {
   
    this.setState({counter:this.state.counter + 1})
    // יש לשים לב במיוחד בתנאים שהסטייט לא מתעדכן
    // באותו רגע ולוקח איזה עשרית שניה
    // ולכן בתנאי מומלץ להכניס את הפעולה המתמטית
    // או השינוי שביצענו בתוך האיף
    if(this.state.counter+1 >= 40){
      this.setState({user:"jack"});
    }
  }

  render() {
    // <div style="backgournd:skyblue">
    // <div style={{background:"skyblue",padding:"8px"}}>
    return (
      <div style={{color:this.colors_ar[this.state.counter]}}>
        <h2>Counter: {this.state.counter}</h2>
        <button onClick={this.add1}>Add 1 {this.state.user}</button>
      </div>
    )
  }
}
