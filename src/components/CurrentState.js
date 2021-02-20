import React, { Component } from 'react'

export class CurrentState extends Component {
    render() {
        const currentstyle = {
            color: "#8bccab",
            margin: "10% 0 0 24%"
        }
        return (
            <div className="statecontainer" style={currentstyle}>
                <h2>Current State is:</h2>
                <h2>{this.props.budget} €</h2>
            </div>
        )
    }
}

export default CurrentState
