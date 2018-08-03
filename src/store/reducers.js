import { combineReducers } from '../../../../Library/Caches/typescript/2.9/node_modules/redux';

import { routerReducer } from '../common/components/Header/store';
import { todoReducer } from '../views/TodoList/store';

export default combineReducers({
    router: routerReducer,
    todo: todoReducer
});
