import React from 'react';
import Constants from '../../constants/constants.es';
import CurrentTestStatistics from './components/current-test-statistics.es';
import Buttons from './components/buttons.es';
import Question from './components/question.es';

export default class Test extends React.Component {

    getCurrentTestSctatistics () {
        const currentTest = this.props.state.currentTest;
        return {
            currentTime: currentTest.currentTime,
            leaveTime: currentTest.leaveTime,
            correctAnswersCount: currentTest.correctAnswersCount,
            discorrectAnswerCount: currentTest.discorrectAnswerCount,
            questionsCount: currentTest.questionsCount,
            currentQuestionIndex: currentTest.currentQuestionIndex
        };
    }

    render () {
        return (
            <div className={Constants.ViewClasses.TEST_VIEW}>
                <CurrentTestStatistics state={this.getCurrentTestSctatistics()}/>
                <Question state={this.props.state.currentQuestion}/>
                <Answers answers={this.props.state.currentQuestion.variants}/>
                <Buttons state={this.props.state.currentTest.questions}/>
            </div>
        );
    }
}
