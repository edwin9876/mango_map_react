import {
  CREATE_DISTRICT,
  UPDATE_DISTRICT,
  REMOVE_DISTRICT,
  FETCH_DISTRICT,
  CREATE_LOCATION,
  UPDATE_LOCATION,
  REMOVE_LOCATION,
  FETCH_LOCATION,
  FETCH_ALL_DISTRICTS,
  CHANGE_ZOOM_LEVEL,
  FETCH_ALL_LOCATIONS,
} from '../constants/actionTypes';

import axios from 'axios';

require('dotenv').config()

export function fetchAllDistricts() {
  return async (dispatch) => {
    let res = await axios(`${process.env.REACT_APP_DEV_URL}map/districts`);
    dispatch({ type: FETCH_ALL_DISTRICTS, payload: res.data });
    return res;
  };
}
export function fetchAllLocations() {
  return async (dispatch) => {
    let res = await axios(`${process.env.REACT_APP_DEV_URL}map/locations`);
    dispatch({ type: FETCH_ALL_LOCATIONS, payload: res.data });
    return res;
  };
}
export function fetchLocation(location_id) {
  return async (dispatch) => {
    let res = await axios(`${process.env.REACT_APP_DEV_URL}map/location/${location_id}`);
    dispatch({ type: FETCH_LOCATION, payload: res.data[0] });
    return res;
  };
}

export function fetchLocation(location_id){
  return async(dispatch)=>{
      let res = await axios(`${process.env.REACT_APP_DEV_URL}map/location/${location_id}`)
      dispatch({ type:FETCH_LOCATION,payload:res.data[0]})
  }
}

export function changeZoomLevel(zoomLevel) {
  return (dispatch) => {
    dispatch({ type: CHANGE_ZOOM_LEVEL, payload: zoomLevel });
  };
}

export function fetchDistrict(payload) {
  return async (dispatch) => {
    let res = await axios(
      `${process.env.REACT_APP_DEV_URL}map/district/${payload.district_id}`
    );
    dispatch({ type: FETCH_DISTRICT, payload: res.data });
  };
}

export function createDistrict(payload) {
  return async (dispatch) => {
    let res = await axios(`${process.env.REACT_APP_DEV_URL}map/district/`, payload);
    dispatch({ type: CREATE_DISTRICT, payload: res.data });
  };
}

export function updateDistrict(payload) {
  return { type: UPDATE_DISTRICT, payload };
}
export function removeDistrict(payload) {
  return { type: REMOVE_DISTRICT, payload };
}
