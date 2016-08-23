import React from 'react';
import ReactDom from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './containers/app.js';
import rootReducer from './reducers';

let store = createStore(rootReducer);
let root = document.getElementById('root');

let container = (
  <Provider store={store} key='provider'>
    <App />
  </Provider>
);


ReactDom.render(container,root);
