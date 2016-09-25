import React, { Component } from 'react'
import Footer from "./Footer"

export default class Status extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div  className="status">
        <img src="./assets/checked.svg"></img>
        <h1>Approved</h1>
        <p>Rent date: Sunday, September 25th, 2016</p>
        <p>Pick-up: 1pm</p>
        <p>Drop-off: 3pm</p>
        <Footer />
      </div>
    )
  }
}
