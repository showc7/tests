import React from 'react';
import { Router, Route } from 'react-router';

import App from '../app/app';
import Test from '../test/test';
import Statistic from '../statistic/statistic';
import Result from '../result/result';
import Constants from '../../constants/constants';

import { initialize } from '../../actions/state_actions';

export default class AppRouter extends React.Component {
    render () {
        return (
            <Router>
                <Route path={Constants.ViewRoutes.APP_VIEW} component={() => {
                    return <App state={this.props.state}/>;
                }}/>
                <Route path={Constants.ViewRoutes.TEST_VIEW + ':testId'} component={() => {
                    return <Test state={this.props.state}/>;
                }}/>
                <Route path={Constants.ViewRoutes.STATISTIC_VIEW} component={Statistic}/>
                <Route path={Constants.ViewRoutes.RESULT_VIEW} component={Result}/>
            </Router>
        );
    }

    componentDidMount () {
        initialize();
    }
}