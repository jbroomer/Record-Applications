import React from 'react';
import PropTypes from 'prop-types';
import Alert from 'react-bootstrap/Alert';

const propTypes = {
  message: PropTypes.string.isRequired,
};

const Notification = ({ message }) => {
  if (message === '') {
    return null;
  }
  return (
    <div>
      <Alert variant="success">
        <Alert.Heading>{message}</Alert.Heading>
      </Alert>
    </div>
  );
};

Notification.propTypes = propTypes;
export default Notification;
