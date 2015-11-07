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
      let test = dataSource.tests[index];

      test.questions = _.reduce(test.questions, (acc, item) => {
         let i = item;
         i.isCorrect = false;
         acc.push(i);
         return acc;
      }, []);

      return test;
    }
};
