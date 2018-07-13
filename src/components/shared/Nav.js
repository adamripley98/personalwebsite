import React, { Component } from 'react';
import Logo from '../../images/riplo.svg';
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
          <img className="logo" alt="Riplo" src={Logo} />
          <h1 className="logo-text">
            Welcome
          </h1>
          <div className="links">
            <ScrollLink to="top" text="Home" hiddenMdDown />
            <ScrollLink to="about" text="About" />
            <ScrollLink to="projects" text="Projects" />
            <ScrollLink to="contact" text="Contact" />
          </div>
        </nav>
        <div className="nav-space" id="top" />
      </div>
    );
  }
}

export default Nav;
