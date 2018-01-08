import React, { Component } from 'react';
import FuelForm from './FuelForm.js'
import FuelHistory from './FuelHistory.js';
import moment from 'moment';

// Generate Fuel Refill Records
const mockData = new Array(5).fill({}).map((fr, i) => (
    {
        id: ++i,
        refillDate: moment().add(++i*10, 'd').toDate(),
        gasStation: {id: 1, description: 'Tropigas'},
        gallons: Math.floor(Math.random() * 14) + 1,
        gasPrice: Math.random() * (125 - 115) + 115,
        endDate: null,
        distance: null, // Math.random() * (136 - 170) + 170
    }
));

class FuelContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "Fuel History Log",
            data: mockData
        };
    }

    render = () => (
        <div>
            <FuelForm/>

            <br/>

            <FuelHistory {...this.state}/>
        </div>
    )

}

export default FuelContainer