import React, { Component, PropTypes } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { connect } from 'react-redux';
import {
  //actions for drawer
  navMenuToggle, 
  navMenuClose, 
} from '../../../actions/ActionCreators';
import {
  Card,
  CardHeader,
  CardText,
} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import NestedList from 'material-ui';


// the information this component requires from redux
function mapStateToProps(state) {
  // empty because this component gets its information from the dashboard-widget interaction
  return {};
}
// the actions this component will perform, passed in by redux
function mapDispatchToProps(dispatch) {
  return {

    // @Peter drawer functions (this is needed)
    toggleFunction: (id) => dispatch(navMenuToggle(id)),
    closeFunction: (id) => dispatch(navMenuClose(id)),
  };
}

// declare a new component, appDrawer
export default class AppDrawer extends React.Component {



  render() {
    // console.log(this.props.rolls.toString());
    


    const {
      docked,
      onRequestChange,
      open,
      style,
    } = this.props;
    // grab the id specifcally because it will get used a few times
    const id = this.props.id;

    // put all of this widget's props into one object to be attached the the DOM
    const drawerProps = Object.assign({},
      this.props,
      {
        className: `${this.props.className} appdrawer`,
      });


    if (true) {}
      
    return (
        
          <Drawer 
            className='appdrawer'
            style={
              {
              top: 55,
                                       
              }
            }         
            docked={docked}
            open={true}
            onRequestChange={onRequestChange}
            >
              <MenuItem>   -  </MenuItem>
              <MenuItem>______</MenuItem>
              <MenuItem>Assets</MenuItem>
              <MenuItem>Widgets</MenuItem>
              <toggle/>
            </Drawer>       
        
    );
  }
}

// All the props this component will have, and their types
AppDrawer.propTypes = {
  // component props
  children: PropTypes.any,
  className: PropTypes.string,
  open: PropTypes.bool,

  id: PropTypes.string,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  style: PropTypes.object,
  containerStyle: PropTypes.object,

  // redux-content props
  open: PropTypes.arrayOf(PropTypes.bool),
  docked: PropTypes.bool,

  // redux-dispatch props
  resetFunction: PropTypes.func,
  rollFunction: PropTypes.func,
  openFunction: PropTypes.func,
  open: PropTypes.bool,
  onRequestChange: PropTypes.func,



};

export default connect(mapStateToProps, mapDispatchToProps)(AppDrawer);