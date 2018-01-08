import React, {Component} from 'react';

class FuelForm extends Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.submit = this.submit.bind(this);
    }

    submit() {
    }

    render = () => (
        <form>
            <h1>Did you Fill Up the Car?</h1>
            
            <div className="form-group">
                <label htmlFor="description">When?</label>
                <input type="date" className="form-control" name="createdDate" value={this.state.createdDate} onChange={this.handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="description">Description</label>
                <input type="text" className="form-control" name="description" placeholder="Description" value={this.state.description} onChange={this.handleChange} />
            </div>

            <div className="form-group">
                <label htmlFor="amount">Gas Price</label>
                <input type="number" className="form-control" name="amount" placeholder="Amount" value={this.state.amount} onChange={this.handleChange} />
            </div>
            

            <button type="submit" className="btn btn-primary" onClick={this.addMovement}> Save </button> &nbsp;
            <button type="button" className="btn btn-default" onClick={this.toggleLanguage}> Clear </button>

        </form>
    )
}

export default FuelForm;