import React from 'react';
import _ from 'lodash';
import Constants from '../../constants/constants';
import InputForm from './components/input-form';
import List from './components/list';
import { Link } from 'react-router';
import { startTest } from '../../actions/state_actions';

export default class App extends React.Component {
    isNameCorrect () {
        return !_.isEmpty(this.props.state.user.name);
    }

    isGroupCorrect () {
        return !_.isEmpty(this.props.state.user.group);
    }

    onClickHandler () {
        startTest();
    }

    render () {
        return (
            <div className={Constants.ViewClasses.APP_VIEW}>
                <label>{Constants.Labels.WELCOME}</label>
                <InputForm />
                <label>{Constants.Labels.TESTS_LIST}</label>
                <List dataSource={this.props.state.tests} checkedIndex={this.props.state.checkedIndex}/>
                <Link
                    onClick={this.onClickHandler}
                    to={
                    this.props.state.checkedIndex >= 0 &&
                    this.isNameCorrect() &&
                    this.isGroupCorrect() ?
                    `${Constants.ViewRoutes.TEST_VIEW}${this.props.state.checkedIndex}` : ''
                    }>{Constants.Labels.START_TEST}</Link>
            </div>
        );
    }
}