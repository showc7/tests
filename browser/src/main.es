import React from 'react';
import AppRouter from './components/app_router/app_router';
import store from './store/store';

(() => {
    const container = document.body.getElementsByClassName('content')[0];

    store.subscribe(() => {
        React.render(<AppRouter state={store.getState().viewState}/>, container);
    });

    React.render(<AppRouter state={store.getState().viewState}/>, container);
})();
