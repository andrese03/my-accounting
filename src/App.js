import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import logo from './logo.svg';
import './App.css';
import MovementForm from './MovementForm.js'

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <MovementForm />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
