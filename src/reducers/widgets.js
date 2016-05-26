import Immutable from 'immutable';
import {
  WIDGET_ADD_WIDGET,
  WIDGET_REMOVE_WIDGET,
  WIDGET_CHANGE_CONTENT,
  WIDGET_CHANGE_SIZE,
} from '../actions/ActionTypes';

const initialState = Immutable.fromJS({
  a: {
    id: 'a',
    type: 'NewWidgetWidget',
    sizeClass: 'thumbnail',
    content: {},
  },
  b: {
    id: 'b',
    type: 'AssetWidget',
    sizeClass: 'thumbnail',
    content: {
      name: 'N',
      assetType: 'npc',
    },
  },
  c: {
    id: 'c',
    type: 'AssetWidget',
    sizeClass: 'thumbnail',
    content: {
      name: 'E',
      assetType: 'encounter',
    },
  },
  d: {
    id: 'd',
    type: 'AssetWidget',
    sizeClass: 'thumbnail',
    content: {
      name: 'D',
      assetType: 'locale',
    },
  },
});

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
  return state.set(action.widget.id, action.widget);
}

function removeWidget(state, action) {
  return state;
}

function changeWidgetContent(state, action) {
  return state;
}

function changeWidgetSizeClass(state, action) {
  return state.setIn([action.id, 'sizeClass'], action.sizeClass);
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
    default:
      return state;
  }
}
