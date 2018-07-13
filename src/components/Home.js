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
      <div className="container home home-container">
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
                  I have deep interests in both the business and technical sides
                  of startups. I spent last summer diving deep into web development,
                  became obsessed with it, and have since started a student freelance
                  web dev company. While I love coding, I find work where I&apos;m
                  connecting with clients, solving difficult business problems, and
                  creating enjoyable consumer experiences the most rewarding.
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
        <div className="arrow-wrapper">
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
        </div>
        <div className="space-4 hidden-md-down" />
        <div className="space-4 hidden-lg-down" />
      </div>
    );
  }
}

export default Home;
