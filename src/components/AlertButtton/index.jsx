import React, { Component } from "react";

class Button extends Component {

    render() {
        return <button onClick={() => alert(`A label desse botão é ${this.props.label}`)}>{this.props.label}</button>
    }
}

export default Button;