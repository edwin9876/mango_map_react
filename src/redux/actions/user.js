import {
    CREATE_USER,
    FETCH_ALLUSER,
    FETCH_USER,
    UPDATE_USER,
    REMOVE_USER,
    CREATE_FAVPOST,
    REMOVE_FAVPOST,
    CREATE_USERDISTRICT,
    REMOVE_USERDISTRICT,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT

} from '../constants/action-types'

import axios from 'axios'

export function login(email, password) {
    return async (dispatch) => {
        try {
            dispatch({ type: LOGIN_REQUEST, payload: email })
            let res = await axios.post('https://localhost:8000/auth/local-login', { email: email, password: password })
            console.log(res.data)
            localStorage.setItem('user', JSON.stringify(res.data.user))
            dispatch({ type: LOGIN_SUCCESS, payload: res.data.user })
        }
        catch (err) {
            dispatch({ type: LOGIN_FAILURE, payload: err })
        }
    }
}

export function logout() {
    localStorage.removeItem('user');
    return (dispatch) => {
        dispatch({ type: LOGOUT })
    }
}

export function fetchAllUser() {
    return async (dispatch) => {
        let res = await axios('https://localhost:8000/user/all')
        dispatch({ type: FETCH_ALLUSER, payload: res.data })
    }
}

export function fetchUser(payload) {
    return async (dispatch) => {
        let res = await axios(`https://localhost:8000/user/one/${payload.user_id}`)
        dispatch({ type: FETCH_USER, payload: res.data })
    }
}

export function createUser(payload) {
    return async (dispatch) => {
        let res = await axios.post(`https://localhost:8000/user/`, payload.user)
        dispatch({ type: CREATE_USER, payload: res.data })
    }
}

export function createFavPOST(payload) {
    return async (dispatch) => {
        let res = await axios.post(`https://localhost:8000/authorized/${payload.user_id}/POST/${payload.POST_id}`)
        dispatch({ type: CREATE_FAVPOST, payload: res.data })
    }

}
export function createUserDistrict(payload) {
    return async (dispatch) => {
        let res = await axios.post(`https://localhost:8000/authorized/${payload.user_id}/district/${payload.district_id}`)
        dispatch({ type: CREATE_USERDISTRICT, payload: res.data })
    }

}



export function updateUser(payload) {
    return { type: UPDATE_USER, payload }
}

export function removeUser(payload) {
    return { type: REMOVE_USER, payload }
}


export function removeFavPOST(payload) {
    return { type: REMOVE_FAVPOST, payload }
}


export function removeUserDistrict(payload) {
    return { type: REMOVE_USERDISTRICT, payload }
}


