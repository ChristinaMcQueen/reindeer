import * as types from './actionTypes';

const preloadedState = {
    inputValue: '',
    list: []
};

const todoReducer = (state = preloadedState, action) => {
    switch (action.type) {
    case types.SET_INPUT_VALUE:
    {
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    case types.ADD_ITEM:
    {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        return newState;
    }
    case types.DEL_ITEM:
    {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index, 1);
        return newState;
    }
    default:
        return state;
    }
};

export default todoReducer;
