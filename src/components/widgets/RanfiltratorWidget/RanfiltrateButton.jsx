import React, { PropTypes } from 'react';
import Button from '../../core/Button';

// const RanfiltrateButton = (props) =>
//   <div className={'dice-widget-roll-button'} onClick={props.ranfiltrateFunction}>
//     {props.sides}
//   </div>;

// const RanfiltrateButton = (props) =>
//   <Button className={'ranfilator-widget-ranfiltrate-button'} onClick={props.onClick}>
//     {props.sides}
//   </Button>
// ;

RanfiltrateButton.propTypes = {
  onClick: PropTypes.func,
  sides: PropTypes.number.isRequired,
};

export default RanfiltrateButton;
