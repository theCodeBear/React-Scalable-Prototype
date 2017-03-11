'use strict';

import * as t from './actionTypes';


const userReducer = (currentState = {}, action) => {
  let nextState;

  switch(action.type) {
    case t.INIT:
      nextState = action.users;
      return nextState;
    default:
      return currentState;
  }
};

export default userReducer;

