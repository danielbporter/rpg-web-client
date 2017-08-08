//Presentational Component (wth exeptn f accnt)

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import {
  navMenuToggle,
  navMenuClose,
} from '../../../actions/ActionCreators';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import {
  Toolbar,
  ToolbarGroup,
  ToolbarSeparator,
  ToolbarTitle } from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import AppsIcon from 'material-ui/svg-icons/navigation/apps';
import ActionSettings from 'material-ui/svg-icons/action/settings';
import IconAccount from 'material-ui/svg-icons/action/account-circle'; 
import SocialNotificationsActive from 'material-ui/svg-icons/social/notifications-active';
//import Avatar from 'material-ui/Avatar';
import Drawer from 'material-ui/Drawer';
import {fullBlack} from 'material-ui/styles/colors';
import NavButton from './NavButton';
import AccountPopoverMenu from './accountpopovermenu';
import Popover from 'material-ui/Popover';


// the information this component requires from redux
function mapStateToProps(state) {
  // empty because this component gets its information from the dashboard-widget interaction
  return {};
}

// the actions this component will perform, passed in by redux
function mapDispatchToProps(dispatch) {
  return {
    toggleFunction: (id, state) => dispatch(navMenuToggle(id, state)),
    closeFunction: (id, state) => dispatch(navMenuClose(id, state)),
  };
}

// declare a new component, AppToolbar
class AppToolbar extends Component {

constructor(props) {
    super(props);
    this.state = {
      value: 3,
      open: false,
      id: 'AppToolbar',
    };
  }

  // build a navButton 
  navButton(toggleFunc) {
    return (
      <div className={'apptoolbar-nav-button'} onClick={toggleFunc}>
        {open}
      </div>
    );
  }
  // build a Accountbutton
  // resetButton(resetFunc) {
  //   return (
  //     <div className={'dice-widget-reset-button'} onClick={resetFunc}>
  //       Reset
  //     </div>
  //   );
  // }
  // build a Extrasbutton
  // resetButton(resetFunc) {
  //   return (
  //     <div className={'dice-widget-reset-button'} onClick={resetFunc}>
  //       Reset
  //     </div>
  //   );
  // }
  // build a Notificaitonbutton
  // resetButton(resetFunc) {
  //   return (
  //     <div className={'dice-widget-reset-button'} onClick={resetFunc}>
  //       Reset
  //     </div>
  //   );
  // }
  // maybe add this handleChange = (event, index, value) => this.setState({value});

  render() {
    // console.log(this.props.rolls.toString());

    // grab the id specifcally because it will get used a few times
    const id = this.props.id;

 
    // put all of this core component's props into one object to be attached the the DOM
    const AppToolbarProps = Object.assign({},
      this.props,
      {
        className: `${this.props.className} AppToolbar`,
      });

    // build the toolbar buttons
    // const rollButtons = this.props.dice.map((d) =>
    //   this.diceButton(d, () => this.props.rollFunction(id, d)));

    // const NavButtons = this.props.drawer.map(state =>
    //   <NavButton
    //     onClick={() => this.props.toggleFunction(this.props.state)}
    //     onClick={this.handleToggle.bind(this)}
    //   />
    // );

    // build other buttons
   const navButton = this.navButton(() => this.props.toggleFunction(state));
    

    // return the widget!
    // widget has the properties from its parent and what it set itself
    // it also contains its roll buttons and reset button and the children
    // its parent gave it (react grid layout stuff, e.g. Resize Handle)
   return (
      <div {...toolbar.Props}>
        <Toolbar>
          <ToolbarGroup firstChild={true}>
            <IconMenu
              iconButtonElement={
                <IconButton touch={true}>
                    <NavigationMenu 
                     onClick={this.handleToggle}> 
                   </NavigationMenu>
                  </IconButton>
                }
              />
            <ToolbarTitle text="dmprov"/>
            <ToolbarSeparator/>
            <DropDownMenu value={this.state.value} onChange={this.handleChange}>
              <MenuItem value={1} primaryText="All Broadcasts" />
              <MenuItem value={2} primaryText="All Voice" />
              <MenuItem value={3} primaryText="New Campaign" />
              <MenuItem value={4} primaryText="Complete Voice" />
              <MenuItem value={5} primaryText="Complete Text" />
              <MenuItem value={6} primaryText="Active Voice" />
              <MenuItem value={7} primaryText="Active Text" />
              </DropDownMenu>
              </ToolbarGroup>
          <ToolbarGroup>
            <ToolbarTitle text="Search" />
            <FontIcon className="muidocs-icon-custom-sort" />
            <ToolbarSeparator/>
          </ToolbarGroup>
          <ToolbarGroup>
            <IconMenu
              iconButtonElement={
                <IconButton touch={true}>
                  <SocialNotificationsActive/>
                </IconButton>
              }/> 
            <IconMenu
              iconButtonElement={
                <IconButton touch={true}>
                  <AppsIcon/>
                </IconButton>
              }
              >
              <MenuItem primaryText="Bazaar" />
              <MenuItem primaryText="Upload" />
             </IconMenu>
            <IconMenu
              iconButtonElement={
                <IconButton touch={true}>
                  <IconAccount/>
                </IconButton>
              }/> 
            </ToolbarGroup>
          </Toolbar>
      </div> 
    );
   }
 }
  Toolbar.propTypes = {
    // component props
    children: PropTypes.any,

    // toolbar props
    className: PropTypes.string,
    id: PropTypes.string,

    // redux-content props
   

    // redux-dispatch props

    toggleFunction: PropTypes.func,
    closeFunction:PropTypes.func,

    //drawer props 

    open: PropTypes.bool,
    docked: PropTypes.bool,
    children: PropTypes.node,
    onRequestChange: PropTypes.func,
};

// connect AppToolbar to redux and export the connected thing as AppToolbar
export default AppToolbar;
//before connect(mapStateToProps, mapDispatchToProps)(AppToolbar)