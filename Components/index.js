import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,browserHistory} from 'react-router';
import user from './modules/User';
import createHistory from 'history/createBrowserHistory';


ReactDOM.render((
    <Router history={createHistory()}>
    <Route path="/" component={user} />
    </Router>),
  document.getElementById('root')
);
