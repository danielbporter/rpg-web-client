import { DASHBOARD_LAYOUT_CHANGE, DASHBOARD_CHANGE_WIDTH, CHANGE_WIDGET_SIZE, UI_WINDOW_RESIZE } from './ActionTypes';

export function updateLayout(layout) {
  return {
    layout,
    type: DASHBOARD_LAYOUT_CHANGE,
  };
}

export function changeWidth(width, cols) {
  // const margin = state.getIn(['dashboard', 'margin']).get(0);
  // const oldWidth = state.getIn(['dashboard', 'width']);
  // const rowHeight = state.getIn(['dashboard', 'rowHeight']);

  // const cols = (oldWidth + margin) / (rowHeight + margin);
  // const width = cols * rowHeight + (cols - 1) * margin;

  // console.log('Cols: ' + cols);
  // console.log('Width: ' + width);

  return {
    width,
    cols,
    type: DASHBOARD_CHANGE_WIDTH,
  };
}

export function changeWidgetSize(id, width, height) {
  return {
    id,
    width,
    height,
    type: CHANGE_WIDGET_SIZE,
  };
}

export function windowResize(width, height) {
  return {
    width,
    height,
    type: UI_WINDOW_RESIZE,
  };
}
