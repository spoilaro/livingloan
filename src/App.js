
import React from "react";
import './App.css';
import TitleBar from "./components/TitleBar";
import InputForm from './components/InputForm';
import { surviveMaybe } from "./backend/Calculator"
import CurrentState from "./components/CurrentState"

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
        <InputForm budjetAmountGetter={this.getBudjetFunc} />
        <CurrentState budget={this.state.living} />
      </div>
    )
  }
  
  
}

export default App;
