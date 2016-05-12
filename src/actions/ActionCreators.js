import ActionTypes from './ActionTypes';

export function updateLayout(layout) {
  return {
    layout,
    type: ActionTypes.DASHBOARD_LAYOUT_CHANGE,
  };
}
