import {
    CREATE_USER,
    FETCH_ALLUSER,
    FETCH_USER,
    UPDATE_USER,
    REMOVE_USER,
    CREATE_FAVBLOG,
    REMOVE_FAVBLOG,
    CREATE_USERDISTRICT,
    REMOVE_USERDISTRICT,
    CREATE_USERCHAT,
    REMOVE_USERCHAT,
    CREATE_USERCHATRECORD
} from '../constants/action-types'

import axios from 'axios'

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

export function createFavBlog(payload) {
    return async (dispatch) => {
        let res = await axios.post(`https://localhost:8000/authorized/${payload.user_id}/blog/${payload.blog_id}`)
        dispatch({ type: CREATE_FAVBLOG, payload: res.data })
    }

}
export function createUserDistrict(payload) {
    return async (dispatch) => {
        let res = await axios.post(`https://localhost:8000/authorized/${payload.user_id}/district/${payload.district_id}`)
        dispatch({ type: CREATE_USERDISTRICT, payload: res.data })
    }

}
export function createUserToUserChat(payload) {
    return async (dispatch) => {
        let res = await axios.post(`https://localhost:8000/authorized/${payload.user_id1}/userchat/${payload.user_id2}`)
        dispatch({ type: CREATE_USERCHAT, payload: res.data })
    }

}

export function createUserToUserChatRecord(payload) {
    return async (dispatch) => {
        let res = await axios.post(`https://localhost:8000/authorized/${payload.publisher_id}/userchatRecord/${payload.userChat_id}`,payload.chatRecord)
        dispatch({ type: CREATE_USERCHATRECORD, payload:res.data })
    } 
}


export function updateUser(payload) {
    return { type: UPDATE_USER, payload }
}

export function removeUser(payload) {
    return { type: REMOVE_USER, payload }
}


export function removeFavBlog(payload) {
    return { type: REMOVE_FAVBLOG, payload }
}


export function removeUserDistrict(payload) {
    return { type: REMOVE_USERDISTRICT, payload }
}


export function removeUserChat(payload) {
    return { type: REMOVE_USERCHAT, payload }
}