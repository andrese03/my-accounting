import React, { Component } from 'react';
import * as _ from 'lodash';
import 'bootstrap/dist/css/bootstrap.min.css';

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
    this.state.movements =  [{id: 1, description: 'Went to McDonalds', amount: 675}];
    
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
          <div class="form-group">
            <label for="description">Description</label>
            <input type="text" className="form-control" name="description" placeholder="Description" value={this.state.description} onChange={this.handleChange}/>
          </div>

          <div class="form-group">
            <label for="amount">Amount</label>
            <input type="number" className="form-control" name="amount" placeholder="Amount" value={this.state.amount} onChange={this.handleChange}/>
          </div>
          
          <button type="submit" className="btn btn-primary" onClick={this.addMovement}> Save </button> &nbsp;
          <button type="button" className="btn btn-default" onClick={this.toggleLanguage}> Clear </button>

        </form>

        <br/>

        <ul>
        {this.state.movements.map((m, i) => {
          return <li key={m.id}> I {m.description} and paid {m.amount} </li>
        })}
        </ul>

      </div>
    );
  }
}

export default MovementForm;
