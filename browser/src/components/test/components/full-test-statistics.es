import React from 'react';
import Constants from '../../../constants/constants.es';

export default class FullTestStatistics extends React.Component {
    render () {
        return (
            <div>
                <div>
                    <label>{Constants.Labels.CURRENT_TEST_STATISTICS_CORRECT_ANSWERSCOUNT}</label>
                    <label>{this.props.state.correctAnswersCount}</label>
                </div>
                <div>
                    <label>{Constants.Labels.CURRENT_TEST_STATISTICS_DISCORRECT_ANSWERS_COUNT}</label>
                    <label>{this.props.state.discorrectAnswerCount}</label>
                </div>
            </div>
        );
    }
}