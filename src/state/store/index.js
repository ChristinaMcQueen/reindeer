import { createStore } from 'redux';

import rootReducer from '../reducers';

const storeConfig = (initialState = {
    router: {
        location: 'home'
    }
}) => {
    const store = createStore(
        rootReducer,
        initialState,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // eslint-disable-line
    );
    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers');
            store.replaceState(nextRootReducer);
        });
    }
    return store;
};

export default storeConfig;
