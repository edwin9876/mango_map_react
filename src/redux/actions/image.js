import {
    FETCH_ALLIMAGE,
    FETCH_IMAGE
} from '../constants/action-types'

import axios from 'axios'

export function fetchAllImages() {
    return async (dispatch) => {
        let res = await axios('https://localhost:8000/image/all')
        dispatch({ type: FETCH_ALLIMAGE, payload: res.data })
    }
}

export function fetchImage(payload) {
    return async (dispatch) => {
        let res = await axios(`https://localhost:8000/image/${payload.image_id}`)
        dispatch({ type: FETCH_IMAGE, payload: res.data })
    }
}