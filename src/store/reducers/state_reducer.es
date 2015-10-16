import _ from 'lodash';

const initialState = {
    user: ''
};

export function stateReducer(state = _.cloneDeep(initialState), action) {
    switch (action.type) {
        default:
            return state;
    }
}