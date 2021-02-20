
import React from "react";
import './App.css';
import TitleBar from "./components/TitleBar";
import InputForm from './components/InputForm';

class App extends React.Component{

  state = { budjet: 0 }

  getBudjetFunc = (budjetAmount) => {
    this.setState({budjet: budjetAmount})
  }

  render(){
    return(
      <div>
        <TitleBar/>
        <InputForm budjetAmountGetter={this.getBudjetFunc} />
        <h2>{this.state.budjet}</h2>
      </div>
    )
  }
  
  
}

export default App;
