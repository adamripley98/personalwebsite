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
          {/* <div className="col-6 col-md-9 col-lg-7"> */}
          <div className="col-12 col-md-5">
            <Fade left>
              <img className="img-fluid card-img headshot" alt="headshot" src={Headshot} />
            </Fade>
          </div>
          {/* <div className="col-6 col-md-10 offset-md-1 col-lg-8"> */}
          <div className="col-12 col-md-7">
            <Fade right>
              <div className="card">
                <p className="hero-text">
                  is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industrys standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book. It has survived not only
                  five centuries, but also the leap into electronic typesetting,
                  remaining essentially unchanged. It was
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
