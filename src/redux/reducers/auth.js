import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILURE
} from '../constants/actionTypes'


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

        case REGISTER_REQUEST:
            return {
                signingUp: true,
            };
        case REGISTER_SUCCESS:
            return {
                signedUp: true
            };
        case REGISTER_FAILURE:
            return {
                signedUpFail: true,
            };

        default:
            return state
    }
}

export default authentication