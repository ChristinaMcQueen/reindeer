import Home from '../views/Home';
import TodoList from '../views/TodoList';
import Uploader from '../views/Uploader';

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
}, {
    name: 'uploader',
    icon: 'uploader',
    path: '/uploader',
    value: 'Uploader',
    component: Uploader
}];

export default Router;
