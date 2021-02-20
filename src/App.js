
import React from "react";
import './App.css';
import TitleBar from "./components/TitleBar";
import InputForm from './components/InputForm';
import { surviveMaybe } from "./backend/Calculator"

class App extends React.Component{

  state = {
    budjet: 0,
    living: "",
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
        <h2>{this.state.living}</h2>
      </div>
    )
  }
  
  
}

export default App;
