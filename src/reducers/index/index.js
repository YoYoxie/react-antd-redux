import { handleActions } from 'redux-actions';

const index = handleActions({
    ['SET/INDEX'](state, action) {
        return { ...state, username: action.username, password: action.password, };
    },
}, {
        content:{}
    });

export default index;