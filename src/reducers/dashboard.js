import Immutable from 'immutable';
import { DASHBOARD_LAYOUT_CHANGE } from '../actions/ActionTypes';

const initialState = Immutable.fromJS({
  dashboard: {
    layout: [
      { i: 'a', x: 0, y: 0, w: 2, h: 2 },
      { i: 'b', x: 1, y: 0, w: 2, h: 2 },
    ],
    cols: 10,
    rowHeight: 70,
    margin: [10, 10],
    verticalCompact: false,
  },
});

export default function (state = initialState, action) {
  if (action === undefined) {
    return state;
  }

  switch (action.type) {
    case DASHBOARD_LAYOUT_CHANGE:
      return state.mergeDeepIn(['dashboard', 'layout'], action.layout);
    default:
      return state;
  }
}
