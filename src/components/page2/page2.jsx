'use strict';
import React from 'react';
import {render} from 'react-dom';
import Navigator from '../navigator/navigator.jsx';
import styles from './page2.css';

let Page2 = (props) => (
  <div>
    <Navigator />
    <h1> Page 2 </h1>
  </div>
);

export default Page2;
