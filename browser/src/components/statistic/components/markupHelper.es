import React from 'react';

export default class markupHelper extends React.Component{
   render () {
      return (
         <div>
            <label>
               {this.props.state.title}
            </label>
            <label>
               {this.props.state.info}
            </label>
         </div>
      );
   }
}
