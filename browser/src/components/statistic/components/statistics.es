import React from 'react';
import Constatns from '../../../constants/constants.es';
import markupHelper from './markupHelper.es';

export default class StatisticsForm extends React.Component{

   render () {
      return (
         <div className={Constatns.ComponentClasses.STATISTICS}>
            <div>
               <label>
                  {Constatns.Labels.TESTS_STATISTICS_TITLE}
               </label>
            </div>

            <markupHelper state={title= Constatns.Labels.TESTS_STATISTICS_TOTAL_TEST_TIME,info= this.props.state.totalTestTime}/>

            <markupHelper state={title= Constatns.Labels.TESTS_STATISTICS_USED_TESTS_TIME, info= this.usedTestsTime}/>

            <markupHelper state={title= Constants.Labels.TESTS_STATISTICS_TOTAL_QUESTIONS, info= this.totalQuestions}/>

            <markupHelper state={title= Constants.Labels.TESTS_STATISTICS_CORRECT_QUESTIONS, info= this.correctQuestions}/>

            <markupHelper state={title= Constants.Labels.TESTS_STATISTICS_DISCORRECT_QUESTIONS, info= this.discorrectQuestions}/>

            <markupHelper state={title= Constants.Labels.TESTS_STATISTICS_CORRECT_QUESTIONS_PERCENT,info= this.correctQuestionsPercent}/>

            <markupHelper state={title= Constants.Labels.TESTS_STATISTICS_DISCORRECT_QUESTIONS_PERCENT,info= this.discorrectQuestionsPercent}/>

            <markupHelper state={title= Constants.Labels.TESTS_STATISTICS_USERNAME,info= this.username}/>

            <markupHelper state={title= Constants.Labels.TESTS_STATISTICS_GROUP,info= this.group}/>

            <markupHelper state={title= Constants.Labels.TESTS_STATISTICS_TEST_NAME,info= this.testName}/>
         </div>
      );
   }
}
