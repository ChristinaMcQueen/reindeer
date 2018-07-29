export const ROUTER = 'router/SET_ROUTER';

const setRouter = payload => ({
    type: ROUTER,
    payload
});

export default setRouter;