import React, { Component, useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(4);
  const [user, setUser] = useState("koko");

  const add1 = () => {
    setCounter(counter + 1);
    if (counter + 1 > 10) {
      setUser("jack");
    }
  };
  return (
    <div>
      <h2>
        Counter: {user} : {counter}
      </h2>
      <button onClick={add1}>Add 1</button>
      <button
        onClick={() => {
          setCounter(counter - 5);
        }}
      >
        Reduce
      </button>
    </div>
  );
};

export default Counter;

// export default class Counter extends Component {

//   state = {counter:0,user:"koko"};
//   colors_ar = ["red","blue","green","brown"]
//   // נגדיר פונקציה תמיד כפונקציית חץ שאנחנו
//   // ממציאים אותה כדי שלא נצטרך להתעסק עם הביינד
//   add1 = () => {

//     this.setState({counter:this.state.counter + 1})
//     // יש לשים לב במיוחד בתנאים שהסטייט לא מתעדכן
//     // באותו רגע ולוקח איזה עשרית שניה
//     // ולכן בתנאי מומלץ להכניס את הפעולה המתמטית
//     // או השינוי שביצענו בתוך האיף
//     if(this.state.counter+1 >= 40){
//       this.setState({user:"jack"});
//     }
//   }

//   render() {
//     // <div style="backgournd:skyblue">
//     // <div style={{background:"skyblue",padding:"8px"}}>
//     return (
//       <div style={{color:this.colors_ar[this.state.counter]}}>
//         <h2>Counter: {this.state.counter}</h2>
//         <button onClick={this.add1}>Add 1 {this.state.user}</button>
//       </div>
//     )
//   }
// }
