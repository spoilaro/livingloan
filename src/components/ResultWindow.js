import React, { Component } from 'react'

export class ResultWindow extends Component {
    render() {

        const contentStyle = {
            backgroundColor: "white",
            position: "absolute",
            width: "100%",
            height: "25vh",
            color: "#EE6565",
            fontSize: "24px"
        } 
        const backgroundStyle = {
            position: "relative",
        }

        return (
            <div style={backgroundStyle}>
                <h2 style={contentStyle} >± 00,00 €</h2>
            </div>
        )
    }
}

export default ResultWindow
