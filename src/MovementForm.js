import React, { Component } from 'react';

class MovementForm extends Component {
  
  constructor(props) {
    // Calling Base Class
    super(props);

    // Binding Methods to Current Context
    this.toggleLanguage = this.toggleLanguage.bind(this);
    
    // State Primary Variables
    this.state = {
      header: 'Hola',
      date: new Date(),
      movements: ([{id: 1, description: 'Went to McDonalds', amount: 675}]).map((m) => {
        return <p key={m.id}> I {m.description} and paid {m.amount} </p>
      })
    }
  }

  componentDidMount() {
    this.timer = setInterval( () => this.tick(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  addMovement(e) {
    e.preventDefault();
    alert('Yai!');
  }

  toggleLanguage(e) {
    this.setState((prevState, props) => ({
      header: (prevState.header === 'Hello') ? 'Hola' : 'Hello'
    }));
  }

  render() {
    return (
      <div>
        <h1> {this.state.header} {this.props.name}</h1>
        <h2> It is {this.state.date.toLocaleTimeString()}. What did you do today?</h2>
        <form>
          <input type="text" name="description" id="description" placeholder="Description"/>
          <br/>
          <input type="number" name="amount" id="amount" placeholder="Amount"/>
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
