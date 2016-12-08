import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Releases from './components/node-releases'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Average NodeJS minor update</h2>
        </div>
        <p className="App-intro">
          <p>Remember 1major.0minor.0patch</p>
          <Releases />
        </p>
      </div>
    );
  }
}

export default App;
