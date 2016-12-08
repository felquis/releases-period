import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import releases from './lib/releases'

class App extends Component {
  render() {
    releases().then((result) => {
      console.log(result.diffInDays, result.releases.length, result.diffInDays / result.releases.length)
    })

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
