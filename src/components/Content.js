import React, { Component } from 'react';
import SmoothScroll from 'smooth-scroll';
import Fade from 'react-reveal/Fade';

class Content extends Component {
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
                  content component.
                </p>
              </Fade>
            </div>
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

export default Content;
