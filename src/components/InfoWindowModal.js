import React, { Component } from 'react'
import { AiOutlineInfoCircle } from 'react-icons/ai'

export class InfoWindowModal extends Component {
    render() {

        const backgroundStyle = {
            height: "50vh",
            width: "80%",
            backgroundColor: "#EE6565",
            position: "absolute",
            marginLeft: "10%",
            marginTop: "40%",
            display: "flex",
            flexFlow: "column",
            borderRadius: "10px",
            border: "solid #FAC6C6 3px",
            padding: "5%",
        }
        const InfoLogoStyle = {
            fontSize: "3em",
            backgroundColor: "#EE6565",
            color: "white",
            marginLeft: "37%",
            marginTop: "10%"
        }
        const TextStyle = {
            color: "white",
            backgroundColor: "#EE6565",
            textAlign: "center",
            marginTop: "10%",
            fontSize: "1"
        }
        const buttonStyle = {
            backgroundColor: "white",
            height: "10%",
            width: "50%",
            color: "#EE6565",
            border: "none",
            borderRadius: "15px",
            fontSize: "1.2em",
            marginTop: "10%",
            marginLeft: "24%"

        }

        return (
            
            <div style={backgroundStyle}>
                <AiOutlineInfoCircle style={InfoLogoStyle}/>
                <p style={TextStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Vestibulum in dictum enim. Maecenas feugiat viverra ex. ornare. 
                    Nulla quis bibendum erat.
                </p>
                <input style={buttonStyle} onClick={this.props.parentCallback} type="submit" value="OK" ></input>
            </div>
        )
    }
}

export default InfoWindowModal