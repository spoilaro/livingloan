import React, { Component } from 'react'
import CalcInput from "./CalcInput"

export class CalculateWindow extends Component {
    render() {

        const WindowStyle = {
            backgroundColor: "#EE6565",
            height: "100%",
        }

        return (
            <>
                <div className="Window" style={WindowStyle}>
                    <CalcInput/>
                </div>
            </>
        )
    }
}

export default CalculateWindow
