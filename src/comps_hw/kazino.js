import React, { useState } from "react";

export default function Kazino() {
    const [role, setRole] = useState(5);
    const [coin, setCoin] = useState(5);

    const scrole = () => {
        debugger
       if(coin>0){
        setCoin(coin-1);
        let rnd = Math.random()*6;
        setRole(Math.ceil(rnd));
        if(coin==5||coin==6){
        setCoin(coin+2);
       }
    }
       else{
        alert("you need more money and luck ....")
       }
        
        
    }

    return (
        <div className="container">
            <h1>Hello</h1>
            <img src={`../images/dice_images/dice${role}.jpg`} alt={role.toString()}/>
            <hr></hr>
            <button className="btn btn-primary btn-rounded" onClick={scrole}>scrole</button>
          <h3>your coins: {coin}</h3>
            </div>
    )
}