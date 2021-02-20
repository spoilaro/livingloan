import React from "react";

class MyButton extends React.Component{

    calc() {
            
    }

    render(){
        const buttonstyle = {
            color: "white",
            height: "8vh",
            width: "25vh",
            borderRadius: "5px",
            backgroundColor: "#8bccab",
            border: "none",
            fontSize: "23px",
            margin: "10px 0 10px 10%",
            postion: "absolute",
        }

        return(
        <button onClick={this.calc} style={buttonstyle} >Calculate</button>
        )
    }
}
export default MyButton;