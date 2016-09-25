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
        <p>Rent date: Sunday, Sept. 25th, 2016</p>
        <p>Pick-up: 1pm</p>
        <p>Drop-off: 3pm</p>
        <div id="calendarImg">
          <img src="./assets/Google_Calendar.png"></img>
          <img src="./assets/ical.png"></img>
        </div>
        <Footer />
      </div>
    )
  }
}
