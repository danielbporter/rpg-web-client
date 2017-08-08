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
    // rollFunction: (id, sides) => dispatch(diceWidgetRoll(id, sides)),
    // resetFunction: (id) => dispatch(diceWidgetReset(id)),
  };
}

// declare a new component, appDrawer
export default class AppDrawer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
    }

  // handleToggle(this.setState({open: !this.state.open}); 

  // handleChange(event, index, value) {
  //   this.setState({value});
  //   } 

  render() {
    // console.log(this.props.rolls.toString());

    // grab the id specifcally because it will get used a few times
    const id = this.props.id;

    // put all of this widget's props into one object to be attached the the DOM
    const drawerProps = Object.assign({},
      this.props,
      {
        className: `${this.props.className} appdrawer`,
      });

     // const navButton = this.props.openFunction(open =>
     //  <NavButton
     //    onClick={() => this.props.openFunction(this.props.id, state)}
     //  />
    //);

    // return the widget!
    // widget has the properties from its parent and what it set itself
    // it also contains its roll buttons and reset button and the children
    // its parent gave it (react grid layout stuff, e.g. Resize Handle)

    if (true) {}
      
    return (
        <div className="appdrawer">
          <Drawer open={this.state.open}>
              <MenuItem>Menu Item</MenuItem>
              <MenuItem>Menu Item 2</MenuItem>
              <toggle/>
            </Drawer>       
        </div>
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

  // redux-content props
  open: PropTypes.arrayOf(PropTypes.bool),

  // redux-dispatch props
  resetFunction: PropTypes.func,
  rollFunction: PropTypes.func,
  openFunction: PropTypes.func,



};

export default connect(mapStateToProps, mapDispatchToProps)(AppDrawer);