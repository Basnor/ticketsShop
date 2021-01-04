import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Event from './components/Event';
import About from './components/About';
import Tickets from './components/Tickets';
import Basket from './components/Basket';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

const BaseRouter = () => (
    <Switch>
        <Route exact path='/' component={About} />{" "}
        <Route exact path='/about/' component={About} />{" "}
        <Route exact path='/event/' component={Event} />{" "}
        <Route exact path='/basket/' component={Basket} />{" "}
        <Route exact path='/tickets/' component={Tickets} />{" "}
        <Route exact path='/login/' component={Login} />{" "}
        <Route exact path='/register/' component={Register} />{" "}
    </Switch>
);

export default BaseRouter;