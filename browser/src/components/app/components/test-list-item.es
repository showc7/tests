import React from 'react';
import classnames from 'classnames';
import _ from 'lodash';
import Constants from '../../../constants/constants';
import { checkTest } from '../../../actions/state_actions';

export default class TestListItem extends React.Component {

    constructor(props, context) {
        super(props, context);

        this._onCLick = _.bind(this.onClick, this);
    }

    onClick (event) {
        checkTest(this.props.test.index);
    }

    render () {
        let classes = {},
            cssClasses;

        classes[Constants.Marks.CHECKED] = !!this.props.checked;
        cssClasses = classnames(Constants.ComponentClasses.TEST_LIST_ITEM, classes);

        return (
            <div className={cssClasses} onClick={this._onCLick}>
                <div className='name'>{this.props.test.name}</div>
                <div className='time'>{this.props.test.time}</div>
            </div>
        );
    }
}
