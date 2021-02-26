import React, { Component } from 'react'
import CalcInput from "./CalcInput"
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { IconContext } from 'react-icons/lib'

export class CalculateWindow extends Component {
    constructor(props){
        super(props)
    }

    

    render() {

        const WindowStyle = {
            backgroundColor: "#EE6565",
            height: "100%",
        }
        const InfoLogoStyle = {
            fontSize: "60px",
            backgroundColor: "#EE6565",
            color: "white",
            marginLeft: "44vw",
            marginTop: "10%"
        }

        return (
            <>
                <div className="Window" style={WindowStyle}>
                    <CalcInput getBudget={this.props.getBudget} />
                    <AiOutlineInfoCircle onClick={this.props.parentOpenModal} style={InfoLogoStyle}/>
                </div>
            </>
        )
    }
}

export default CalculateWindow
