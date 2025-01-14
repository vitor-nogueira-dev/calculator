import React, { Component } from 'react'
import Calculator from './components/Calculator'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="app-title">
          Calculator
        </h1>
        <Calculator />
      </div>
    )
  }
}
