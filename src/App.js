
import React, { useState, useEffect, useRef } from "react";
import './App.css';
import TitleBar from "./components/TitleBar";
import ResultWindow from "./components/ResultWindow";
import CalculateWindow from "./components/CalculateWindow"
import InfoWindowModal from "./components/InfoWindowModal"

import { surviveMaybe } from "./backend/Calculator"



const App = () => {


  const [show, setShow] = useState(false)
  const showHide = () => {
    setShow(show => !show)
  }

  const [budget, setBudget] = useState(0)
  const [result, setResult] = useState(3)

   useEffect( () => {
    // const url = "https://api.randomuser.me/"; //TODO create api link from budget
    // const res = await fetch(url);
    // const data = await res.json()
    // const item = data.results[0]  
    // console.log(item.gender); //TODO set result to be the answer from api
    var result = surviveMaybe(budget)
    setResult(result);


  }, [budget])
  
    return(
      <div className="Container">
        <TitleBar/>
        <ResultWindow budget={result} />
        <CalculateWindow parentOpenModal={showHide} getBudget={setBudget}/>
        {show ? <InfoWindowModal parentCloseModal={showHide}/> : null}
      </div>
    )
    
}
  
  


export default App;
