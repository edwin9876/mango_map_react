import {
    CREATE_USER,
    FETCH_ALLUSER,
    FETCH_USERLOCATION,
    FETCH_USER,
    UPDATE_USER,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT,
    REGISTER_SUCCESS,
    REGISTER_REQUEST,
    REGISTER_FAILURE
    // REMOVE_USER,
    // CREATE_FAVPOST,
    // REMOVE_FAVPOST,
    // CREATE_USERLOCATION,
    // REMOVE_USERLOCATION,

} from '../constants/actionTypes'

import authHeader from '../helpers/authHeader'
import axios from 'axios'

require('dotenv').config()

export function login(email, password) {
    return async (dispatch) => {
        try {
            dispatch({ type: LOGIN_REQUEST, payload: email })
            let res = await axios.post(`${process.env.REACT_APP_DEV_URL}auth/local-login`, { email: email, password: password })
            console.log(res.data)
            localStorage.setItem('user', JSON.stringify(res.data))

            dispatch({ type: LOGIN_SUCCESS, payload: res.data })
        }
        catch (err) {
            dispatch({ type: LOGIN_FAILURE, payload: err })
        }
    }
}

export function logout() {
    localStorage.removeItem('user');
    return { type: LOGOUT }
}

export function signUp(userInfo) {
    return async (dispatch) => {
        try {
            dispatch({ type: REGISTER_REQUEST, payload: userInfo })
            let res = await axios.post(`${process.env.REACT_APP_DEV_URL}auth/local-signup`, { ...userInfo })
            console.log(res.data)
            // localStorage.setItem('user', JSON.stringify(res.data.user))

            dispatch({ type: REGISTER_SUCCESS, payload: res.data.user })
        }
        catch (err) {
            dispatch({ type: REGISTER_FAILURE, payload: err })
        }
    }
}

export function fetchAllUser() {
    return async (dispatch) => {
        let res = await axios(`${process.env.REACT_APP_DEV_URL}user/all`)
        dispatch({ type: FETCH_ALLUSER, payload: res.data })
    }
}

export function fetchUser(user_id) {
    return async (dispatch) => {
        console.log(user_id)
        let res = await axios(`${process.env.REACT_APP_DEV_URL}user/one/${user_id}`, {
            headers: authHeader()
        })
        console.log(res.data)
        dispatch({ type: FETCH_USER, payload: res.data })
    }
}

export function fetchUserLocation(user_id, location_id) {

    return async (dispatch) => {

        let res = await axios(`${process.env.REACT_APP_DEV_URL}user/${user_id}/tripDetails/${location_id}`, {
            headers: authHeader()
        })
        console.log(res.data)
        dispatch({ type: FETCH_USERLOCATION, payload: res.data[0] })
    }
}

export function createUser(payload) {
    return async (dispatch) => {
        let res = await axios.post(`${process.env.REACT_APP_DEV_URL}user/`, payload.user)
        dispatch({ type: CREATE_USER, payload: res.data })
    }
}

export function updateUser(payload) {
    return async (dispatch) => {
        let res = await axios.put(`${process.env.REACT_APP_DEV_URL}user/one/${payload.id}`,
            {
                ...payload
            },
            {
                headers: authHeader()
            })
        dispatch({ type: UPDATE_USER, payload: res.data })
    }
}

// export function createUserLOCATION(payload) {
//     return async (dispatch) => {
//         let res = await axios.post(`${process.env.REACT_APP_DEV_URL}authorized/${payload.user_id}/LOCATION/${payload.LOCATION_id}`)
//         dispatch({ type: CREATE_USERLOCATION, payload: res.data })
//     }
// }

// export function removeUser(payload) {
//     return { type: REMOVE_USER, payload }
// }


// export function removeFavPOST(payload) {
//     return { type: REMOVE_FAVPOST, payload }
// }

// export function createFavPOST(payload) {
//     return async (dispatch) => {
//         let res = await axios.post(`${process.env.REACT_APP_DEV_URL}authorized/${payload.user_id}/POST/${payload.POST_id}`)
//         dispatch({ type: CREATE_FAVPOST, payload: res.data })
//     }
// }


// export function removeUserLOCATION(payload) {
//     return { type: REMOVE_USERLOCATION, payload }
// }


