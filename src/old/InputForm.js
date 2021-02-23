import React from "react";

class InputForm extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            amount: 0
        }
    }

    updateAmount = (event) => {
        this.setState({
            amount: event.target.value
        })
    }

    sendAmount = (event) => {
        this.props.budjetAmountGetter(this.state.amount)
        event.preventDefault();
    }

    render(){

        const inputstyle = {
            height: "8vh",
            width: "35vh",
            borderRadius: "5px",
            borderColor: "white",
            margin: "15% 0 10px 18%",
            backgroundColor: "#e1eded",
            fontSize: "23px",
        }
        const buttonstyle = {
            color: "white",
            height: "8vh",
            width: "25vh",
            borderRadius: "5px",
            backgroundColor: "#8bccab",
            border: "none",
            fontSize: "23px",
            margin: "10px 0 10px 28%",
            postion: "absolute",
        }

        return(
        <form onSubmit={this.sendAmount}>
            <input type="number" name="amount" value={this.state.amount} onChange={this.updateAmount} style={inputstyle}></input>
            <input type="submit" value="Calculate" style={buttonstyle}></input>
        </form>
        )
    }
}

export default InputForm;
