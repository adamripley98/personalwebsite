import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

class About extends Component {
  render() {
    return (
      <div className="container hero" id="about">
        <div className="space-2 hidden-md-down" />
        <div className="row">
          <div className="col-12 col-md-5">
            <Fade left>
              <div className="card home-card">
                <h1 className="title-text">
                  Currently...
                </h1>
                <div className="line-break" />
                <p className="card-text">
                  I&apos;m spending some time in Salt Lake City catching up on
                  hitting the gym and coding for Riplo. I&apos;m reading a book called&nbsp;
                  <a href="https://en.wikipedia.org/wiki/Getting_to_Yes">
                  &quot;Getting to Yes&quot;
                  </a>
                  &nbsp; and am working through an online course on
                  algorithms. In a few weeks I&apos;m heading to San Jose to visit my friend&nbsp;
                  <a href="https://www.cameroncabo.com">
                    Cam.
                  </a>
                </p>
              </div>
            </Fade>
          </div>
          <div className="col-12 col-md-7">
            <Fade right>
              <div className="card home-card">
                <h1 className="title-text">
                  Skills
                </h1>
                <div className="line-break" />
                <p className="card-text">
                  Javascript, Java, Python, HTML5/CSS3, Bootstrap4, React/Redux, React Native,
                  Express, Node.js, MongoDB, Firebase, Git, Heroku, and AWS.
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

export default About;
