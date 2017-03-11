'use strict';

// import sub-reducers here:
import userReducer from '../modules/user/reducer';


const initialState = {
  user: { /* id: { id: '', name: '', age: int } */ }
};

const rootReducer = (currentState = initialState, action) => {
  const state = {
    user: userReducer(currentState.user, action)
  };
  return state;
};

export default rootReducer;
