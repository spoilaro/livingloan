import React from "react"
import MyButton from "./MyButton"
import InputField from "./InputField"

class MainWrapper extends React.Component{
    render(){
        const wrapperstyle = {
            margin: "30% 0 0 18%"
        }
        return(
            <div style={wrapperstyle}>
                <InputField/>
                <MyButton/>
            </div>
        )
    }
}
export default MainWrapper;