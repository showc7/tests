import React from 'react';
import _ from 'lodash';
import Constants from '../../../constants/constants';
import NavigationButton from './NavigationButton';

/*
 *
 */

export default class NavigationBar extends React.Component {
   render () {
      return (
         <div className={Constants.ComponentClasses.NAVIGATION_BAR} onClick={this._onCLick}> {
            this.props.questions.map((item, index) => {
               return <NavigationButton
                  index={index + 1}
                  isCorrect={item.isCorrect}
                  isCurrent={this.props.currentQuestionIndex===index}
               />;
            })
         }
         </div>

      );
   }
}
