import React, { Component } from 'react'
import Calculator from './components/Calculator'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Calculator />
        <footer>
          <h2>
            Calculator
          </h2>
        </footer>
      </div>
    )
  }
}
