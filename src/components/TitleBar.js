import React from "react";

class TitleBar extends React.Component{

    render(){
        const titleStyle = {
            color: "white",
            backgroundColor: "#EE6565",
            display: "flex",
            alignItems: "center",
            height: "15vh",
            fontSize: "35px",
            padding: "0 0 0 4%"
        }
        return (
            <h1 style={titleStyle}>LivingLoan</h1>
        )
    }
}
export default TitleBar;
