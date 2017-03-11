'use strict';
import React from 'react';
import {render} from 'react-dom';
import Navigator from '../../commonComponents/navigator/navigator.jsx';
import store from '../../js/store';
import styles from './home.css';
//import { FooDisplay } from '../../modules/foo';
import * as foo from '../../modules/foo';
const FooDisplay = foo.components.FooDisplay;

let Home = (props) => {
  console.log('foo import:', foo);
  return (
    <div>
      <Navigator />
      <h1> Home </h1>
      {store.getState().foo}
      <FooDisplay />
    </div>
  );
};

export default Home;
