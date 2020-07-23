import {
    CREATE_NEWCATEGORY,
    FETCH_ALLCATEGORY,
    CREATE_POST,
    CREATE_COMMENT,
    REMOVE_COMMENT,
    UPDATE_POST,
    UPDATE_POSTCATEGORY,
    UPDATE_POSTIMAGE,
    REMOVE_POST,
    REMOVE_POSTCATEGORY,
    REMOVE_POSTIMAGE,
    FETCH_ALLPOST,
    FETCH_POST,
} from '../constants/action-types'

import axios from 'axios'

export function fetchAllPost() {
    return (dispatch) => {
        return axios("https://localhost:8000/blog/all")
            .then(res => {
                dispatch({ type: FETCH_ALLPOST, payload: res.data })
            })

    }
}
export function fetchPost(payload) {
    return dispatch => {
        return axios(`https://localhost:8000/blog/${payload.blog_id}`)
            .then(res => {
                dispatch({ type: FETCH_POST, payload: res.data })
            })
    }
}
export function fetchAllCategory() {
    return (dispatch) => {
        return axios("https://localhost:8000/blog/categories/")
            .then(res => {
                dispatch({ type: FETCH_ALLCATEGORY, payload: res.data })
            })

    }
}
export function createNewCategory(payload) {
    return dispatch => {
        return axios.post(`https://localhost:8000/blog/categories/`, payload)
            .then(res => {
                dispatch({ type: CREATE_NEWCATEGORY, payload: res.data })
            })
    }
}
export function createComment(payload) {
    return dispatch => {
        return axios.post(`https://localhost:8000/blog/comment/${payload.blog_id}`, payload.comment)
            .then(res => {
                dispatch({ type: CREATE_COMMENT, payload:res.data })
            })
    }
}
// creating new blog post
export function createPost(payload) {
    return dispatch => {
        return axios.post(`https://localhost:8000/blog`, payload)
            .then(res => {
                dispatch({ type: CREATE_POST, payload:res.data })
            })
    }
}

export function updatePost(payload) {
    return { type: UPDATE_POST, payload }
}
export function updatePostCategory(payload) {
    return { type: UPDATE_POSTCATEGORY, payload }
}
export function updatePostImage(payload) {
    return { type: UPDATE_POSTIMAGE, payload }
}
export function removePost(payload) {
    return { type: REMOVE_POST, payload }
}
export function removeComment(payload) {
    return { type: REMOVE_COMMENT, payload }
}
export function removePostCategory(payload) {
    return { type: REMOVE_POSTCATEGORY, payload }
}
export function removePostImage(payload) {
    return { type: REMOVE_POSTIMAGE, payload }
}
