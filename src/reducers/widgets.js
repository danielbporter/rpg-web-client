import Immutable from 'immutable';
import {
  WIDGET_ADD_WIDGET,
  WIDGET_REMOVE_WIDGET,
  WIDGET_CHANGE_CONTENT,
  WIDGET_CHANGE_SIZE,
  DICE_WIDGET_ROLL,
  DICE_WIDGET_RESET,
} from '../actions/ActionTypes';

const initialState = Immutable.fromJS({
  a: {
    id: 'a',
    type: 'AssetWidget',
    sizeClass: 'thumbnail',
    content: {
      name: 'Explore the abandoned lighthouse',
      slug: 'Abandoned light house might have treasure....',
      description: '@#$%@#%',
      assetType: 'encounter',
    },
  },
  b: {
    id: 'b',
    type: 'AssetWidget',
    sizeClass: 'normal',
    content: {
      name: 'Barter for a pawned item',
      slug: 'Susie pawned her father\'s sword, now she needs it back!',
      description: '@#$%@#%',
      assetType: 'encounter',
    },
  },
  c: {
    id: 'c',
    type: 'DiceWidget',
    sizeClass: 'normal',
    content: {
      dice: [20, 6],
      sum: 8,
      rolls: [[8, 20]],
    },
  },
  // d: {
  //   id: 'd',
  //   type: 'AssetWidget',
  //   sizeClass: 'thumbnail',
  //   content: {
  //     name: 'D',
  //     assetType: 'locale',
  //   },
  // },
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
      .update('sum', 0)
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
