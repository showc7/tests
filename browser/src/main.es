import React from 'react';
import AppRouter from './components/app_router/app_router.es';
import store from './store/store.es';

(() => {
    const container = document.body.getElementsByClassName('content')[0];

    store.subscribe(() => {
        React.render(<AppRouter state={store.getState().viewState}/>, container);
    });

    React.render(<AppRouter state={store.getState().viewState}/>, container);
})();
