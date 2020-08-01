import {
    CREATE_LOCATION,
    UPDATE_LOCATION,
    REMOVE_LOCATION,
    FETCH_LOCATION,
    FETCH_ALLLOCATION,
    FETCH_USERLOCATION
} from '../constants/actionTypes'

import axios from 'axios'

require('dotenv').config()

export function fetchAllLocation(){
    return async(dispatch)=>{
        let res = await axios(`${process.env.REACT_APP_DEV_URL}map/locations`)
        dispatch({ type:FETCH_ALLLOCATION,payload:res.data})
    }
}

export function fetchLocation(location_id){
    return async(dispatch)=>{
        let res = await axios(`${process.env.REACT_APP_DEV_URL}map/location/${location_id}`)
        dispatch({ type:FETCH_LOCATION,payload:res.data[0]})
    }
}

export function fetchUserLocation(payload){
    return async(dispatch)=>{
        let res = await axios(`${process.env.REACT_APP_DEV_URL}map/tripDetails/${payload.LOCATION_id}`)
        dispatch({ type:FETCH_LOCATION,payload:res.data})
    }
}

export function createLocation(payload){
    return async(dispatch)=>{
        let res = await axios(`${process.env.REACT_APP_DEV_URL}map/location/`,payload)
        dispatch({ type:CREATE_LOCATION,payload:res.data})
    }
}

export function updateLocation(payload){
    return { type:UPDATE_LOCATION,payload}
}
export function removeLocation(payload){
    return { type:REMOVE_LOCATION,payload}
}