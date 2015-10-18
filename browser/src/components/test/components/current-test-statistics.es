import React from 'react';
import Constants from '../../../constants/constants.es';
import FullTestStatistics from './full-test-statistics.es';

export default class CurrentTestStatistics extends React.Component {

    render () {
        let date = (new Date(0, 0, 0, 0, 0, this.props.state.currentTime, 0)),
            currentTime = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds(),
            leaveTime = null,
            component = null;

        date = (new Date(0, 0, 0, 0, 0, this.props.state.leaveTime, 0));
        leaveTime = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

        if (Constants.DisplayAllStatistic) {
            component = (<FullTestStatistics state={this.props.state}/>);
        }

        return (
            <div className={Constants.ComponentClasses.CURRENT_TEST_STATISTICS}>
                <div>
                    <label>{Constants.Labels.CURRENT_TEST_STATISTICS_CURRENT_TIME}</label>
                    <label>{currentTime}</label>
                </div>
                <div>
                    <label>{Constants.Labels.CURRENT_TEST_STATISTICS_LEAVE_TIME}</label>
                    <label>{leaveTime}</label>
                </div>
                <div>
                    <label>{Constants.Labels.CURRENT_TEST_STATISTICS_QUESTIONS_COUNT}</label>
                    <label>{this.props.state.questionsCount}</label>
                </div>
                {component}
            </div>
        );
    }
}
