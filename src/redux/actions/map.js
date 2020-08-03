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
  CREATE_LOCATIONIMAGES,
} from '../constants/actionTypes';

import imgurHeader from '../helpers/imgurHeader'

import axios from 'axios';

require('dotenv').config()


export  function createLocationImages(images64, user_id,location_id) {
  return async (dispatch) => {
      let images_url = []
      console.log(images64)

      for (let img of images64) {
          let res = await axios.post('https://api.imgur.com/3/image',
              {
                  image: img
              },
              {
                  headers: imgurHeader()
              })
          images_url.push(res.data.data.link)

      }
      console.log(images_url)
      let res = await axios.post(`${process.env.REACT_APP_DEV_URL}map/location/${user_id}/${location_id}/images`,
          {
              images_url: images_url
          })

      return dispatch({ type: CREATE_LOCATIONIMAGES, payload: res.data })
  }
}

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
    let res = await axios(
      `${process.env.REACT_APP_DEV_URL}map/location/${location_id}`
    );
    dispatch({ type: FETCH_LOCATION, payload: res.data[0] });
    return res;
  };
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
    let res = await axios(
      `${process.env.REACT_APP_DEV_URL}map/district/`,
      payload
    );
    dispatch({ type: CREATE_DISTRICT, payload: res.data });
  };
}

export function updateDistrict(payload) {
  return { type: UPDATE_DISTRICT, payload };
}
export function removeDistrict(payload) {
  return { type: REMOVE_DISTRICT, payload };
}
