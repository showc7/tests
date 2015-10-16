// import Tests from '!json!./constants/tests.json';

import React from 'react';
import { Router, Route } from 'react-router';

import App from './components/app/app.es';
import Test from './components/test/test.es';
import Statistic from './components/statistic/statistic.es';
import Result from './components/result/result.es';
import store from './store/store.es';

React.render((
    <Router>
        <Route path="/" component={<App state={store.getState('viewState')}/>}/>
        <Route path="/test/:testId" component={Test}/>
        <Route path="/statistic" component={Statistic}/>
        <Route path="/result" component={Result}/>
    </Router>
), document.body)