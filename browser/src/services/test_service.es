import _ from 'lodash';
import dataSource from '!json!../tests/tests.json';

export default {
    getTests() {
        return _.map(dataSource.tests, (test, index) => {
            return {
                index,
                name: test.name,
                time: test.time
            };
        });
    },

    get(index) {
        return dataSource.tests[index];
    }
};