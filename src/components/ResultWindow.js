import React, { Component } from 'react';
import styles from "./ResultWindow.js";

class ResultWindow extends Component {
    render() {

        const contentStyle = {
            position: "absolute",
            color: "#EE6565",
            fontSize: "3.1rem",
            position: "absolute",
            backgroundColor: "white",
            fontWeight: "300"
        } 
        const backgroundStyle = {
            position: "relative",
            height: "25vh",
            width: "100%",
            backgroundColor: "white",
            display: "flex",
            alignItems: "flex-end",
            padding: "5%"
        }

        return (
            <div>
                <div className="ResultContainer" style={backgroundStyle}>
                    <h2 className="Result" style={contentStyle} >± 00,00 €</h2>
                </div>
            </div>
        )
    }
}

export default ResultWindow
