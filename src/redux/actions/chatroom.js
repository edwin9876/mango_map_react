import {
    CREATE_CHATROOM,
    CREATE_CHATROOMRECORD,
    CREATE_CHATROOMUSER,
    REMOVE_CHATROOMRECORD,
    REMOVE_CHATROOMUSER,
    REMOVE_CHATROOM,
    UPDATE_CHATROOM,
    UPDATE_CHATROOMRECORD,
    UPDATE_CHATROOMUSER,
    FETCH_ALLCHATROOM,
    FETCH_CHATROOM,
} from '../constants/action-types'

import axios from 'axios'

export function fetchAllChatroom() {
    return dispatch => {
        let res = await axios('http://localhost:8000/chatroom/all')
        dispatch({ type: FETCH_ALLCHATROOM, payload: res.data })
    }
}

export function fetchChatroom(payload) {
    return dispatch => {
        let res = await axios(`http://localhost:8000/chatroom/${payload.chatroom_id}`)
        dispatch({ type: FETCH_CHATROOM, payload: res.data })
    }
}
export function createChatroom(payload) {
    return dispatch => {

        let res = await axios.post(`http://localhost:8000/chatroom/`, payload)
        dispatch({ type: CREATE_CHATROOM, payload: res.data })
    }
}
export function createChatroomRecord(payload) {
    return dispatch => {

        let res = await axios.post(`http://localhost:8000/chatroom/${payload.chatroom_id}/record`, payload.chatRecord)
        dispatch({ type: CREATE_CHATROOMRECORD, payload: res.data })
    }
}


export function updateChatroom(payload) {
    return { type: UPDATE_CHATROOM, payload }
}

export function updateChatroomRecord(payload) {
    return { type: UPDATE_CHATROOMRECORD, payload }
}

export function updateChatroomUser(payload) {
    return { type: UPDATE_CHATROOMUSER, payload }
}

export function removeChatroom(payload) {
    return { type: REMOVE_CHATROOM, payload }
}

export function removeChatroomRecord(payload) {
    return { type: REMOVE_CHATROOMRECORD, payload }
}

export function removeChatroomUser(payload) {
    return { type: REMOVE_CHATROOMUSER, payload }
}
