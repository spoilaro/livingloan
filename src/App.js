
import React from "react";
import './App.css';
import TitleBar from "./components/TitleBar";
import { surviveMaybe } from "./backend/Calculator"
import ResultWindow from "./components/ResultWindow";
import CalculateWindow from "./components/CalculateWindow"

class App extends React.Component{

  state = {
    budjet: 0,
    living: "No budget given!",
  }

  getBudjetFunc = (budjetAmount) => {
    this.setState({budjet: budjetAmount});
    this.setState({living: surviveMaybe(this.state.budjet)})
  }

  render(){
    
    return(
      <div className="Container">
        <TitleBar/>
        <ResultWindow/>
        <CalculateWindow/>
      </div>
    )
  }
  
  
}

export default App;
