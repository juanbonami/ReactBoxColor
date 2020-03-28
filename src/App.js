// import React library
import React, { Component } from 'react';
import './App.css';

// create a class called App that extends the class Component from the React library
export default class App extends Component {
  // create constructor sets state
  constructor(props) {
    super(props);

    //state object
    this.state = {
      color:'blue',
      even: 'No its a whole number',
      clickCounter: 0
    }
  }

  // creates arrow function called changeColors
  changeColor = () => {
    // checks if ckickerCount is even
    if (this.state.clickCounter%2===0) {
      // changing the state by using setState method
      this.setState({
        color: 'orange',
        even: false,
        clickCounter: this.state.clickCounter+1
      })
    }else { // else if it's not even execute else block
      this.setState({
        color: 'blue',
        even: true,
        clickCounter: this.state.clickCounter+1
      })
    }
    // logs to console 
    console.log("Click counter===>", this.state.clickCounter)
  }

  // render method and return renders block 
  render() {
    return (
      <div className="App">
        <h1>Box color change</h1>
        {/* boxcolor sets backgroundcolor and onClick calls the changeColor function */}
        <div className="boxcolor" style={{backgroundColor: this.state.color}} onClick={this.changeColor} >
          <p>CLICK ME!</p>
        </div>
      </div>
    )
  }
}


