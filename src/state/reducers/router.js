import { ROUTER } from '../actions/router';

const preloadedState = {
    location: 'home'
};

const router = (state = preloadedState, action) => {
    switch (action.type) {
    case ROUTER:
        return { ...state, location: action.payload };
    default:
        return state;
    }
};

export default router;
