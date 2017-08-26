import React, { Component } from 'react';
import './style.css';

class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button className={this.props.color} onClick={this.props.event}>
        {this.props.value}
      </button>
    );
  }
}

export default Button;
