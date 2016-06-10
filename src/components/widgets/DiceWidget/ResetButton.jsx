import React, { PropTypes } from 'react';

const DiceButton = (props) =>
  <div className={'dice-widget-roll-button'} onClick={props.rollFunction}>
    {props.sides}
  </div>;

DiceButton.propTypes = {
  rollFunction: PropTypes.func,
  sides: PropTypes.number.isRequired,
};

export default DiceButton;
