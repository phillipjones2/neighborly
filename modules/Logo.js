import React from 'react'

export default React.createClass({

  render() {
    return (
      <div className="logo">
        <h2>Powered by <span className="bold">handshakes</span>.</h2>
        {/* <img src="./assets/team.svg"></img> */}
        <div id="metricImg">
          <img src="./assets/metrics.png"></img>
          <img src="./assets/images.jpg"></img>
          <img src="./assets/SocialMediaMarketingIcon-10.png"></img>
          <img src="./assets/data-analysis.png"></img>
        </div>
      </div>
    )
  }
})
