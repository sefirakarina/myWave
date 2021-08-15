import React from 'react';

var Alert =  (props) => {
  return(
    <div className={ "alert " + props.class }>
      { props.message }
    </div>
  );
}
  
export default Alert;