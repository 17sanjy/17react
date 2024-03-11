import React, { Component } from 'react'
import { store } from '../contextFunctional/store'

export default class ContextApiC extends Component {
    static contextType = store;
  render() {
    return (
      <div>
        <h1>Context API</h1>
        <p>Counter: {this.context.counter}</p>
      </div>
    )
  }
}
