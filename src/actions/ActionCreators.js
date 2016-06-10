import {
  DASHBOARD_LAYOUT_CHANGE,
  DASHBOARD_CHANGE_WIDTH,

  UI_WINDOW_RESIZE,

  WIDGET_ADD_WIDGET,
  WIDGET_REMOVE_WIDGET,
  WIDGET_CHANGE_CONTENT,
  WIDGET_CHANGE_SIZE,

  DICE_WIDGET_ROLL,
  DICE_WIDGET_RESET,
} from './ActionTypes';

import uuid from 'node-uuid';

export function updateDashboardLayout(layout) {
  return {
    layout,
    type: DASHBOARD_LAYOUT_CHANGE,
  };
}

export function changeDashboardWidth(width, cols) {
  return {
    width,
    cols,
    type: DASHBOARD_CHANGE_WIDTH,
  };
}

export function windowResize(width, height) {
  return {
    width,
    height,
    type: UI_WINDOW_RESIZE,
  };
}

export function addWidget(widget) {
  // widget.id = uuid.v1();
  return {
    widget: Object.assign(widget, {
      id: uuid.v1(),
    }),
    type: WIDGET_ADD_WIDGET,
  };
}

export function removeWidget() {
  return {
    type: WIDGET_REMOVE_WIDGET,
  };
}

export function changeWidgetContent(content) {
  return {
    content,
    type: WIDGET_CHANGE_CONTENT,
  };
}

export function changeWidgetSize(id, width, height, sizeClass) {
  return {
    id,
    width,
    height,
    sizeClass,
    type: WIDGET_CHANGE_SIZE,
  };
}

export function diceWidgetRoll(id, sides) {
  const roll = Math.floor(Math.random() * sides) + 1;
  console.log(`Roll: ${roll} on d${sides}.`);
  return {
    id,
    sides,
    roll,
    type: DICE_WIDGET_ROLL,
  };
}

export function diceWidgetReset(id) {
  return {

  };
}
