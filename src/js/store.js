'use strict';

import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';

const store = applyMiddleware(thunk)(createStore)(rootReducer);

export default store;
