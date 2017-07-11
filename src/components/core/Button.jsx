import React, { PropTypes } from 'react';

const Button = (props) =>
  <div {...props}>
    {props.children}    
  </div>
;

Button.propTypes = {
  children: PropTypes.any,
};

export default Button;
