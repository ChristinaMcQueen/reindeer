import { combineReducers } from 'redux';

import router from './router';
import todolist from './todolist';

export default combineReducers({
    router,
    todolist
});
