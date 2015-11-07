import React from 'react';
import classnames from 'classnames';
import _ from 'lodash';
import Constants from '../../../constants/constants';
import { changeQuestion } from '../../../actions/state_actions';

/*
 * isCorrect
 * isCurrent
 * index
 */

export default class NavigationButton extends React.Component {
   constructor(props, context) {
      super(props, context);
      this._onClick = _.bind(this.onClick, this);
   }

   onClick (event) {
      changeQuestion(this.props.index);
   }

   render () {
      let classes = {},
           cssClasses;

      classes[Constants.Marks.CORRECT] = !!this.props.isCorrect;
      classes[Constants.Marks.INCORRECT] = !this.props.isCorrect;
      classes[Constants.Marks.CURRENT] = !!this.props.isCurrent;
      cssClasses = classnames(Constants.ComponentClasses.NAVIGATION_BUTTON_ITEM, classes);

      return (
         <div className='navigationButtonItem' onClick={this._onClick}>{this.props.index}</div>
      );
   }
}
