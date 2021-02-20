import React from "react";

class TitleBar extends React.Component{

    render(){
        const titleStyle = {
            color: "white",
            backgroundColor: "#8bccab",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            height: "12vh",
            fontSize: "40px",
            borderRadius: "5px"
        }
        return (
            <h1 style={titleStyle}>LivingLoan</h1>
        )
    }
}
export default TitleBar;
