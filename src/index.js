import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App';

import createStore from './store';

const store = createStore();

const appRoot = (
  <Provider store={store}>
    <App />
  </Provider>
);

console.log(appRoot);

// const appRoot = <App />;

render(appRoot, document.getElementById('root'));
