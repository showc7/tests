import React from 'react';
import { Link } from 'react-router';
import { inputUser } from '../../actions/state_actions.es';
import Constants from '../../constants/constants.es';

export default class App extends React.Component {
    onNameChange (event) {
        inputUser({
            name: event.target.value
        });
    }

    render () {
        return (
            <div className={Constants.ViewClasses.APP_VIEW}>
                <div className=></div>
            </div>
        );
    }
}