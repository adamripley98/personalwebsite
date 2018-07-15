import React, { Component } from 'react';
import SmoothScroll from 'smooth-scroll';
import Fade from 'react-reveal/Fade';
import Headshot from '../images/headshot.png';
import Facebook from '../images/social/facebook.svg';
import Github from '../images/social/github.svg';
import Email from '../images/social/email.svg';
import Instagram from '../images/social/instagram.svg';
import Linkedin from '../images/social/linkedin.svg';
import Medium from '../images/social/medium.svg';

class Home extends Component {
  componentDidMount() {
    const arrow = document.getElementById('arrow');
    window.addEventListener('scroll', () => {
      const top = document.documentElement.scrollTop;
      if (top > 50) arrow.style.opacity = '0';
      else arrow.style.opacity = '0.8';
    });
  }

  render() {
    const scroll = new SmoothScroll('a[href*="#"]', {
      speed: 500,
      offset: 100,
    });

    return (
      <div>
        <div className="container home" id="home">
          <div className="space-2 hidden-md-down" />
          <div className="row">
            <div className="col-12 col-lg-5">
              <Fade left>
                <img className="img-fluid card-img headshot" alt="headshot" src={Headshot} />
              </Fade>
              <Fade up>
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
              </Fade>
            </div>
            <div className="col-12 col-lg-7">
              <Fade right>
                <div className="card home-card">
                  <h1 className="title-text">
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
          {/* <div className="space-4 hidden-lg-down" />
          <div className="space-2 hidden-xl-down" /> */}
          {/* <div className="arrow-wrapper">
            <a href="#about">
              <i
                id="arrow"
                className="fa fa-chevron-down"
                aria-hidden="true"
                onClick={(event) => {
                  if (document.getElementById('about')) {
                    event.preventDefault();
                    scroll.animateScroll(document.getElementById('about'));
                  }
                }}
              />
            </a>
          </div> */}
          {/* <div className="space-4 hidden-md-down" />
          <div className="space-4 hidden-lg-down" /> */}
        </div>
        <Fade bottom>
          <a
            href="#about"
            id="arrow"
            aria-hidden="true"
            onClick={(event) => {
              if (document.getElementById('about')) {
                event.preventDefault();
                scroll.animateScroll(document.getElementById('about'));
              }
            }}
          >
            <svg id="more-arrows">
              <polygon className="arrow-top" points="37.6,27.9 1.8,1.3 3.3,0 37.6,25.3 71.9,0 73.7,1.3 " />
              <polygon className="arrow-middle" points="37.6,45.8 0.8,18.7 4.4,16.4 37.6,41.2 71.2,16.4 74.5,18.7 " />
              <polygon className="arrow-bottom" points="37.6,64 0,36.1 5.1,32.8 37.6,56.8 70.4,32.8 75.5,36.1 " />
            </svg>
          </a>
        </Fade>
      </div>
    );
  }
}

export default Home;
