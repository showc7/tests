// import Tests from '!json!./constants/tests.json';

import React from 'react';
import _ from 'lodash';
import { Router, Route } from 'react-router';

import App from './components/app/app.es';
import Test from './components/test/test.es';
import Statistic from './components/statistic/statistic.es';
import Result from './components/result/result.es';
import AppStore from './store/store.es';
import { initialize } from './actions/state_actions.es';

const content = document.body.getElementsByClassName('content')[0];
let subscriber;

const subscribe = (Component, store, element) => {
    return () => {
        unSubscribe();
        subscriber = store.subscribe(() => {
            React.render(<Component state={store.getState().viewState} />, element);
        });
        return <Component state={store.getState().viewState}/>;
    };
}

const unSubscribe = () => {
    if (_.isFunction(subscriber)) {
        subscriber();
    }
}

React.render((
    <Router>
        <Route path="/" component={subscribe(App, AppStore, content)}/>
        <Route path="/test/:testId" component={subscribe(Test, AppStore, content)}/>
        <Route path="/statistic" component={subscribe(Statistic, AppStore, content)}/>
        <Route path="/result" component={subscribe(Result, AppStore, content)}/>
    </Router>
), content);

initialize();