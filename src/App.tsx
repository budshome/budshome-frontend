import React, { Component } from 'react';
import logo from './images/logo.svg';
import './App.css';

import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            <img src={logo} className="App-logo" alt="logo" />
          </p>
          <PrimaryButton>BudsHome-cms</PrimaryButton>
        </header>
      </div>
    );
  }
}

export default App;
