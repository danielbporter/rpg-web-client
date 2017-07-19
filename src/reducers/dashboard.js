import Immutable from 'immutable';

import {
  DASHBOARD_LAYOUT_CHANGE,
  DASHBOARD_CHANGE_WIDTH,
  WIDGET_ADD_WIDGET,
  WIDGET_CHANGE_SIZE,
} from '../actions/ActionTypes';

import {
  GRID_UNIT,
  GRID_MARGIN,
} from '../constants';

// const windowWidth = window.innerWidth;
// const margin = 5;
// const numCols = (windowWidth + margin) / (GRID_UNIT + margin);
// const gridWidth = GRID_UNIT * Math.floor(windowWidth / GRID_UNIT);

function getWidthAndCols() {
  function gridWidth(cols, gridUnit, marginSize) {
    return (cols * gridUnit) + ((cols - 1) * marginSize);
  }

  const screenWidth = window.innerWidth;
  let cols = 1;
  let width = gridWidth(cols, GRID_UNIT, GRID_MARGIN);
  while (width <= screenWidth) {
    cols++;
    width = gridWidth(cols, GRID_UNIT, GRID_MARGIN);
  }

  return [width, cols];
}

const initialWidthAndCols = getWidthAndCols();

// PETER NOTES: these change the size of the widgets 

const initialState = Immutable.fromJS({
  layout: {
    a: { i: 'a', x: 0, y: 0, w: 4, h: 2 },
    b: { i: 'b', x: 2, y: 0, w: 5, h: 1 },
    c: { i: 'c', x: 0, y: 2, w: 3, h: 2 },
    // d: { i: 'd', x: 1, y: 1, w: 1, h: 1 },
  },
  width: initialWidthAndCols[0],
  cols: initialWidthAndCols[3],
  rowHeight: GRID_UNIT,
  margin: [GRID_MARGIN, GRID_MARGIN],
  verticalCompact: false,
});

function layoutChange(state, action) {
  return state.mergeDeepIn(['layout'], action.layout);
}

function changeDashboardWidth(state, action) {
  return state.updateDeepIn(['dashboard'], { width: action.width, cols: action.cols });
}

function addWidget(state, action) {
  // const actionExample = {
  //   type: WIDGET_ADD_WIDGET,
  //   widget: {
  //     id: '123453',
  //     type: 'SomeWidget',
  //     sizeClass: 'normal',
  //     content: {},
  //   },
  // };
  // return state.setIn(['layout', action.widget.id], {
  //   i: action.widget.id,
  //   x: 0,
  //   y: 0,
  //   w: 1,
  //   h: 1,
  // });
  return state;
}

function changeWidgetSize(state, action) {
  return state.mergeDeepIn(['layout', action.id], { w: action.width, h: action.height });
}

export default function (state = initialState, action) {
  if (action === undefined) {
    return state;
  }

  switch (action.type) {
    case DASHBOARD_LAYOUT_CHANGE:
      return layoutChange(state, action);
    case DASHBOARD_CHANGE_WIDTH:
      return changeDashboardWidth(state, action);
    case WIDGET_ADD_WIDGET:
      return addWidget(state, action);
    case WIDGET_CHANGE_SIZE:
      return changeWidgetSize(state, action);
    default:
      return state;
  }
}
