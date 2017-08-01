// headerNavToolbarReducer

import Immutable from 'immutable';
import {
  WIDGET_ADD_WIDGET,
  WIDGET_REMOVE_WIDGET,
  WIDGET_CHANGE_CONTENT,
  WIDGET_CHANGE_SIZE,
  //togglenavbutton
  //account button 
  //other stuff button
} from '../actions/ActionTypes';

function removeWidget(state, action) {
  return state;
}

function changeWidgetContent(state, action) {
  return state;
}

function changeWidgetSizeClass(state, action) {
  return state.setIn([action.id, 'sizeClass'], action.sizeClass);
}

function diceWidgetRoll(state, action) {
  return state.updateIn([action.id, 'content'], (content) =>
    content
      .update('rolls', (rolls) => rolls.push(Immutable.List([action.roll, action.sides])))
      .update('sum', (sum) => sum + action.roll)
  );
}

function diceWidgetReset(state, action) {
  return state.updateIn([action.id, 'content'], (content) =>
    content
      .update('rolls', (rolls) => rolls.clear())
      .set('sum', 0)
  );
}

export default function (state = initialState, action) {
  if (action === undefined) {
    return state;
  }

  switch (action.type) {
    case WIDGET_ADD_WIDGET:
      return addWidget(state, action);
    case WIDGET_REMOVE_WIDGET:
      return removeWidget(state, action);
    case WIDGET_CHANGE_CONTENT:
      return changeWidgetContent(state, action);
    case WIDGET_CHANGE_SIZE:
      return changeWidgetSizeClass(state, action);
    case DICE_WIDGET_ROLL:
      return diceWidgetRoll(state, action);
    case DICE_WIDGET_RESET:
      return diceWidgetReset(state, action);
    default:
      return state;
  }
}
