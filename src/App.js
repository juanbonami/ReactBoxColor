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

  changeColor = () => {
    if (this.state.color === 'blue') {
      this.setState({
        color: 'orange',
        clickCounter: this.state.clickCounter+1
      })
    }else if (this.state.color === 'orange') {
      this.setState({
        color: 'blue',
        clickCounter: this.state.clickCounter+1
      })
    }
  }


  render() {
    return (
      <div className="App">
        <h1>Box color change</h1>
        <div className="boxcolor" style={{backgroundColor: this.state.color}}>
          <p>CLICK ME!</p>
        </div>
      </div>
    )
  }
}


