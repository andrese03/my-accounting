import React, { Component } from 'react';
import * as _ from 'lodash';
import FuelForm from './FuelForm.js'


class FuelContainer extends Component {

    constructor(props) {
        super(props);
    }

    render = () => (
        <div>
            <h1>I'm the fuel Container!</h1>
            <FuelForm/>
        </div>
    )

}

export default FuelContainer