import React from 'react';
import Constants from '../../constants/constants.es';
import CurrentTestStatistics from './components/current-test-statistics.es';
// import Question from './components/question.es';
// import Answer from './components/answer.es';
// import Paging from './components/Paging.es';

export default class Test extends React.Component {

    getCurrentTestSctatistics () {
        const currentTest = this.props.state.currentTest;
        return {
            currentTime: currentTest.currentTime,
            leaveTime: currentTest.leaveTime,
            correctAnswersCount: currentTest.correctAnswersCount,
            discorrectAnswerCount: currentTest.discorrectAnswerCount,
            questionsCount: currentTest.questionsCount
        };
    }

    render () {
        return (
            <div className={Constants.ViewClasses.TEST_VIEW}>
                <CurrentTestStatistics state={this.getCurrentTestSctatistics()}/>
            </div>
        );
    }
}