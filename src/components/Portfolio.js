import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Nalda from '../images/portfolio/nalda.png';
import Flourish from '../images/portfolio/flourish.png';
import Vita from '../images/portfolio/vita.png';


class Portfolio extends Component {
  render() {
    return (
      <div className="container" id="portfolio">
        <div className="space-2 hidden-md-down" />
        <div className="row">
          <div className="col-12 col-md-6">
            <Fade right>
              <div className="card portfolio-card">
                <img alt="nalda" src={Nalda} className="card-img-top portfolio-img" />
                <div className="card-body">
                  <h1 className="portfolio-title">
                    Nalda Campus
                  </h1>
                  <div className="line-break" />
                  <p className="card-text portfolio-text">
                    Web app for startup offering curated listings, articles, and videos
                    for food and activites around college campuses. Currently developing
                    a mobile application for the company as well. Check it out&nbsp;
                    <a href="https://www.naldacampus.com">
                      here.
                    </a>
                  </p>
                  <p className="card-text portfolio-text technologies">
                    Built using React/Redux, Node, Express, MongoDB, Passport, AWS S3.
                  </p>
                </div>
              </div>
            </Fade>
          </div>
          <div className="col-12 col-md-6">
            <Fade right>
              <div className="card portfolio-card">
                <img alt="flourish" src={Flourish} className="card-img-top portfolio-img" />
                <h1 className="portfolio-title">
                  Flourish Change
                </h1>
                <div className="line-break" />
                <p className="card-text portfolio-text">
                  Web app for microdonation platform allowing millenials to donate to and
                  keep accountable charities of their choice. Handled mostly frontend including
                  onboarding flow, donation process, and admin panel. Check it out&nbsp;
                  <a href="https://www.flourishchange.com">
                    here.
                  </a>
                </p>
                <p className="card-text portfolio-text technologies">
                  Built using React, Redux, Node.
                </p>
              </div>
            </Fade>
          </div>
          <div className="col-12 col-md-6">
            <Fade right>
              <div className="card portfolio-card hvr-grow">
                <img alt="vita" src={Vita} className="card-img-top portfolio-img" />
                <h1 className="portfolio-title">
                  VITA Fitness
                </h1>
                <div className="line-break" />
                <p className="card-text portfolio-text">
                  Mobile application for an on-demand, peer-to-peer fitness network
                  that removes the need for personal trainers for entry-level gym-goers.
                </p>
                <p className="card-text portfolio-text technologies">
                  Built using React Native, Firebase, Google Maps API.
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

export default Portfolio;
