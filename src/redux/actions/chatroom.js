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

export function createChatroom(payload){
    return { type:CREATE_CHATROOM,payload}
}

export function createChatroomRecord(payload){
    return { type:CREATE_CHATROOMRECORD,payload}
}

export function createChatroomUser(payload){
    return { type:CREATE_CHATROOMUSER,payload}
}


export function updateChatroom(payload){
    return { type:UPDATE_CHATROOM,payload}
}

export function updateChatroomRecord(payload){
    return { type:UPDATE_CHATROOMRECORD,payload}
}

export function updateChatroomUser(payload){
    return { type:UPDATE_CHATROOMUSER,payload}
}

export function removeChatroom(payload){
    return { type:REMOVE_CHATROOM,payload}
}

export function removeChatroomRecord(payload){
    return { type:REMOVE_CHATROOMRECORD,payload}
}

export function removeChatroomUser(payload){
    return { type:REMOVE_CHATROOMUSER,payload}
}
