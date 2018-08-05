import * as types from './actionTypes';

const setInputValue = value => ({
    type: types.SET_INPUT_VALUE,
    value
});
const addItem = () => ({
    type: types.ADD_ITEM
});
const delItem = index => ({
    type: types.DEL_ITEM,
    index
});

export default {
    setInputValue,
    addItem,
    delItem
};
