import React from 'react';
import Statistics from './components/statistics.es'

export default class Statistic extends React.Component {
   getTestStatistics() {
      // implement getting of gloabal test statistics
   }

    render () {
        return (
            <div className={Constants.ViewClasses.STATISTIC_VIEW}>
                <Statistics state={this.getTestStatistics()}/>
            </div>
        );
    }
}
