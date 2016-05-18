import Immutable from 'immutable';

const initialState = Immutable.fromJS([

]);

export default function (state = initialState, action) {
  if (action === undefined) {
    return state;
  }

  switch (action.type) {
    default:
      return state;
  }
}
