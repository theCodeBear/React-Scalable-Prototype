import React from 'react';
import { Router, Route, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';
import { render } from 'react-dom';
import Home from './scenes/home/home.jsx';
import Page2 from './scenes/page2/page2.jsx';
import store from './js/store';

const appHistory = useRouterHistory(createHashHistory)({queryKey: false});

render (
  <Router history={appHistory}>
    <Route path='/' component={Home} />
    <Route path='/page2' component={Page2} />
  </Router>,
  document.getElementById('app')
);
