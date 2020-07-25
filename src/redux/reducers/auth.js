import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT
} from '../constants/action-types'


let user = JSON.parse(localStorage.getItem('user'));

const initialState = user ? { loggedIn: true, user } : {};

 function authentication(state = initialState, action) {
    switch (action.type) {
    case LOGIN_REQUEST:
        return {
        loggingIn: true,
        user: action.payload
        };
    case LOGIN_SUCCESS:
        return {
        loggedIn: true,
        user: action.payload
        };
    case LOGIN_FAILURE:
        return {};
    case LOGOUT:
        return {};
    default:
        return state
    }
}

export default authentication