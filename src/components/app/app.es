import React from 'react';
import Constants from '../../constants/constants.es';
import InputForm from '../input-form/input-form.es';
import List from '../list/list.es';

export default class App extends React.Component {
    render () {
        return (
            <div className={Constants.ViewClasses.APP_VIEW}>
                <label>{Constants.Labels.WELCOME}</label>
                <InputForm state={this.props.state.user}/>
                <label>{Constants.Labels.TESTS_LIST}</label>
                <List dataSource={this.props.state.tests} checkedIndex={this.props.state.checkedIndex}/>
                <button>{Constants.Labels.START_TEST}</button>
            </div>
        );
    }
}