import React, { Component, PropTypes } from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import {
  Toolbar,
  ToolbarGroup,
  ToolbarSeparator,
  ToolbarTitle } from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import ActionSettings from 'material-ui/svg-icons/action/settings';
import IconAccount from 'material-ui/svg-icons/action/account-circle'; 
//import Avatar from 'material-ui/Avatar';
import Drawer from 'material-ui/Drawer';
import {fullBlack} from 'material-ui/styles/colors';
//import NavButton from 'components/core/Toolbar/NavButton'

export default class ToolbarTop extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 3,
    };
  }

  // handleChange = (event, index, value) => this.setState({value});
  handleChange(event, index, value) {
    this.setState({value});
    }

  render() {
    return (
      <Toolbar>
        <ToolbarGroup firstChild={true}>
          <IconMenu
            iconButtonElement={
              <IconButton touch={true}>
                <NavigationMenu />
              </IconButton>
            }>
          </IconMenu>
          <ToolbarTitle text="dmprov" />
          <ToolbarSeparator />
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
          <ToolbarSeparator />
          <RaisedButton label="Logout" primary={true} />
          <IconMenu
            iconButtonElement={
              <IconButton touch={true}>
                <ActionSettings />
              </IconButton>
            }
          >
            <MenuItem primaryText="Download" />
            <MenuItem primaryText="More Info" />
          </IconMenu>
          <IconMenu
            iconButtonElement={
              <IconButton touch={true}>
                <IconAccount/>
              </IconButton>
            }
          >
            <MenuItem primaryText="Download" />
            <MenuItem primaryText="More Info" />
          </IconMenu>
        </ToolbarGroup>
      </Toolbar>
    );
  }
}

ToolbarTop.propTypes = {
     children: PropTypes.node, 
     className: PropTypes.string,
     style: PropTypes.object,
     open: PropTypes.bool,
};


export default ToolbarTop; 

//The real deal is below 
//more comment 

// import React, { Component, PropTypes } from 'react';
// import IconMenu from 'material-ui/IconMenu';
// import IconButton from 'material-ui/IconButton';
// import FontIcon from 'material-ui/FontIcon';
// import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
// import MenuItem from 'material-ui/MenuItem';
// import DropDownMenu from 'material-ui/DropDownMenu';
// import RaisedButton from 'material-ui/RaisedButton';
// import {Toolbar, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

// class HeaderNavToolbar extends Component {

//   // constructor(props) {
//   //   super(props);
//   //   this.state = {
//   //     value: 3,
//   //   };
//   // }
//   // handleChange = (event, index, value) => this.setState({value});

//   render() {
//       return( 
//         <div className='HeaderNavToolbar'>
//           <Toolbar>
//              <ToolbarGroup firstChild={true}>
//                <DropDownMenu value={this.state.value} onChange={this.handleChange}>
//                  <MenuItem value={1} primaryText="All Broadcasts" />
//                  <MenuItem value={2} primaryText="All Voice" />
//                  <MenuItem value={3} primaryText="All Text" />
//                  <MenuItem value={4} primaryText="Complete Voice" />
//                  <MenuItem value={5} primaryText="Complete Text" />
//                  <MenuItem value={6} primaryText="Active Voice" />
//                  <MenuItem value={7} primaryText="Active Text" />
//                </DropDownMenu>
//              </ToolbarGroup>
//              <ToolbarGroup>
//                <ToolbarTitle text="Options" />
//                <FontIcon className="muidocs-icon-custom-sort" />
//                <ToolbarSeparator />
//                <RaisedButton label="Create Broadcast" primary={true} />
//                <IconMenu
//                  iconButtonElement={
//                    <IconButton touch={true}>
//                      <NavigationExpandMoreIcon />
//                    </IconButton>
//                  }
//                >
//                  <MenuItem primaryText="Download" />
//                  <MenuItem primaryText="More Info" />
//                </IconMenu>
//              </ToolbarGroup>
//            </Toolbar> 
//         </div>
//        );
//   }
// }
// HeaderNavToolbar.propTypes = {
//     children: PropTypes.any,
//     className: PropTypes.string,
// };

// export default HeaderNavToolbar;
// {
// //comment 
// //more comment 
