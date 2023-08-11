import React, { Component } from "react";

class Button extends Component {
    alertLabel = () => {
        alert(`A label desse botão é ${this.props.label}`);
    }

    render() {
        return <button onClick={this.alertLabel}>{this.props.label}</button>
    }
}

export default Button;