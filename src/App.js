import React, { Component } from 'react';
import { createStore } from 'redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import reducers from './reducers';
import NavBar from './NavBar'
import FuelContainer from './Fuel'

const store = createStore(reducers);

store.dispatch({type: ''});


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
