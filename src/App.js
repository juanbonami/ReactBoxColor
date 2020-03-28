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
    if (this.state.clickCounter%2===0) {
      this.setState({
        color: 'orange',
        clickCounter: this.state.clickCounter+1
      })
    }else {
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
        <div className="boxcolor" style={{backgroundColor: this.state.color}} onClick={this.changeColor} >
          <p>CLICK ME!</p>
        </div>
      </div>
    )
  }
}


