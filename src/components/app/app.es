import React from 'react';
import { Link } from 'react-router';
import { inputUser } from '../../actions/state_actions.es';
import Constants from '../../constants/constants.es';
import ActionTypes from '../../actions/action_types.es';

export default class App extends React.Component {
    onNameChange () {
        inputUser({
            type: ActionTypes.StateActions.ON_USER_NAME_CHANGED,
            data: event.target.value
        });
    }

    render () {
        console.log(this.props.state);
        return (
            <div className={Constants.ViewClasses.APP_VIEW}>
                <div className="text">{}</div>
                <input type="text" onChange={this.onNameChange} />
            </div>
        );
    }
}