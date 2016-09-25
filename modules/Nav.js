import React, { Component } from 'react'
import NavLink from "./NavLink"

export default class Nav extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="nav">
        <img src="./assets/user.svg"></img>
        <h1>neighbor<span id="ly">.ly</span></h1>
        <img src="./assets/settings.svg"></img>
      </div>
    )
  }
}
