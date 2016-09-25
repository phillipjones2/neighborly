import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Footer extends Component {
  constructor(props) {
    super(props)
    this.toggleFilter = () => {
      document.getElementById("filterDiv").classList.toggle("inScreen")
    }
  }


  render() {
    return (
      <div className="footer">
        <Link to="/"><img id="teamsImg" src="./assets/team.svg"></img></Link>
        <img onClick={this.toggleFilter} id="filter" src="./assets/settings2.svg"></img>
      </div>
    )
  }
}
