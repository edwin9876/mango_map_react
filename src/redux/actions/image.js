import {
    FETCH_ALLIMAGE,
    FETCH_IMAGE
} from '../constants/actionTypes'

import axios from 'axios'

require('dotenv').config()


export function fetchAllImages() {
    return async (dispatch) => {
        let res = await axios(`${process.env.REACT_APP_DEV_URL}image/public`)
        dispatch({ type: FETCH_ALLIMAGE, payload: res.data })
    }
}

export function fetchImage(payload) {
    return async (dispatch) => {
        let res = await axios(`${process.env.REACT_APP_DEV_URL}image/public/${payload.image_id}`)
        dispatch({ type: FETCH_IMAGE, payload: res.data })
    }
}