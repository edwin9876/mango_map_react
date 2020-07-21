import {
    CREATE_DISTRICT,
    UPDATE_DISTRICT,
    REMOVE_DISTRICT,
    FETCH_DISTRICT,
    FETCH_ALLDISTRICT
} from '../constants/action-types'

export function createDistrict(payload){
    return { type:CREATE_DISTRICT,payload}
}
export function updateDistrict(payload){
    return { type:UPDATE_DISTRICT,payload}
}
export function removeDistrict(payload){
    return { type:REMOVE_DISTRICT,payload}
}