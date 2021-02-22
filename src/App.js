
import React from "react";
import './App.css';
import TitleBar from "./components/TitleBar";
import InputForm from './components/InputForm';
import { surviveMaybe } from "./backend/Calculator"
import ResultWindow from "./components/ResultWindow";

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
      <div>
        <TitleBar/>
        <ResultWindow/>
      </div>
    )
  }
  
  
}

export default App;
