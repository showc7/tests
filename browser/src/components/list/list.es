import React from 'react';
import Constants from '../../constants/constants.es';
import TestListItem from '../test-list-item/test-list-item.es';

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