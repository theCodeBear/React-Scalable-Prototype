'use strict';

// import sub-reducers here:
import fooReducer from '../modules/foo/reducer';


const initialState = {
  foo: 'blah'
};

const rootReducer = (currentState = initialState, action) => {
  const state = {
    foo: fooReducer(currentState.foo, action)
  };
  return state;
};

export default rootReducer;
