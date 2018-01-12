import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import NavBar from './NavBar'
import FuelContainer from './Fuel'

class App extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <FuelContainer />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
