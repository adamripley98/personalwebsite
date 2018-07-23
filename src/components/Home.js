import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Headshot from '../images/headshot.png';
import Facebook from '../images/social/facebook.svg';
import Github from '../images/social/github.svg';
import Email from '../images/social/email.svg';
import Instagram from '../images/social/instagram.svg';
import Linkedin from '../images/social/linkedin.svg';
import Medium from '../images/social/medium.svg';

class Home extends Component {
  render() {
    return (
      <div>
        <div className="container" id="top">
          <div className="space-2 hidden-md-down" />
          <div className="row">
            <div className="col-12 col-lg-5">
              <Fade left>
                <img className="img-fluid card-img headshot" alt="headshot" src={Headshot} />
              </Fade>
              <Fade up>
                <div className="social-icons">
                  <a href="https://www.facebook.com/adam.ripley.39" className="hvr-grow-rotate" target="_blank" rel="noopener noreferrer">
                    <img alt="facebook" src={Facebook} />
                  </a>
                  <a href="mailto:adamripley@gmail.com" className="hvr-grow-rotate">
                    <img alt="email" src={Email} />
                  </a>
                  <a href="https://github.com/adamripley98" className="hvr-grow-rotate" target="_blank" rel="noopener noreferrer">
                    <img alt="github" src={Github} />
                  </a>
                  <a href="https://medium.com/@adamripley" className="hvr-grow-rotate" target="_blank" rel="noopener noreferrer">
                    <img alt="medium" src={Medium} />
                  </a>
                  <a href="https://www.instagram.com/allergyadam/" className="hvr-grow-rotate" target="_blank" rel="noopener noreferrer">
                    <img alt="instagram" src={Instagram} />
                  </a>
                  <a href="https://www.linkedin.com/in/adamrip/" className="hvr-grow-rotate" target="_blank" rel="noopener noreferrer">
                    <img alt="linkedin" src={Linkedin} />
                  </a>
                </div>
              </Fade>
            </div>
            <div className="col-12 col-lg-7">
              <Fade right>
                <div className="card home-card">
                  <h1 className="home-title-text">
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
        </div>
        <div className="home-spacer" />
      </div>
    );
  }
}

export default Home;
