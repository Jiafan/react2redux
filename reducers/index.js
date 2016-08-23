import { combineReducers } from 'redux';

import staticReducer from './staticReducer';

let rootReducer = combineReducers(
  {
    staticReducer
  }
);

module.exports = rootReducer;
