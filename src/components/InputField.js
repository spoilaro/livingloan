import React from "react";

class InputField extends React.Component{
    render(){
        const inputstyle = {
            height: "8vh",
            width: "35vh",
            borderRadius: "5px",
            borderColor: "white",
            margin: "10px 0 10px 0",
            backgroundColor: "#e1eded",
            fontSize: "23px",
        }
        const labestyle = {
            fontSize: "23px",
            margin: "0 0 0 10px"
        }
        return(
            <div>
                <input placeholder="Current budjet" style = {inputstyle}></input>
                <label style = {labestyle}>€</label>
            </div>
        )
    }
}
export default InputField;