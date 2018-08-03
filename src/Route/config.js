import Home from '../views/Home';
import TodoList from '../views/TodoList';

const Router = [{
    name: 'home',
    icon: 'home',
    path: '/',
    value: 'HOME',
    component: Home
}, {
    name: 'todolist',
    icon: 'calendar',
    path: '/todolist',
    value: 'Todo List',
    component: TodoList
}
];

export default Router;
