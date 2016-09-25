import React, { Component } from 'react'
import { Link } from 'react-router'
import Footer from "./Footer"


export default class Streams extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="streams">
        <div id="streamBox">
          <ul>
            <Link to="/contract"><li>Rent Car: 1 - 3pm</li></Link>
            <li>Ride: now</li>
            <li>Carpool: m - f 9am</li>
            <li>Rent bike: 10 - 12pm</li>
            <li>Rent Motorcycle: 3 - 6pm</li>
            <li>Rent Car: 6 - 9pm</li>
            <li>Carpool: m - f 9am</li>
            <li>Rent bike: 10 - 12pm</li>
            <li>Ride: now</li>
            <li>Carpool: sat 7am</li>
            <li>Rent bike: 10 - 12pm</li>
            <li>Rent Motorcycle: 3 - 6pm</li>
            <li>Rent Car: 6 - 9pm</li>
            <li>Ride: now</li>
            <li>Carpool: m - f 9am</li>
            <li>Blockchain + sharing = neighbor.ly</li>
          </ul>
        </div>
        <div id="filterDiv">
          <form>
            <h3>Filter</h3>
            <input type="checkbox" name="chooseone" value="RentCar"/>
              <label htmlFor="RentCar">Rent Car</label><br/>
            <input type="checkbox" name="chooseone" value="RentMotocycle"/>
              <label htmlFor="RentCar">Rent Motorcycle</label><br/>
            <input type="checkbox" name="chooseone" value="RentBike"/>
              <label htmlFor="RentCar">Rent Bike</label><br/>
            <input type="checkbox" name="chooseone" value="RentBike"/>
              <label htmlFor="RentCar">Ride</label><br/>
            <input type="checkbox" name="chooseone" value="RentBike"/>
              <label htmlFor="RentCar">Carpool</label>
          </form>
        </div>
        <Footer/>
      </div>
    )
  }
}
