import _ from 'lodash';
import Store from '../store/store.es';

export function inputUser() {
    Store.dispatch({ type: 'single' });
}