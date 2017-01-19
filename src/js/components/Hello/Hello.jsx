import React, { Component } from 'react';
import logo from './assets/logo.svg';
import './styles.css';

class Hello extends Component {
  state = {
    message: 'Happy Coding!',
  };

  render() {
    const {
      message,
    } = this.state;

    return (
      <div className="Hello">
        <div className="Hello-header">
          <img src={logo} className="Hello-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="Hello-intro">
          {message}
        </p>
      </div>
    );
  }
}

export default Hello;
