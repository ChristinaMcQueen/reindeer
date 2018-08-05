export const SET_INPUT_VALUE = 'todolist/SET_INPUT_VALUE';
export const ADD_ITEM = 'todolist/ADD_ITEM';
export const DEL_ITEM = 'todolist/DEL_ITEM';

export const setInputValue = value => ({
    type: SET_INPUT_VALUE,
    value
});
export const addItem = () => ({
    type: ADD_ITEM
});
export const delItem = index => ({
    type: DEL_ITEM,
    index
});
