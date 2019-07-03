import React, {Component} from 'react';

class Counter extends Component (
  constructor () {
    super();
    this.state = {
      Counter: 0,
    }
  }


  render() {
    console.log(this.state.Counter);
    return(
      <div></div>
    )
  }
)

export default Counter;