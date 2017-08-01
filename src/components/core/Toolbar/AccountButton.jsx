import React, { PropTypes } from 'react';
import Button from '../../core/Button';
import RaisedButton from 'material-ui/RaisedButton';

// const DiceButton = (props) =>
//   <div className={'dice-widget-roll-button'} onClick={props.rollFunction}>
//     {props.sides}
//   </div>;

const DiceButton = (props) =>
  <Button className={'dice-widget-roll-button'} onClick={props.onClick}>
    {props.sides}
    </Button>
;

DiceButton.propTypes = {
  onClick: PropTypes.func,
  sides: PropTypes.number.isRequired,
};

export default DiceButton;
