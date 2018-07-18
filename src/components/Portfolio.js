import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Nalda from '../images/portfolio/nalda.png';
import Flourish from '../images/portfolio/flourish.png';
import Riplo from '../images/portfolio/riplo.svg';


class Portfolio extends Component {
  render() {
    return (
      <div className="container" id="portfolio">
        <div className="space-2 hidden-md-down" />
        <div className="row">
          <div className="offset-xl-2 col-xl-8 col-lg-10 offset-lg-1 col-12">
            <Fade down>
              <div className="card portfolio-card-riplo">
                <div className="riplo-wrapper">
                  <img alt="riplo" src={Riplo} className="card-img-top portfolio-img riplo-icon" />
                  <p className="riplo-title">
                    Riplo
                  </p>
                </div>
                <div className="line-break" />
                <div className="card-body">
                  <p className="card-text portfolio-text riplo-text">
                    I&apos;m passionate about building interesting personal projects,
                    startup MVPs, static websites, mobile apps, and everything in between.
                  </p>
                  <p className="card-text portfolio-text riplo-text">
                    Check out some of my past work, look through my company&nbsp;
                    <a href="https://www.riplo.io/" target="_blank" rel="noopener noreferrer">
                      website,
                    </a>
                    &nbsp;and please&nbsp;
                    <a href="mailto:adamripley@gmail.com">
                      reach out
                    </a>
                     &nbsp;if you&apos;re looking for a freelance developer.
                  </p>
                </div>
              </div>
            </Fade>
          </div>
          <div className="col-xl-6 col-lg-10 offset-xl-0 offset-lg-1 col-12">
            <Fade left>
              <div className="card portfolio-card nalda">
                <a href="https://www.naldacampus.com" className="link-no-style" target="_blank" rel="noopener noreferrer">
                  <img alt="nalda" src={Nalda} className="card-img-top portfolio-img" />
                  <div className="nalda-card-body">
                    <h1 className="portfolio-title">
                      Nalda Campus
                    </h1>
                    <div className="line-break" />
                    <p className="card-text portfolio-text">
                      Web app for startup offering curated listings, articles, and videos
                      for food and activites around college campuses.  Worked mostly on
                      backend - currently developing a mobile app for the company as well.
                      Check it out&nbsp;
                      <a href="https://www.naldacampus.com" target="_blank" rel="noopener noreferrer">
                        here.
                      </a>
                    </p>
                    <p className="card-text portfolio-text technologies">
                      Built using React/Redux, Node, Express, MongoDB, Passport.
                    </p>
                  </div>
                </a>
              </div>
            </Fade>
          </div>
          <div className="col-xl-6 col-lg-10 offset-xl-0 offset-lg-1 col-12">
            <Fade right>
              <div className="card portfolio-card flourish">
                <a href="https://flourishchange.com" className="link-no-style" target="_blank" rel="noopener noreferrer">
                  <img alt="flourish" src={Flourish} className="card-img-top portfolio-img" />
                  <h1 className="portfolio-title">
                    Flourish Change
                  </h1>
                  <div className="line-break" />
                  <p className="card-text portfolio-text">
                    Web app for microdonation platform allowing millenials to donate to and
                    keep accountable charities of their choice. Handled mostly frontend including
                    onboarding flow, donation process, and admin panel. Check it out&nbsp;
                    <a href="https://flourishchange.com" target="_blank" rel="noopener noreferrer">
                      here.
                    </a>
                  </p>
                  <p className="card-text portfolio-text technologies">
                    Built using React, Redux, Node.
                  </p>
                </a>
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

export default Portfolio;
