import _ from 'lodash';
import Store from '../store/store.es';
import ActionTypes from './action_types.es';
import TestService from '../services/test_service.es';

export function inputUser (data) {
    Store.dispatch({
        type: ActionTypes.ON_USER_NAME_CHANGED,
        data
    });
}

export function initialize () {
    Store.dispatch({
        type: ActionTypes.INITIALIZE,
        data: TestService.getTests()
    });
}

export function checkTest (index) {
    Store.dispatch({
        type: ActionTypes.CHECK_TEST,
        data: index
    });
}