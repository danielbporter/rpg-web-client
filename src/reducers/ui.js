import Immutable from 'immutable';
import { UI_WINDOW_RESIZE } from '../actions/ActionTypes';

const initialState = Immutable.fromJS({
  width: typeof window === 'object' ? window.innerWidth : null,
  height: typeof window === 'object' ? window.innerHeight : null,
});

export default function (state = initialState, action) {
  if (action === undefined) {
    return state;
  }

  switch (action.type) {
    case UI_WINDOW_RESIZE:
      return state.set('width', action.width).set('height', action.height);
    default:
      return state;
  }
}
