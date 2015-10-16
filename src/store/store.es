import { createStore, applyMiddleware, combineReducers } from 'redux';
import { stateReducer } from './reducers/state_reducer.es';

let reducer = combineReducers({ viewState: stateReducer }),
    store = createStore(reducer);

export default store;