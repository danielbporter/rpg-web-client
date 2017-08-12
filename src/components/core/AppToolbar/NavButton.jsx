import React, { PropTypes } from 'react';
import Button from '../../core/Button';
import RaisedButton from 'material-ui/RaisedButton';




const NavButton = (props) =>
  <Button className={'apptoolbar-nav-button'} onClick={props.onClick}>
    {props.navDrawerOpen}
    </Button>
;

NavButton.propTypes = {
  onClick: PropTypes.func,
  onTouchTap: PropTypes.func,
  open: PropTypes.bool,
  close: PropTypes.bool,

};
export default NavButton;


//or does it props.drawer ?




//Try later, from react website: 

// class NavButton extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleChange = this.handleChange.bind(this);
//     this.state = {open: false, text: ''};
//     this.handleToggle = this.handleToggle.bind(this);
//   }
