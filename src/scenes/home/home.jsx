'use strict';

import React from 'react';
import {render} from 'react-dom';
import Navigator from '../../commonComponents/navigator/navigator.jsx';
import store from '../../js/store';
import styles from './home.css';
import { safe } from '../../js/util';
import * as user from '../../modules/user';
const { UserDisplay } = user.components;


class Home extends React.Component {
  constructor(props) {
    super(props);
    store.dispatch(user.actions.initUsers());
    this.state = { users: safe(store.getState().user) };
    this.unsubscribe = store.subscribe(() => {
      this.setState({ users: safe(store.getState().user) });
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    console.log('user', user);
    return (
      <div>
        <Navigator />
        <h1> Home </h1>
        <UserDisplay users={this.state.users} />
      </div>
    );
  }
}

export default Home;
