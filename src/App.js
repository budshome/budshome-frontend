import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            A CMS(Contest Management System) written in Rust, implemented by actix-web, mongodb, and react.
          </p>
          <a
            className="App-link"
            href="https://budshome.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            BudsHome.com
          </a>
        </header>
      </div>
    );
  }
}

export default App;
