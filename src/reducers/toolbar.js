import Immutable from 'immutable';
import {
	 NAV_MENU_TOGGLE,
 	 NAV_MENU_CLOSE,
   ACCOUNT_POPOVER_MENU
  //account button 
  //other stuff button
} from '../actions/ActionTypes';
const initialState = Immutable.fromJS({

value: 'closed'});

function NavMenuClose(state, action) {
  return state;
}

function NavMenuToggle(state, action) {
  return state;
}

function AccountPopoverMenu(state, action) {
  return state;
}
export default function (state = initialState, action) {
  if (action === undefined) {
    return state;
  }
  switch (action.type) {
    case NAV_MENU_TOGGLE:
      return NavMenuToggle(state, action);
    case NAV_MENU_CLOSE:
      return NavMenuClose(state, action);
    case ACCOUNT_POPOVER_MENU:
      return AccountPopoverMenu(state, action);
    default:
      return state;
  }
}
