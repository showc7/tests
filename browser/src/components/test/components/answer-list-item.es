import React from 'react';
import classnames from 'classnames';
import _ from 'lodash';
import Constants from '../../../constants/constants';
import { checkAnswer } from '../../../actions/state_actions';

export default class AnswerListItems extends React.Component {
   constructor(props, context) {
      super(props, context);
      this._onCLick = _.bind(this.onClick, this);
   }

   onClick (event) {
      checkAnswer(this.props.index);
   }

   render () {
      let classes = {},
           cssClasses;

      classes[Constants.Marks.CHECKED] = !!this.props.isChecked;
      classes[Constants.Marks.ALL_CHECKED] = !!this.props.isAllChecked;
      cssClasses = classnames(Constants.ComponentClasses.ANSWER_LIST_ITEM, classes);

      return (
           <div className={cssClasses} onClick={this._onCLick}>
               <div className='name'>{this.props.answer.text}</div>
           </div>
      );
   }
}
