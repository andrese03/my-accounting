import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import numeral from 'numeraljs';

class FuelHistory extends Component {
    
    constructor(props) {
        super(props);
        this.state = Object.assign({}, props);
    }

    formatDate(date) {
        return moment(date).format(moment.HTML5_FMT.DATE);
    }

    formatCurrency(number) {
        return numeral(number).format('$0,0.00');
    }

    render = () => (
        <div>
            <h3>{this.state.title}</h3>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Refill Date</th>
                        <th scope="col">Gas Station</th>
                        <th scope="col">Gallons</th>
                        <th scope="col">Gas Price</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.data.map((fr, i) => (
                        <tr key={fr.id}>
                            <th scope="row">{fr.id}</th>
                            <td>{this.formatDate(fr.refillDate)}</td>
                            <td>{fr.gasStation.description}</td>
                            <td>{fr.gallons}</td>
                            <td>{this.formatCurrency(fr.gasPrice)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
    
}

FuelHistory.propTypes = {
    title: PropTypes.string,
    data: PropTypes.array.isRequired
}

FuelHistory.defaultProps = {
    title: 'Fuel History'
}

export default FuelHistory;