import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './utils/history';


import Home from './pages/Home';
import Login from './pages/Login';

function Routes() {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" component={Login} />
            </Switch>
        </Router>
    )
}

export default Routes;