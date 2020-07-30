import {
    CREATE_USER,
    FETCH_ALLUSER,
    FETCH_USERLOCATION,
    FETCH_USER,
    UPDATE_USER,
    REMOVE_USER,
    CREATE_FAVPOST,
    REMOVE_FAVPOST,
    CREATE_USERLOCATION,
    REMOVE_USERLOCATION,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT,
    REGISTER_SUCCESS,
    REGISTER_REQUEST,
    REGISTER_FAILURE

} from '../constants/actionTypes'

import authHeader from '../helpers/authHeader'
import axios from 'axios'

export function login(email, password) {
    return async (dispatch) => {
        try {
            dispatch({ type: LOGIN_REQUEST, payload: email })
            let res = await axios.post('http://localhost:8000/auth/local-login', { email: email, password: password })
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
            let res = await axios.post('http://localhost:8000/auth/local-signup', { ...userInfo })
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
        let res = await axios('http://localhost:8000/user/all')
        dispatch({ type: FETCH_ALLUSER, payload: res.data })
    }
}

export function fetchUser(user_id) {
    return async (dispatch) => {
        console.log(user_id)
        let res = await axios(`http://localhost:8000/user/one/${user_id}`, {
            headers:authHeader()
        })
        console.log(res.data)
        dispatch({ type: FETCH_USER, payload: res.data })
    }
}

export function fetchUserLocation(user_id,location_id){
    
    return async(dispatch)=>{

        let res = await axios(`http://localhost:8000/user/${user_id}/tripDetails/${location_id}`,{
            headers:authHeader()
        })
        console.log(res.data)
        dispatch({ type:FETCH_USERLOCATION,payload:res.data[0]})
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
export function createUserLOCATION(payload) {
    return async (dispatch) => {
        let res = await axios.post(`https://localhost:8000/authorized/${payload.user_id}/LOCATION/${payload.LOCATION_id}`)
        dispatch({ type: CREATE_USERLOCATION, payload: res.data })
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


export function removeUserLOCATION(payload) {
    return { type: REMOVE_USERLOCATION, payload }
}


