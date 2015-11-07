import React from 'react';
import Constants from '../../../constants/constants';
import TestListItem from './test-list-item';

export default class List extends React.Component {
    render () {
        return (
            <div className={Constants.ComponentClasses.LIST}>
                {
                    this.props.dataSource.map((item, index) => {
                        return <TestListItem test={item} checked={index===this.props.checkedIndex}/>;
                    })
                }
            </div>
        );
    }
}