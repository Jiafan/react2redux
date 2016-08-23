import * as ActionType from '../constants/actionTypes';

function createStaticAction(text) {
  return {
    type: ActionType.STATIC_QUERY,
    text
  };
}

module.exports = createStaticAction;
