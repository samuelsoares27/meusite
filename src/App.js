import React, { Component } from "react";

export default class App extends Component{

    constructor(props) {
        super(props);
        this.state = {
            hora: '00:00:00'
        };
    }

    render() {
        return (
            <div>
                <h1>Meu projeto { this.state.hora }</h1>
            </div>
        )
    }
}