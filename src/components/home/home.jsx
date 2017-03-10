'use strict';
import React from 'react';
import {render} from 'react-dom';
import Navigator from '../navigator/navigator.jsx';
import store from '../../store/createStore';
import styles from './home.css';

let Home = (props) => (
  <div>
    <Navigator />
    <h1> Home </h1>
    {store.getState().foo}
  </div>
);

export default Home;
