import { combineReducers } from 'redux';
import dashboard from './dashboard';
import ui from './ui';
import widgets from './widgets';
// import reducerName from './reducerName';

export default combineReducers({
  dashboard,
  ui,
  widgets,
  // reducerName,
});
