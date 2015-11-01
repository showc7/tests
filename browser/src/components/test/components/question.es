import React from 'react';
import Constants from '../../../constants/constants.es';
import BackgroundImage from './background-image.es';

export default class Question extends React.Component {
   render () {
      return (
         <div>
            <label>{this.props.state.text}</label>
         </div>
      );
   }
}
