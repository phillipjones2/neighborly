import React, { Component } from 'react'
import { Link } from 'react-router'
import NavLink from "./NavLink"

export default class Nav extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="nav">
        <img src="./assets/user.svg"></img>
        <Link to ="/"> <h1>neighbor<span id="ly">.ly</span></h1></Link>
        <img src="./assets/settings.svg"></img>
      </div>
    )
  }
}
