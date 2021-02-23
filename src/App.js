
import React, { useState } from "react";
import './App.css';
import TitleBar from "./components/TitleBar";
import { surviveMaybe } from "./backend/Calculator"
import ResultWindow from "./components/ResultWindow";
import CalculateWindow from "./components/CalculateWindow"
import InfoWindow from "./components/InfoWindow"
import InfoWindowModal from "./components/InfoWindowModal"


function App () {

  const [showModal, setShowModal] = useState(false)
  const openModal = () => {
    setShowModal(prev => !prev)
  }


    return(
    <div className="Container">
      <TitleBar/>
      <ResultWindow/>
      <CalculateWindow parentCallback={openModal} />
      {showModal ? <InfoWindowModal parentCallback={openModal}/> : null}
    </div>
  )
}
  
  


export default App;
