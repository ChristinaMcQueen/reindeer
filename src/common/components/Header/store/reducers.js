import { fromJS } from 'immutable';

import * as types from './actionTypes';

const preloadedState = fromJS({
    location: 'home'
});

const routerReducer = (state = preloadedState, action) => {
    switch (action.type) {
    case types.SET_ROUTER: {
        return state.set('location', action.payload);
    }
    default:
        return state;
    }
};

export default routerReducer;
