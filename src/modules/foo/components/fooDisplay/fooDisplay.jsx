'use strict';

import React from 'react';
import { render } from 'react-dom';
import { safe } from '../../../../js/util';
import styles from './fooDisplay.css';
import store from '../../../../js/store';


const FooDisplay = (props) => {
  console.log('fooDisplay', store.getState().foo);
  return (
    <div>FooDisplay</div>
  );
};


export default FooDisplay;
