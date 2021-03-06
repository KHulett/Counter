import React, {Component} from 'react';

class Counter extends Component {
  constructor () {
    super();
    this.state = {
      counter: 0
    }
  }


increment = () => {
  //This is where we're going to implement our state change!
  if (this.state.counter < 20) {
  this.setState({    
     counter: this.state.counter +1
    });
  }
}

decrement = () => {
  if (this.state.counter > 0) {
    this.setState({
      counter: this.state.counter -1
    });
  }
}

clear = () => {
  this.setState({
    counter: 0
  });
}

  render() {
    console.log("This is line 13 representating state", this.state.counter);
    return(
      <div className="container">
        <div className="navbar">Counter.js</div>
        <div className="counter">
          <h1>{this.state.counter}</h1>
          <button type="button" onClick={this.increment}>Increment</button>
          <button type="button" onClick={this.decrement}>Decrement</button>
          <button type="button" onClick={this.clear}>Clear</button>
        </div>
      </div>
    )
  }
}

export default Counter;