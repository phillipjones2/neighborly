import React, { Component } from 'react'
import { Link } from 'react-router'
import Footer from './Footer'

export default class Approval extends Component {
  constructor(props) {
    super(props)
    this.state = {
      image: "./assets/userWait.svg"
    }
  }
  componentDidMount(){
    setTimeout(function () {
      this.setState({image:"./assets/userYes.svg"},() => {
        alert('hahl')
      })
    }, 2000);
  }
  render() {
    return (
      <div  className="approval">
        <img src="./assets/hourglass1.svg"></img>
        <h1>Pending Approval</h1>
        <div id="userShake">
          <img className="userApproval" src="./assets/user.svg"></img>
          <img className="userApproval" src={this.state.image}></img>
        </div>
        <div id="nameShake">
          <p>Jon</p>
          <p>Tarzan</p>
        </div>
        <img id="handShake" src="./assets/agreement.svg"></img>
        <Footer/>
      </div>
    )
  }
}
