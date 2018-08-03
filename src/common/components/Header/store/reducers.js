import * as types from './actionTypes';

const preloadedState = {
    location: 'home'
};

const routerReducer = (state = preloadedState, action) => {
    switch (action.type) {
    case types.SET_ROUTER: {
        return {
            ...state,
            location: action.payload
        };
    }
    default:
        return state;
    }
};

export default routerReducer;
