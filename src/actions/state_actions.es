import _ from 'lodash';
import Store from '../store/store.es';
import ActionTypes from './action_types.es';

export function inputUser(data) {
    Store.dispatch({
        type: ActionTypes.ON_USER_NAME_CHANGED,
        data
    });
}