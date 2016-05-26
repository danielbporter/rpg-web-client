import Immutable from 'immutable';
import { UI_WINDOW_RESIZE } from '../actions/ActionTypes';

const initialState = Immutable.fromJS({
  width: typeof window === 'object' ? window.innerWidth : null,
  height: typeof window === 'object' ? window.innerHeight : null,
});

function uiWindowResize(state, action) {
  return state.set('width', action.width).set('height', action.height);
}

export default function (state = initialState, action) {
  if (action === undefined) {
    return state;
  }

  switch (action.type) {
    case UI_WINDOW_RESIZE:
      return uiWindowResize(state, action);
    default:
      return state;
  }
}
