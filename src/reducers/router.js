import { ROUTER } from '../actions/router';

const router = (state = { location: 'home' }, action) => {
    switch (action.type) {
    case ROUTER:
        return { ...state, location: action.payload };
    default:
        return state;
    }
};

export default router;
