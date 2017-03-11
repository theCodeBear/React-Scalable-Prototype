// ACTION CREATORS FOR MODULE user

'use strict';

import * as t from './actionTypes';


const initUsers = () => {
  const users = [
    { id: '001', name: 'todd', age: 33 },
    { id: '002', name: 'kent', age: 33 }
  ];
  return {
    type: t.INIT,
    users
  };
};




export {
  initUsers
};
