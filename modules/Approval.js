import React, { Component } from 'react'
import { browserHistory, Link } from 'react-router'
import Footer from './Footer'

export default class Approval extends Component {
  constructor(props) {
    super(props)
    this.state = {
      image: "./assets/userWait.svg"
    }
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        image: "./assets/userYes.svg"
      })
    }, 10000);

    setTimeout(() => {
      browserHistory.push('/status')
    }, 15000)
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
          <p>Phillip</p>
          <p>Tarzan</p>
        </div>
        <img id="handShake" src="./assets/agreement.svg"></img>
        <Footer/>
      </div>
    )
  }
}
