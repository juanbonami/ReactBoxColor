import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      color:'blue',
      clickCounter: 0,
    }
  }


  render() {
    return (
      <div className="App">
        <h1>Box color change</h1>
        <div className="boxcolor">
          <p>CLICK ME!</p>
        </div>
      </div>
    )
  }
}

export default App;
