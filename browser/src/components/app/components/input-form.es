import { inputUser } from '../../../actions/state_actions';
import React from 'react';
import Constants from '../../../constants/constants';

export default class InputForm extends React.Component {
    onNameChange (event) {
        inputUser({
            name: event.target.value
        });
    }

    onGroupChange (event) {
        inputUser({
            group: event.target.value
        });
    }

    render () {
        return (
            <div className={Constants.ComponentClasses.INPUT}>
                <label>{Constants.Labels.USERNAMES}</label>
                <input type="text" onChange={this.onNameChange}/>
                <label>{Constants.Labels.GROUP}</label>
                <input type="number" onChange={this.onGroupChange}/>
            </div>
        );
    }
}