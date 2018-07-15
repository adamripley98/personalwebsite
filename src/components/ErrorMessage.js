import React from 'react';
import PropTypes from 'prop-types';

/**
 * Renders an error message to the user
 */
const ErrorMessage = ({ error }) => {
  // Ensure that the passed in message is a string and not an object
  if (error && typeof error !== 'string') {
    return null;
  }

  // If props were passed down
  if (error) {
    return (
      <div className="alert alert-danger">
        <p className="marg-bot-0 normal">
          { error }
        </p>
      </div>
    );
  }

  // Else, render nothing
  return null;
};

// Props validations
ErrorMessage.propTypes = {
  error: PropTypes.string, // eslint-disable-line
};

export default ErrorMessage;
