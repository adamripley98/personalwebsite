import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

class About extends Component {
  render() {
    return (
      <div className="container hero">
        <div className="space-2 hidden-md-down" />
        <div className="row">
          <div className="col-12 col-md-9 offset-md-1 col-lg-7 offset-lg-1">
            <div className="pad-1 hero-text-wrapper">
              <Fade left>
                <p className="hero-text">
                  This is the
                </p>
              </Fade>
              <Fade right>
                <p className="hero-text">
                  about component.
                </p>
              </Fade>
            </div>
          </div>
        </div>
        <div className="space-4 hidden-lg-down" />
        <div className="space-2 hidden-xl-down" />
        <div className="space-4 hidden-md-down" />
        <div className="space-4 hidden-lg-down" />
      </div>
    );
  }
}

export default About;
