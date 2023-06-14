import React, {useState, useEffect} from 'react';
import axios from "axios";
import TvItem from "./tvItem";


const AppTv = () => {

  const [ar,setAr] = useState([]);
  
  useEffect(() => {
    doApi();
  },[])

  const doApi = async() => {
    let url = "https://expressrichpepole.onrender.com"
    try{
      let resp = await axios.get(url);
      console.log(resp.data);
      setAr(resp.data);
    }
    catch(err){
      console.log(err)
      alert("There problem, come back later")
    }
  }
  return (
    <div>
      <h2>List of vip</h2>
      <div className="row g-2">
        {ar.map(item => {
          return(
            <TvItem key={item.id} item={item}/>
          )
        })}

        {ar.length < 1 && <h2>Loading...</h2>}
      </div>
    </div>
  )
}

export default AppTv