import React from 'react';
import { Router, Route } from 'react-router';

import App from '../app/app.es';
import Test from '../test/test.es';
import Statistic from '../statistic/statistic.es';
import Result from '../result/result.es';

import { initialize } from '../../actions/state_actions.es';

export default class AppRouter extends React.Component {
    render () {
        return (
            <Router>
                <Route path="/" component={() => {
                    return <App state={this.props.state}/>;
                }}/>
                <Route path="/test/:testId" component={Test}/>
                <Route path="/statistic" component={Statistic}/>
                <Route path="/result" component={Result}/>
            </Router>
        );
    }

    componentDidMount () {
        initialize();
    }
}