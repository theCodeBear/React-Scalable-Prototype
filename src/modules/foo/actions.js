// ACTION CREATORS FOR MODULE foo

'use strict';

import * as t from './constants';



const updateFoo = (foo) => {
  return {
    type: UPDATE_FOO,
    name: foo
  };
};



export {
  updateFoo
};
