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
                  <img alt="experience" src={Experience} className="about-icon" />
                  <h1 className="about-title-text">
                    Experience
                  </h1>
                </div>
                <div className="line-break" />
                <p className="card-text">
                  &#9658;&nbsp;&nbsp;
                  <span className="experience-title">
                    Riplo Ventures, Cofounder & Developer
                  </span>
                  &nbsp;&nbsp;
                  <i>
                    (March 2018 - Present)
                  </i>
                  <br />
                  Riplo is a student-run freelance web development company centered
                  at Penn. We work with clients on anything from complex web apps to
                  static websites to mobile apps.
                </p>
                <p className="card-text">
                  &#9658;&nbsp;&nbsp;
                  <span className="experience-title">
                    PennLabs, Backend Developer
                  </span>
                  &nbsp;&nbsp;
                  <i>
                    (January 2018 - Present)
                  </i>
                  <br />
                  PennLabs is a group of driven developers, designers, and innovators
                  aiming to create web and mobile apps that improve the Penn community.
                </p>
                <p className="card-text">
                  &#9658;&nbsp;&nbsp;
                  <span className="experience-title">
                    Vita Fitness, Cofounder
                  </span>
                  &nbsp;&nbsp;
                  <i>
                    (July 2017 - December 2017)
                  </i>
                  <br />
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
                  <img alt="skills" src={Skills} className="about-icon" />
                  <h1 className="about-title-text">
                    Skills
                  </h1>
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
              <div className="card about-card cu">
                <div className="about-header">
                  <img alt="currently" src={Currently} className="about-icon" />
                  <h1 className="about-title-text">
                    Currently
                  </h1>
                </div>
                <div className="line-break" />
                <p className="card-text">
                  &#9658;&nbsp;&nbsp;I&apos;m spending some time in San Jose, visitng
                  my friend Cam and working on some personal projects.&nbsp;
                  <br />
                  <br />
                  &#9658;&nbsp;&nbsp;I&apos;m reading a book called&nbsp;
                  <a href="https://www.amazon.com/Shoe-Dog-Memoir-Creator-Nike-ebook/dp/B0176M1A44" target="_blank" rel="noopener noreferrer">
                  &quot;Shoe Dog&quot;
                  </a>
                  &nbsp; and am working through an online course on
                  algorithms.
                  <br />
                  <br />
                  &#9658;&nbsp;&nbsp;In a week I&apos;m roadtripping from SF to Seattle
                  with my friend Tian.&nbsp;
                </p>
              </div>
            </Fade>
          </div>
          <div className="col-12 col-xl-8">
            <Fade right>
              <div className="card about-card ed">
                <div className="about-header">
                  <img alt="education" src={Education} className="about-icon" />
                  <h1 className="about-title-text">
                    Education
                  </h1>
                </div>
                <div className="line-break" />
                <p className="card-text">
                  &#9658;&nbsp;&nbsp;
                  <span className="experience-title">
                    University of Pennsylvania, The Wharton School
                  </span>
                  &nbsp;&nbsp;
                  <i>
                    (2016-Present)
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
                  <span className="experience-title">
                    Dimond High School
                  </span>
                  &nbsp;&nbsp;
                  <i>
                    (2012-2016)
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
