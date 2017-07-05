import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App';
import createStore from './store';
import { windowResize } from './actions/ActionCreators';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

require('./styles/normalize.css');
require('./styles/rpg-styles.css');
require('./styles/rgl-styles.css');

const store = createStore();

window.addEventListener('resize', () =>
  store.dispatch(windowResize(window.innerWidth, window.innerHeight)));


const appRoot = (
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <Provider store={store}>
      <App />
    </Provider>
  </MuiThemeProvider>
);

const root = document.createElement('div');
document.body.appendChild(root);
render(appRoot, root);
