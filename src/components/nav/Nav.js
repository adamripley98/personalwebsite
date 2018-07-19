import React, { Component } from 'react';
import Logo from '../../images/logo.svg';

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

    const getBodyScrollTop = () => {
      const el = document.scrollingElement || document.documentElement;
      return el.scrollTop;
    };

    window.addEventListener('scroll', () => {
      if (getBodyScrollTop() > 20) {
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
          <a href="#top">
            <img className="logo" alt="Riplo" src={Logo} />
          </a>
          <div className="links">
            <a href="#top">
              Home
            </a>
            <a href="#about">
              About
            </a>
            <a href="#content">
              Content
            </a>
            <a href="#portfolio">
              Portfolio
            </a>
            <a href="#contact">
              Contact
            </a>
          </div>
        </nav>
        <div className="nav-space" id="top" />
      </div>
    );
  }
}

export default Nav;
