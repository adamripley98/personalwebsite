import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Headshot from '../images/headshot.png';

class Content extends Component {
  render() {
    return (
      <div className="container hero" id="content">
        <div className="space-2 hidden-md-down" />
        <div className="row">
          <div className="col-12 col-md-5">
            <Fade left>
              <img className="img-fluid card-img headshot" alt="headshot" src={Headshot} />
            </Fade>
          </div>
          <div className="col-12 col-md-7">
            <Fade right>
              <div className="card home-card">
                <h1 className="transparent-text">
                  Hi, I&apos;m Adam!
                </h1>
                <p className="description-text">
                   Student @ Penn // Web Developer @ Riplo
                </p>
                <div className="line-break" />
                <p className="card-text">
                  I’m a student, freelance web developer, and aspring entrepreneur from
                  Anchorage, Alaska. I just finished up my sophomore year at the University
                  of Pennsylvania where I studied operations and computer science, and
                  now I’m taking a year off from school to be a digital nomad.
                </p>
                <p className="card-text">
                  My long term goals center around changing the way we think about our
                  time alive through alternative forms of education. Enjoy my site, and feel
                  free to reach out if you want to talk!
                </p>
              </div>
            </Fade>
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

export default Content;
