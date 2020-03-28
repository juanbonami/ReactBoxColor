import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color:'blue',
      even: 'No its a whole number',
      clickCounter: 0
    }
  }

  changeColor = () => {
    if (this.state.clickCounter%2===0) {
      this.setState({
        color: 'orange',
        even: false,
        clickCounter: this.state.clickCounter+1
      })
    }else {
      this.setState({
        color: 'blue',
        even: true,
        clickCounter: this.state.clickCounter+1
      })
    }
    console.log("Click counter===>", this.state.clickCounter)
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


