import _ from 'lodash';
import Store from '../store/store.es';
import ActionTypes from './action_types.es';
import TestService from '../services/test_service.es';
import Constants from '../constants/constants.es';

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

export function startTest () {
    let currentTest = TestService.get(Store.getState().viewState.checkedIndex);

    // load test
    Store.dispatch({
        type: ActionTypes.LOAD_TEST,
        data: currentTest
    });

    // start time
    Store.dispatch({
        type: ActionTypes.TIMER_START,
        data: currentTest.time
    });

    setInterval(() => {
        Store.dispatch({
            type: ActionTypes.TIMER_TICK
        });
    }, Constants.TimeInterval);
}