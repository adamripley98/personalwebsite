import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Currently from '../images/about/currently.svg';
import Education from '../images/about/education.svg';
import Skills from '../images/about/skills.svg';
import Experience from '../images/about/experience.svg';

const skills = ['Javascript', 'Java', 'Python', 'OCaml', 'HTML5', 'Redux', 'Bootstrap4', 'React', 'CSS3', 'React Native', 'Express', 'Git', 'Node.js', 'MongoDB', 'AWS', 'Firebase', 'Heroku'];

function displaySkills() {
  const skillsFormatted = skills.map((skill) => { //eslint-disable-line
    return (
      <p className="tag">
        {skill}
      </p>
    );
  });
  return skillsFormatted;
}

class About extends Component {
  render() {
    return (
      <div className="container" id="about">
        <div className="space-2 hidden-md-down" />
        <div className="row">
          <div className="col-12 col-xl-9">
            <Fade left>
              <div className="card about-card exp">
                <div className="about-header">
                  <h1 className="about-title-text">
                    Experience
                  </h1>
                  <img alt="experience" src={Experience} className="about-icon" />
                </div>
                <div className="line-break" />
                <p className="card-text">
                  <i>
                    &#9658;&nbsp;&nbsp;Riplo Ventures, Cofounder & Developer
                  </i>
                  <br />
                  March 2018 - Present
                  Riplo is a student-run freelance web development company centered
                  at Penn. We work with clients on anything from complex web apps to
                  static websites to mobile apps.
                </p>
                <p className="card-text">
                  <i>
                    &#9658;&nbsp;&nbsp;PennLabs, Backend Developer
                  </i>
                  <br />
                  January 2018 - Present
                  PennLabs is a group of driven developers, designers, and innovators
                  aiming to create web and mobile apps that improve the Penn community.
                </p>
                <p className="card-text">
                  <i>
                    &#9658;&nbsp;&nbsp;Vita Fitness, Cofounder
                  </i>
                  <br />
                  July 2017 - December 2017
                  VITA Fitness was an on-demand, peer-to-peer fitness network aimed to
                  revolutionize the personal training industry.
                </p>
              </div>
            </Fade>
          </div>
          <div className="col-12 col-lg-5 col-xl-3">
            <Fade down>
              <div className="card about-card container">
                <div className="about-header">
                  <h1 className="about-title-text">
                    Skills
                  </h1>
                  <img alt="skills" src={Skills} className="about-icon" />
                </div>
                <div className="line-break" />
                <div className="skills-container">
                  {displaySkills()}
                </div>
              </div>
            </Fade>
          </div>
          <div className="col-12 col-lg-7 col-xl-4">
            <Fade up>
              <div className="card about-card">
                <div className="about-header">
                  <h1 className="about-title-text">
                    Currently
                  </h1>
                  <img alt="currently" src={Currently} className="about-icon" />
                </div>
                <div className="line-break" />
                <p className="card-text">
                  &#9658;&nbsp;&nbsp;I&apos;m spending some time in Salt Lake City catching up on
                  hitting the gym and coding for&nbsp;
                  <a href="https://www.riplo.io" target="_blank" rel="noopener noreferrer">
                    Riplo.
                  </a>
                  <br />
                  <br />
                  &#9658;&nbsp;&nbsp;I&apos;m reading a book called&nbsp;
                  <a href="https://en.wikipedia.org/wiki/Getting_to_Yes" target="_blank" rel="noopener noreferrer">
                  &quot;Getting to Yes&quot;
                  </a>
                  &nbsp; and am working through an online course on
                  algorithms.
                  <br />
                  <br />
                  &#9658;&nbsp;&nbsp;In a few weeks I&apos;m heading to San Jose
                  to visit my friend&nbsp;
                  <a href="https://www.cameroncabo.com" target="_blank" rel="noopener noreferrer">
                    Cam.
                  </a>
                </p>
              </div>
            </Fade>
          </div>
          <div className="col-12 col-xl-8">
            <Fade right>
              <div className="card about-card education">
                <div className="about-header">
                  <h1 className="about-title-text">
                    Education
                  </h1>
                  <img alt="education" src={Education} className="about-icon" />
                </div>
                <div className="line-break" />
                <p className="card-text">
                  &#9658;&nbsp;&nbsp;
                  <span className="about-title">
                    University of Pennsylvania, The Wharton School
                  </span>
                  <br />
                  <i>
                    2016-Present
                  </i>
                  <br />
                  I&apos;m studying operations and computer science,
                  was an exec board member for the entrepreneurship club,
                  and am a web developer for the&nbsp;
                  <a href="http://thesign.al/" target="_blank" rel="noopener noreferrer">
                    Signal
                  </a>
                  &nbsp;and&nbsp;
                  <a href="https://pennlabs.org/" target="_blank" rel="noopener noreferrer">
                    PennLabs.
                  </a>
                  &nbsp;I also made Dean&apos;s list.
                </p>
                <p className="card-text">
                  &#9658;&nbsp;&nbsp;
                  <span className="about-title">
                    Dimond High School
                  </span>
                  <br />
                  <i clas>
                    2012-2016
                  </i>
                  <br />
                  I founded an entrepreneurship club, was varsity soccer captain,
                  was Athletic Council president, and gave the graduation speech.
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

export default About;
