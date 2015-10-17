import React from 'react';
import Constants from '../../constants/constants.es';
import InputForm from '../input-form/input-form.es';
import List from '../list/list.es';
import { Link } from 'react-router';

export default class App extends React.Component {
    render () {
        return (
            <div className={Constants.ViewClasses.APP_VIEW}>
                <label>{Constants.Labels.WELCOME}</label>
                <InputForm />
                <label>{Constants.Labels.TESTS_LIST}</label>
                <List dataSource={this.props.state.tests} checkedIndex={this.props.state.checkedIndex}/>
                <Link to={`${Constants.ViewRoutes.TEST_VIEW}${this.props.state.checkedIndex}`}>{Constants.Labels.START_TEST}</Link>
            </div>
        );
    }
}