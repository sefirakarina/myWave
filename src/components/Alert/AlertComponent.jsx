import React from 'react';
import PropTypes from 'prop-types';

var Alert =  (props) => {
  return(
    <div className={ "alert " + props.class }>
      { props.message }
    </div>
  );
}

Alert.propTypes = {
  class: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired
};
  
export default Alert;