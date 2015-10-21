import React from 'react';

export default class Helper extends React.Component{
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
