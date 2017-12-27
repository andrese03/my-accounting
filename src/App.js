import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MovementForm from './MovementForm.js'

class App extends Component {
  render() {
    return (
      <div class="container-fluid">
        <div class="row">
          <div className="col-sm-6 col-sm-offset-3">
            <MovementForm />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
