import Immutable from 'immutable';
import {
  WIDGET_ADD_WIDGET,
  WIDGET_REMOVE_WIDGET,
  WIDGET_CHANGE_CONTENT,
  WIDGET_CHANGE_SIZE,
  DICE_WIDGET_ROLL,
  DICE_WIDGET_RESET,
} from '../actions/ActionTypes';

//These change how/hype of widgets are reduced. 

const initialState = Immutable.fromJS({
  a: {
    id: 'a',
    type: 'AssetWidget',
    sizeClass: 'normal',
    content: {
      name: 'Explore the abandoned lighthouse',
      description: 'Abandoned light house might have treasure....',
      assetType: 'encounter',
    },
  },
  b: {
    id: 'b',
    type: 'AssetWidget',
    sizeClass: 'normal',
    content: {
      name: 'Barter for a pawned item',
      description: 'Susie pawned her father\'s sword, now she needs it back!',
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
  
  
  // e: {
  //   id: 'e',
  //   type: 'RanfiltratorWidget',
  //   sizeClass: 'Nrmal',
  //   content: {
  //     name: 'D',
  //     assetType:
  //   },
  // },

});

//function addWidget(state, action) {
   //const actionExample = {
     //type: WIDGET_ADD_WIDGET,
     //widget: {
       //id: '123453',
       //type: 'SomeWidget',
       //sizeClass: 'normal',
       //content: {},
     //},
   //};
  //return state.set(action.widget.id, action.widget);
//}

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
