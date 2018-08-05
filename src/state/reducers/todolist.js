import {
    SET_INPUT_VALUE,
    ADD_ITEM,
    DEL_ITEM
} from '../actions/todolist';

const preloadedState = {
    inputValue: '',
    list: []
};

const todolist = (state = preloadedState, action) => {
    switch (action.type) {
    case SET_INPUT_VALUE:
    {
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    case ADD_ITEM:
    {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        return newState;
    }
    case DEL_ITEM:
    {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index, 1);
        return newState;
    }
    default:
        return state;
    }
};

export default todolist;
