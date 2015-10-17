import _ from 'lodash';
import ActionTypes from '../../actions/action_types.es';

const initialState = {
    user: {
        name: '',
        group: ''
    },

    tests: [],
    checkedIndex: -1
};

export function stateReducer(state = _.cloneDeep(initialState), action) {
    switch (action.type) {
        case ActionTypes.INITIALIZE:
            return _.assign(state, { tests: action.data });
        case ActionTypes.ON_USER_NAME_CHANGED:
            return _.assign(state, action.data);
        case ActionTypes.CHECK_TEST:
            return _.assign(state, { checkedIndex: action.data });
        default:
            return state;
    }
}