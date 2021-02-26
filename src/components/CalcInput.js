import React, { Component } from 'react'

export class CalcInput extends Component {
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.getNewBudget = this.getNewBudget.bind(this)
        this.state = {
            inputted_budget: ""
        }
    }

    handleChange(event){
        this.setState({
            inputted_budget: event.target.value
        })
    }

    getNewBudget(){
        this.props.getBudget(this.state.inputted_budget)
    }

    render() {


        const formStyle = {
            backgroundColor: "#EE6565",
            display: "flex",
            flexFlow: "column",
            alignItems: "center",
        }

        const buttonStyle = {
            backgroundColor: "white",
            height: "7vh",
            width: "29vh",
            color: "#EE6565",
            border: "none",
            borderRadius: "15px",
            fontSize: "1.8rem",
            marginTop: "10%"
        }

        const inputStyle = {
            width: "38vh",
            height: "10vh",
            backgroundColor: "white",
            border: "none",
            borderRadius: "10px",
            color: "#EE6565",
            marginTop: "10%",
            fontSize: "2rem",
            padding: "5%"
        }

        const labelStyle = {
            backgroundColor: "#EE6565",
            color: "white",
            fontSize: "2.5rem",
            marginTop: "15%"
        }


        return (
            <div>
                <form style={formStyle}>
                    <h2 style={labelStyle}>Uusi saldo:</h2>
                    <input style={inputStyle} value={this.state.inputted_budget} onChange={this.handleChange} type="text" placeholder="00,00 €"></input>
                    <input onClick={this.getNewBudget} style={buttonStyle} type="button" value="Laske"></input>
                </form>
            </div>
        )
    }
}

export default CalcInput