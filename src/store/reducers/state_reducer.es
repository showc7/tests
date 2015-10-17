import _ from 'lodash';
import ActionTypes from '../../actions/action_types.es';

const initialState = {
    name: ''
};

export function stateReducer(state = _.cloneDeep(initialState), action) {
    switch (action.type) {
        case ActionTypes.ON_USER_NAME_CHANGED:
            return _.assign(state, { name: action.data.name });
        default:
            return state;
    }
}