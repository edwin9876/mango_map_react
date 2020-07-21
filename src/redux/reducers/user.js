import {
    CREATE_USER,
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

export function createUser(payload){
    return { type:CREATE_USER,payload}
}
export function updateUser(payload){
    return { type:UPDATE_USER,payload}
}
export function removeUser(payload){
    return { type:REMOVE_USER,payload}
}

export function createFavBlog(payload){
    return { type:CREATE_FAVBLOG,payload}
}

export function removeFavBlog(payload){
    return { type:REMOVE_FAVBLOG,payload}
}

export function createUserDistrict(payload){
    return { type:CREATE_USERDISTRICT,payload}
}

export function removeUserDistrict(payload){
    return { type:REMOVE_USERDISTRICT,payload}
}

export function createUserChat(payload){
    return { type:CREATE_USERCHAT,payload}
}

export function removeUserChat(payload){
    return { type:REMOVE_USERCHAT,payload}
}