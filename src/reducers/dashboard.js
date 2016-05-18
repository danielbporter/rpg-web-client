import Immutable from 'immutable';
import { DASHBOARD_LAYOUT_CHANGE, DASHBOARD_CHANGE_WIDTH, WIDGET_CHANGE_SIZE } from '../actions/ActionTypes';
import { GRID_UNIT } from '../constants';

const initialState = Immutable.fromJS({
  layout: [
    { i: 'a', x: 0, y: 0, w: 1, h: 1 },
    { i: 'b', x: 1, y: 0, w: 1, h: 1 },
    { i: 'c', x: 0, y: 1, w: 1, h: 1 },
    { i: 'd', x: 1, y: 1, w: 1, h: 1 },
  ],
  width: 800,
  cols: 10,
  rowHeight: GRID_UNIT,
  margin: [0, 0],
  verticalCompact: false,
  // widgets: {
  //   a: {
  //     type: 'asset',
  //     content: {
  //       assetType: 'item',
  //       name: 'A',
  //     },
  //   },
  // },
});

export default function (state = initialState, action) {
  if (action === undefined) {
    return state;
  }

  switch (action.type) {
    case DASHBOARD_LAYOUT_CHANGE:
      return state.mergeDeepIn(['dashboard', 'layout'], action.layout);
    case DASHBOARD_CHANGE_WIDTH:
      return state.mergeDeepIn(['dashboard'], { width: action.width, cols: action.cols });
    case WIDGET_CHANGE_SIZE:
      return state;
    default:
      return state;
  }
}

// export default function (state = initialState, action) {
//   if (action === undefined) {
//     return state;
//   }

//   switch (action.type) {
//     case DASHBOARD_LAYOUT_CHANGE: {
//       // return state.mergeDeepIn(['dashboard', 'layout'], action.layout);
//       const margin = state.getIn(['dashboard', 'margin']).get(0);
//       const oldWidth = state.getIn(['dashboard', 'width']);
//       const rowHeight = state.getIn(['dashboard', 'rowHeight']);

//       const cols = (oldWidth + margin) / (rowHeight + margin);
//       const width = cols * rowHeight + (cols - 1) * margin;

//       return state.mergeDeepIn(['dashboard'], { cols, width }).mergeDeepIn(['dashboard', 'layout'], action.layout);
//     }
//     default:
//       return state;
//   }
// }
