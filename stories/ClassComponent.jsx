import React, { Component } from 'react';

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleClick() {
    this.setState({ count: this.state.count + 1 });
  }
  handleReset() {
    this.setState({ count: 0 });
  }
  

  render() {
    return (
      <div>
        <h2>Class Component</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleClick}>Increment</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

export default ClassComponent;
