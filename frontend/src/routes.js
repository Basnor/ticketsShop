import React from 'react';
import { Route } from 'react-router-dom';

import Event from './components/Event';
import About from './components/About';
import Tickets from './components/Tickets';
import Basket from './components/Basket';

const BaseRouter = () => (
    <div>
        <Route exact path='/' component={About} />{" "}
        <Route exact path='/about' component={About} />{" "}
        <Route exact path='/event/' component={Event} />{" "}
        <Route exact path='/basket/' component={Basket} />{" "}
        <Route exact path='/tickets/' component={Tickets} />{" "}
    </div>
);

export default BaseRouter;