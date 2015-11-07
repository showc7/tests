import React from 'react';
import Constants from '../../../constants/constants';
import BackgroundImage from './background-image';

export default class Question extends React.Component {
   render () {
      return (
         <div>
            <BackgroundImage
                className={Constants.ComponentClasses.BACKGROUND_IMAGE}
                text={this.props.state.text}
                src={Constants.DEFAULT_IMAGE_URL + this.props.state.img}
            />
         </div>
      );
   }
}
