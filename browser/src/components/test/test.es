import './_test.scss';

import React from 'react';
import Constants from '../../constants/constants';
import CurrentTestStatistics from './components/current-test-statistics';
import Question from './components/question';
import Answers from './components/current-answers';
import NavigationBar from './components/navigationBar';

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
      const currentTest = this.getCurrentTestSctatistics();
        return (
            <div className={Constants.ViewClasses.TEST_VIEW}>
                <CurrentTestStatistics state={currentTest}/>
                <Question state={this.props.state.currentQuestion}/>
                <Answers answers={this.props.state.currentQuestion.variants}
                  isInput={this.props.state.currentQuestion.isInput}/>
                <NavigationBar questions={this.props.state.currentTest.questions}
                  currentQuestionIndex={currentTest.currentQuestionIndex}/>
            </div>
        );
    }
}
