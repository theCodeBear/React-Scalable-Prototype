'use strict';

import React from 'react';
import { render } from 'react-dom';
import { safe } from '../../../../js/util';
import styles from './userDisplay.css';
import store from '../../../../js/store';


const UserDisplay = (props) => {
  console.log('user props', props);
  console.log('userDisplay', store.getState().user);
  return (
    <div>
      {
        props.users.map(u =>
          <div key={u.id}>
            <h3>UserDisplay</h3>
            <div>{u.id}</div>
            <div>{u.name}</div>
            <div>{u.age}</div>
          </div>
        )
      }
    </div>
  );
};


UserDisplay.propTypes = {
  users: React.PropTypes.array.isRequired
};


export default UserDisplay;
