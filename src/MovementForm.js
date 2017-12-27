import React, { Component } from 'react';
import * as _ from 'lodash';


class MovementForm extends Component {
  
  constructor(props) {
    // Calling Base Class
    super(props);

    // Binding Methods to Current Context
    this.handleChange = this.handleChange.bind(this);
    this.setDepth = this.setDepth.bind(this);
    this.addMovement = this.addMovement.bind(this);
    
    // State Primary Variables
    this.state = {
      date: new Date(),
      description: '',
      amount: 0
    };

    // List of Movements
    this.state.movements =  [{id: new Date(), description: 'Went to McDonalds', amount: 675}];
    
  }

  // On Component Init
  componentDidMount() {
    this.timer = setInterval( () => this.tick(), 1000);
  }

  // On Component Destroy
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  handleChange(event) {
    let _state = this.setDepth({}, event.target.name, event.target.value);
    _state = _.merge(this.state, _state);
    this.setState(_state);
  }

  // Updates the current Time
  tick() {
    this.setState({
      date: new Date()
    });
  }

  // Add a Movement into the Movement List
  addMovement(e) {
    e.preventDefault();
    let movement = {
      id: new Date(),
      description: this.state.description,
      amount: this.state.amount
    };
    this.setState({
      movements: [...this.state.movements, movement]
    });
    this.setState({
      description: '',
      amount: 0
    });
  }

  removeMovement(id) {
    console.log(id);
    this.setState({
      movements: _.reject(this.state.movement, (x, i) => x.id === id)
    })
  }

  // Set values to nested and non nested variables
  setDepth(obj, path, value) {
    obj = obj || {};
    let tags = path.split(".").reverse();

    obj[tags.shift()] = value;

    for (let tag of tags) {
      let _obj = Object.assign({}, obj);
      obj = {[tag]: _obj};
    }
    return obj;
  }

  // Get values from nested objects
  getDepth(obj, path) {
    return path.split('.').reduce((value, tag) => {
      return value[tag];
    }, obj);
  }

  render() {
    return (
      <div>
        <h1 className="text-center">
          Movement Form 
          <br/>
          <small> It is {this.state.date.toLocaleTimeString()}. What did you do today?</small>
        </h1>
        <form>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input type="text" className="form-control" name="description" placeholder="Description" value={this.state.description} onChange={this.handleChange}/>
          </div>

          <div className="form-group">
            <label htmlFor="amount">Amount</label>
            <input type="number" className="form-control" name="amount" placeholder="Amount" value={this.state.amount} onChange={this.handleChange}/>
          </div>
          
          <button type="submit" className="btn btn-primary" onClick={this.addMovement}> Save </button> &nbsp;
          <button type="button" className="btn btn-default" onClick={this.toggleLanguage}> Clear </button>

        </form>

        <br/>

        <ul className="list-group">
        {this.state.movements.map((m, i) => 
            <li className="list-group-item" key={m.id}>
              I {m.description}, and it cost me {m.amount}
              <span className="badge" style={{cursor:'pointer'}} onClick={() => this.removeMovement(m.id)}>
                <i className="fa fa-times"></i>
              </span>
            </li>
        )}
        </ul>

      </div>
    );
  }
}

export default MovementForm;
