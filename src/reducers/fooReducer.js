'use strict';

const UPDATE_FOO = 'UPDATE_FOO';

const fooReducer = (currentState = {}, action) => {
  let nextState;

  switch(action.type) {
    case UPDATE_FOO:
      nextState =  action.foo;
      return nextState;
    default:
      return currentState;
  }
};

export default fooReducer;




// ACTION CREATORS

const updateFoo = (foo) => {
  return {
    type: UPDATE_FOO,
    name: foo
  };
};



export {
  updateFoo
};
