import { combineReducers } from 'redux';
import dashboard from './dashboard';
import ui from './ui';
import widgets from './widgets';
//import ToolbarExamplesSimple from './core/ToolbarExamplesSimple';

// import reducerName from './reducerName';

export default combineReducers({
  dashboard,
  ui,
  widgets,
  //ToolbarExamplesSimple,
  // reducerName,
});
