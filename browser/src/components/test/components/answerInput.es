import React from 'react';
import classnames from 'classnames';
import _ from 'lodash';
import Constants from '../../../constants/constants';
import InputTextChanged from '../../../actions/state_actions';

export default class AnswerInput extends React.Component {
   onChange(event) {
      InputTextChanged({text: event.target.value});
   }

   render () {
      return (
         <input type='text' onBlur={this.onChange}/>
      );
   }
}
