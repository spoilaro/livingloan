import React, { Component } from 'react'

export class CalcInput extends Component {
    render() {

        const val = "00,00 €"

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
            fontSize: "1.8rem"
        }

        const inputStyle = {
            width: "38vh",
            height: "8vh",
            backgroundColor: "white",
            border: "none",
            borderRadius: "15px",
            color: "#EE6565",
            marginTop: "10%"
        }

        const labelStyle = {
            backgroundColor: "#EE6565",
            color: "white",
        }

        return (
            <div>
                <form style={formStyle}>
                    <h2 style={labelStyle}>Uusi saldo:</h2>
                    <input style={inputStyle} type="text" value={val}></input>
                    <input style={buttonStyle} type="submit" value="Laske"></input>
                </form>
            </div>
        )
    }
}

export default CalcInput