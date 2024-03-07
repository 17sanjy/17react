import React, { Component } from 'react'

export default class ClassComp extends Component {
    constructor(){
        super();
        this.state = {
            counter: 10
        }
    }

    increment = () => {
        // this.setState({
        //     counter: this.state.counter + 1
        // })

        this.setState((prevValue) => ({
            ...prevValue,
            counter: prevValue.counter + 1 
        }))
    }

    decrement = () => {
        this.setState((prevValue) => ({
            ...prevValue,
            counter: prevValue.counter - 1
        }))
    }
  render() {
    return (
      <div>
        <p>Counter: {this.state.counter}</p>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    )
  }
}
