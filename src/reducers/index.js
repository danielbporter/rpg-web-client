import { combineReducers } from 'redux';
import dashboard from './dashboard';
import ui from './ui';
import widgets from './widgets';
import headerNavToolbar from './headerNavToolbar';

// import reducerName from './reducerName';

export default combineReducers({
  dashboard,
  ui,
  widgets,
  headerNavToolbar,
  // reducerName,
});
