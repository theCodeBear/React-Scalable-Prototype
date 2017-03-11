'use strict';

import * as t from './actionTypes';




const fooReducer = (currentState = {}, action) => {
  let nextState;

  switch(action.type) {
    case t.UPDATE_FOO:
      nextState =  action.foo;
      return nextState;
    default:
      return currentState;
  }
};

export default fooReducer;

