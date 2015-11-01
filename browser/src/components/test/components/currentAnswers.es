import React from 'react';
import Constants from '../../../constants/constants.es';
import _ from 'lodash';

export default class QuestionAnswers extends React.Component {
   render () {
      var checked = 0,
         correct = 0;

      _.forEach((item) => {
         if(item.isCorrect) {
            correct++;
         }
         if(item.isCheked) {
            checked++;
         }
      });

      return (
         <div>
         {
            this.props.answers.map((answer, index) => {
               return <AnswerListItem answer={answer}
                  isChecked = {answer.isChecked}
                  isAllChecked = {checked === correct}/>;
            })
         }
         </div>
      );
   }
}
