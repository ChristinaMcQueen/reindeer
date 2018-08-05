import { fromJS } from 'immutable';

import * as types from './actionTypes';

const preloadedState = fromJS({
    inputValue: '',
    list: []
});

const todoReducer = (state = preloadedState, action) => {
    switch (action.type) {
    case types.SET_INPUT_VALUE:
    {
        return state.set('inputValue', action.value);
    }
    case types.ADD_ITEM:
    {
        return state.set('list', state.get('list').push(state.get('inputValue'))).set('inputValue', '');
    }
    case types.DEL_ITEM:
    {
        return state.set('list', state.get('list').splice(action.index, 1));
    }
    default:
        return state;
    }
};

export default todoReducer;
