import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MovementForm from './MovementForm.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">

          <MovementForm name="Andrés" />

        </div>
      </div>
    );
  }
}

export default App;
