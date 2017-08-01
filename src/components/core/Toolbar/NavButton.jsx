import React, { PropTypes } from 'react';
import Button from '../../core/Button';
import RaisedButton from 'material-ui/RaisedButton';

const NavButton = (props) =>
  <Button className={'drawer-nav-button'} onClick={props.onClick}>
   onClick={this.handleToggle}
    {props.handleToggle}
    </Button>
;

NavButton.propTypes = {
  onClick: PropTypes.func,
  sides: PropTypes.number.isRequired,
};

export default NavButton;
