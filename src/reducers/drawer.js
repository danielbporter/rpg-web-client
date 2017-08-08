import Immutable from 'immutable';
import {
   NAV_MENU_TOGGLE
  NAV_MENU_CLOSE
} from '../actions/ActionTypes';


const initialState = Immutable.fromJS({
	  closed: {
    id: 'closed',
    type: 'drawer',
    sizeClass: 'normal',
    content: {
      name: 'drawer',
      description: 'This is where widgets and assets go',
    },  

};

function navMenuToggle(state, action) {
  return state;
}

function navMenuClose(state, action) {
  return state;
}

function OnRequestChange(state, action) {
  return state;
}

function handleChange(event, index, value) {
  return undefined.setState({ value: value })
}

//function(open: boolean, reason: string) => void

export default function (state = initialState, action) {
  if (action === undefined) {
    return state;
  }

  switch (action.type) {
    case NAV_MENU_TOGGLE:
      return changeNavMenuState(state, action);
    case NAV_MENU_CLOSE:
      return changeNavMenuState(state, action);
    default:
      return state;
  }
}
