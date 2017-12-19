import React, { Component } from 'react';

class MovementForm extends Component {
  
  constructor(props) {
    // Calling Base Class
    super(props);

    // Binding Methods to Current Context
    this.handleChange = this.handleChange.bind(this);
    this.setDepth = this.setDepth.bind(this);
    
    // State Primary Variables
    this.state = {};

    // Current Date (Updates automatically)
    this.state.date = new Date();

    this.movement = {
      description: '',
      amount: 0
    };

    // List of Movements
    this.state.movements =  ([{id: 1, description: 'Went to McDonalds', amount: 675}]).map((m) => {
      return <p key={m.id}> I {m.description} and paid {m.amount} </p>
    });
    
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
    this.setState(_state);
    console.log(this.state);
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
    alert('Yai!');
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

  render() {
    return (
      <div>
        <h1> {this.state.header} {this.props.name}</h1>
        <h2> It is {this.state.date.toLocaleTimeString()}. What did you do today?</h2>
        <form>
          <input type="text" id="description" name="movement.description" placeholder="Description" onChange={this.handleChange}/>
          <br/>
          <input type="number" id="amount" name="movement.amount" placeholder="Amount" onChange={this.handleChange}/>
          <br/>
          <button type="submit" onClick={this.addMovement}> Save </button> &nbsp;
          <button type="button" onClick={this.toggleLanguage}> Change Language </button>
        </form>

        {this.state.movements}

      </div>
    );
  }
}

export default MovementForm;
