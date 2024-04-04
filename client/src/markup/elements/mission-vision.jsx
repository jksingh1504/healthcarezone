import React, { Component } from "react";

class MissionVision extends Component {
  render() {
    return (
      <>
        <section className="section-sp1 service-wraper2">
          <div className="container">
            <div className="heading-bx text-center">
              <h2 className="title">Our Vision and Mission</h2>
            </div>
            <div className="row" style={{justifyContent:"center"}}>
              <div className="col-xl-3 col-sm-6 mb-30">
                <div className="feature-container feature-bx3">
                  <h2 style={{fontSize:"36px",textAlign:"center"}} className="counter text-secondary">Vision</h2>
                  <p>We strive to provide best quality and affordable health service to rural and urban people.</p>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 mb-30">
                <div className="feature-container feature-bx3">
                  <h2 style={{fontSize:"36px",textAlign:"center"}} className="counter text-secondary">Mission</h2>
                  <p>We create awareness about latest health-care trends in society.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default MissionVision;
