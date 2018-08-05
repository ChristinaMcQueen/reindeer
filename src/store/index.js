/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

const preloadedState = {};

const composeEnhancers = typeof window === 'object'
    && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
const enhancer = composeEnhancers(applyMiddleware(thunk));

const storeConfig = (initialState = preloadedState) => { // eslint-disable-line
    const store = createStore(
        rootReducer,
        // initialState,
        enhancer
    );
    if (module.hot) {
        module.hot.accept('./reducers', () => store.replaceState(require('./reducers')));
    }
    return store;
};

export default storeConfig;
