import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Facebook from '../images/social/facebook.svg';
import Github from '../images/social/github.svg';
import Email from '../images/social/email.svg';
import Instagram from '../images/social/instagram.svg';
import Linkedin from '../images/social/linkedin.svg';
import Medium from '../images/social/medium.svg';


class About extends Component {
  render() {
    return (
      <div className="container hero" id="about">
        <div className="space-2 hidden-md-down" />
        <div className="row">
          <div className="col-12 col-md-4">
            <Fade left>
              <div className="card about-card">
                <h1 className="title-text">
                  Currently
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
          <div className="col-12 col-md-3">
            <Fade right>
              <div className="card about-card">
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
          <div className="col-12 col-md-5">
            <Fade left>
              <div className="card about-card">
                <h1 className="title-text">
                  Education
                </h1>
                <div className="line-break" />
                <p className="card-text">
                  University of Pennsylvania, The Wharton School 2016-Present
                  I studied Operations Management and Computer Science, was an exec board member
                  for the entrepreneurship club, and was a backend web developer
                  for the Signal and PennLabs. I also made Dean&apos;s list.
                </p>
                <p className="card-text">
                  Dimond High School
                  2012-2016
                  I founded an entrepreneurship club, was varsity soccer captain,
                  was Athletic Council president, and gave the graduation speech.
                </p>
              </div>
            </Fade>
          </div>
          <div className="social-icons">
            <a href="https://www.facebook.com/adam.ripley.39" className="hvr-grow-rotate">
              <img alt="facebook" src={Facebook} />
            </a>
            <a href="mailto:adamripley@gmail.com" className="hvr-grow-rotate">
              <img alt="email" src={Email} />
            </a>
            <a href="https://github.com/adamripley98" className="hvr-grow-rotate">
              <img alt="github" src={Github} />
            </a>
            <a href="https://medium.com/@adamripley" className="hvr-grow-rotate">
              <img alt="medium" src={Medium} />
            </a>
            <a href="https://www.instagram.com/allergyadam/" className="hvr-grow-rotate">
              <img alt="instagram" src={Instagram} />
            </a>
            <a href="https://www.linkedin.com/in/adamrip/" className="hvr-grow-rotate">
              <img alt="linkedin" src={Linkedin} />
            </a>
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
