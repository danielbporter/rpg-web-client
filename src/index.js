import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App';
import createStore from './store';
import { windowResize } from './actions/ActionCreators';

const store = createStore();

window.addEventListener('resize', () =>
  store.dispatch(windowResize(window.innerWidth, window.innerHeight)));

const appRoot = (
  <Provider store={store}>
    <App />
  </Provider>
);

// console.log(appRoot);

// const appRoot = <App />;

render(appRoot, document.getElementById('root'));
