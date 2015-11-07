import React from 'react';
import Constants from '../../../constants/constants';
import _ from 'lodash';
import AnswerListItem from './answer-list-item';

export default class QuestionAnswers extends React.Component {
   render () {
      var checked = 0,
         correct = 0;

      _.forEach(this.props.answers, (item) => {
         if(item.isCorrect) {
            correct++;
         }
         if(item.isChecked) {
            checked++;
         }
      });

      return (
         <div>
         {
            this.props.answers.map((answer, index) => {
               return <AnswerListItem
                  index={index}
                  answer={answer}
                  isChecked={!!answer.isChecked}
                  isAllChecked={checked === correct}/>;
            })
         }
         </div>
      );
   }
}
