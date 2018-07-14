import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Logo from '../../images/logo.svg';
import ScrollLink from './ScrollLink';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolled: false,
    };
  }

  componentDidMount() {
    const scrolled = () => {
      if (!this.state.scrolled) {
        this.setState({ scrolled: true });
      }
    };

    const unscrolled = () => {
      if (this.state.scrolled) {
        this.setState({ scrolled: false });
      }
    };

    window.addEventListener('scroll', () => {
      if (document.documentElement.scrollTop > 20) {
        scrolled();
      } else {
        unscrolled();
      }
    });
  }

  render() {
    return (
      <div>
        <nav className={this.state.scrolled ? 'scrolled' : ''}>
          <Fade top>
            <img className="logo" alt="Riplo" src={Logo} />
          </Fade>
          <div className="links">
            <ScrollLink to="top" text="Home" hiddenMdDown />
            <ScrollLink to="about" text="About" />
            <ScrollLink to="content" text="Content" />
            <ScrollLink to="portfolio" text="Portfolio" />
            <ScrollLink to="contact" text="Get in touch" />
          </div>
        </nav>
        <div className="nav-space" id="top" />
      </div>
    );
  }
}

export default Nav;
