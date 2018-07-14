import React, { Component } from 'react';
import SmoothScroll from 'smooth-scroll';
import Fade from 'react-reveal/Fade';
import Headshot from '../images/headshot.png';

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
        <div className="container home home-container" id="home">
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
                  <h1 className="title-text">
                    Hi, I&apos;m Adam!
                  </h1>
                  <p className="description-text">
                    {/* I&apos;m a student at the University of Pennsylvania where I study
                     operations and computer science. */}
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
