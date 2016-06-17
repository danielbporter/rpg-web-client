import React, { PropTypes } from 'react';

const ResetButton = (props) =>
  <div className={'dice-widget-reset-button'} onClick={props.onClick}>
    Reset
  </div>;

ResetButton.propTypes = {
  onClick: PropTypes.func,
};

export default ResetButton;
