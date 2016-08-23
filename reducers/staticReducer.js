import * as ActionType from '../constants/actionTypes';

let initialState = [];

function staticReducer( state = initialState, action) {
  switch (action.type) {
    case ActionType.STATIC_QUERY:{
      return [...state,action.text];
    }
    default:
      return state;
  }
}

module.exports = staticReducer;
