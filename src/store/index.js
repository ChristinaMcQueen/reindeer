import { createStore } from 'redux';

import rootReducer from '../reducers';

const storeConfig = (initialState = {
    router: {
        location: 'home'
    }
}) => {
    const store = createStore(rootReducer, initialState);
    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers');
            store.replaceState(nextRootReducer);
        });
    }
    return store;
};

export default storeConfig;
