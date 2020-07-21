import {
    CREATE_DISTRICT,
    UPDATE_DISTRICT,
    REMOVE_DISTRICT,
    FETCH_DISTRICT,
    FETCH_ALLDISTRICT
} from '../constants/action-types'

import axios from 'axios'


export function fetchAllDistrict(){
    return async(dispatch)=>{
        let res = await axios('http://localhost:8000/map/districts')
        dispatch({ type:FETCH_ALLDISTRICT,payload:res.data})
    }
}

export function fetchDistrict(payload){
    return async(dispatch)=>{
        let res = await axios(`http://localhost:8000/map/district/${payload.district_id}`)
        dispatch({ type:FETCH_DISTRICT,payload:res.data})
    }
}

export function createDistrict(payload){
    return async(dispatch)=>{
        let res = await axios(`http://localhost:8000/map/district/`,payload)
        dispatch({ type:CREATE_DISTRICT,payload:res.data})
    }
}

export function updateDistrict(payload){
    return { type:UPDATE_DISTRICT,payload}
}
export function removeDistrict(payload){
    return { type:REMOVE_DISTRICT,payload}
}