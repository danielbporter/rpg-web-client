import React, { Component, PropTypes } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import NAV_MENU_TOGGLE from 'actions/ActionTypes';

export default class Drawer extends React.Component {


   constructor(props) {
    super(props);
    this.state = {open: false};
  }

  NAV_MENU_TOGGLE = () => this.setState({open: !this.state.open});

  render() {
    return (
      <Drawer open={this.state.open}>
          <MenuItem>Menu Item</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </Drawer>
    );
  }
}

