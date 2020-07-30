import {
    CREATE_LOCATION,
    UPDATE_LOCATION,
    REMOVE_LOCATION,
    FETCH_LOCATION,
    FETCH_ALLLOCATION,
    FETCH_USERLOCATION
} from '../constants/actionTypes'

import axios from 'axios'


export function fetchAllLocation(){
    return async(dispatch)=>{
        let res = await axios('https://localhost:8000/map/Locations')
        dispatch({ type:FETCH_ALLLOCATION,payload:res.data})
    }
}

export function fetchLocation(payload){
    return async(dispatch)=>{
        let res = await axios(`https://localhost:8000/map/Location/${payload.LOCATION_id}`)
        dispatch({ type:FETCH_LOCATION,payload:res.data})
    }
}

export function fetchUserLocation(payload){
    return async(dispatch)=>{
        let res = await axios(`https://localhost:8000/map/tripDetails/${payload.LOCATION_id}`)
        dispatch({ type:FETCH_LOCATION,payload:res.data})
    }
}

export function createLocation(payload){
    return async(dispatch)=>{
        let res = await axios(`https://localhost:8000/map/Location/`,payload)
        dispatch({ type:CREATE_LOCATION,payload:res.data})
    }
}

export function updateLocation(payload){
    return { type:UPDATE_LOCATION,payload}
}
export function removeLocation(payload){
    return { type:REMOVE_LOCATION,payload}
}