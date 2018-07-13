import React from 'react';
import PropTypes from 'prop-types';
import SmoothScroll from 'smooth-scroll';

const ScrollLink = ({ to, text, hiddenMdDown }) => {
  const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 500,
    offset: 100,
  });

  return (
    <a
      className={hiddenMdDown ? 'hidden-md-down' : ''}
      href={`#${to}`}
      onClick={(event) => {
        const element = document.getElementById(to);
        if (element) {
          event.preventDefault();
          scroll.animateScroll(element);
        }
      }}
    >
      {text}
    </a>
  );
};

ScrollLink.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  hiddenMdDown: PropTypes.bool, // eslint-disable-line
};

export default ScrollLink;
