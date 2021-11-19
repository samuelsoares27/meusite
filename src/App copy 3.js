import React, { Component } from "react";


export default class App extends Component{

    constructor(props) {
        super(props);
        this.state = {
            nome: 'Samuel',
            contador: 0
        }
        this.aumentar = this.aumentar.bind(this);
        this.subtrair = this.subtrair.bind(this);
    }

    aumentar() {
        let state = this.state;
        state.contador++;
        this.setState(state);
    }
    subtrair() {
        let state = this.state;
        if (state.contador === 0) {
            alert("Não é possível número negativo");
            return;
        }
        state.contador--;
        this.setState(state);
    }

    render() {
        return (
            
            <div>
                <h2>Contador</h2>
                <button onClick={this.subtrair}>-</button>
                {this.state.contador}
                <button onClick={this.aumentar}>+</button>            
            </div>

        )
    }
}