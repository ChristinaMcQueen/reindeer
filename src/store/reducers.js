import { combineReducers } from 'redux-immutable';

import { routerReducer } from '../common/components/Header/store';
import { todoReducer } from '../views/TodoList/store';

export default combineReducers({
    router: routerReducer,
    todo: todoReducer
});
