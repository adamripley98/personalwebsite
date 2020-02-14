import React, { Component } from 'react';
import Rocket from '../images/rocket.webp';


class UnderConstruction extends Component {
  render() {
    return (
      <div className="center-card">
        <h1 className="bold">
          WEBSITE UNDER CONSTRUCTION
        </h1>
        <img className="rocket" src={Rocket} alt="rocket" />
        <div>
          <p>
            <strong>
              REACH OUT @&nbsp;
            </strong>
            <a href="mailto:aripley@wharton.upenn.edu">
              ARIPLEY@WHARTON.UPENN.EDU
            </a>
          </p>
          <p>
            <strong>
              FREELANCE WORK @&nbsp;
            </strong>
            <a href="https://www.riplo.io" target="_blank" rel="noopener noreferrer">
              RIPLO.IO
            </a>
          </p>
        </div>
      </div>
    );
  }
}

export default UnderConstruction;
