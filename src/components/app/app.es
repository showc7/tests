import React from 'react';
import { Link } from 'react-router';
import { inputUser } from '../../actions/state_actions.es';

export default class App extends React.Component {

    handleClick () {
        console.log(arguments);
        inputUser();
    }

    render () {
        return (
            <div >
                App
                <Link to={`/statistic`}>stat</Link>
                <div onClick={this.handleClick}>Click me</div>
            </div>
        );
    }
}