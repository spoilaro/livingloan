
import React, { useState, useEffect } from "react";
import './App.css';
import TitleBar from "./components/TitleBar";
import ResultWindow from "./components/ResultWindow";
import CalculateWindow from "./components/CalculateWindow"
import InfoWindowModal from "./components/InfoWindowModal"



class App extends React.Component {

  constructor(props){
    super(props)
    this.openModal = this.openModal.bind(this)
    this.getClick = this.getClick.bind(this)
    this.state = {
      show: false,
      budget: 0
    }

  }

  openModal(){
    this.setState(state => ({
      show: !state.show
    }))
  }

  async getClick(event, amount){
    event.preventDefault()
    const url = "https://api.randomuser.me/"
    const res = await fetch(url)
    const data = await res.json()
    
    this.setState({
      budget: data.results[0].gender
    })
  }

  getBudget(amount){
    this.getClick()
  }
  
  render() {
    return(
      <div className="Container">
        <TitleBar/>
        <ResultWindow result={this.state.budget}/>
        <CalculateWindow getResult={this.getMyData} parentOpenModal={this.openModal} getClick={this.getClick}/>
        {this.state.show ? <InfoWindowModal parentCloseModal={this.openModal}/> : null}
      </div>
    )
  }
    
}
  
  


export default App;
