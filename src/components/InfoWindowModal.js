import React, { Component } from 'react'
import { AiOutlineInfoCircle } from 'react-icons/ai'

export class InfoWindowModal extends Component {
    render() {

        const backgroundStyle = {
            //height: "50vh",
            width: "80%",
            backgroundColor: "#EE6565",
            position: "absolute",
            marginLeft: "10%",
            marginTop: "40%",
            display: "flex",
            flexFlow: "column",
            borderRadius: "10px",
            border: "solid #FAC6C6 3px",
            padding: "3vh",
        }
        const InfoLogoStyle = {
            fontSize: "2em",
            backgroundColor: "#EE6565",
            color: "white",
            marginLeft: "33%",
            marginTop: "2vh"
        }
        const TextStyle = {
            color: "white",
            backgroundColor: "#EE6565",
            textAlign: "center",
            marginTop: "3vh",
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
            marginTop: "3vh",
            marginLeft: "24%"

        }

        return (
            
            <div style={backgroundStyle}>
                {/* <AiOutlineInfoCircle style={InfoLogoStyle}/> */}
                <h1 style={InfoLogoStyle} >Ohje</h1>
                <p style={TextStyle}> Tällä netti sovelluksella voit laskea jäljellä olevan
                opintolainan määrän loppu kuukaudelle. Sovellus olettaa, että opinto lainasi suuruus
                on noin 655€ per kuukausi. Syötä koko jäljellä olevan opintolainan määrä ja laske 
                oletko miinuksella vai plussalla.
                </p>
                <input style={buttonStyle} onClick={this.props.parentCloseModal} type="submit" value="OK" ></input>
            </div>
        )
    }
}

export default InfoWindowModal