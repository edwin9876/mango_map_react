
import {
    CREATE_NEWCATEGORY,
    FETCH_ALLCATEGORY,
    CREATE_POST,
    CREATE_COMMENT,
    REMOVE_COMMENT,
    UPDATE_POST,
    UPDATE_POSTCATEGORY,
    UPDATE_POSTIMAGE,
    UPDATE_COMMENT,
    REMOVE_POST,
    REMOVE_POSTCATEGORY,
    REMOVE_POSTIMAGE,
    FETCH_ALLPOST,
    FETCH_POST,
    FETCH_COMMENT,
} from '../constants/actionTypes'

import axios from 'axios'
import authHeader from '../helpers/authHeader'

require('dotenv').config()


console.log(process.env.REACT_APP_DEV_URL)

export function fetchComment() {
    return (dispatch) => {
        return axios(`${process.env.REACT_APP_DEV_URL}comment`)
            .then(res => {
                dispatch({ type: FETCH_COMMENT, payload: res.data })
            })

    }
}

export function updateComment(comment, comment_id) {
    console.log(comment)
    return (dispatch) => {
        return axios.put(`${process.env.REACT_APP_DEV_URL}blog/comment/${comment_id}`,
            comment
        )
            .then(res => {
                dispatch({ type: UPDATE_COMMENT, payload: res.data })
            })

    }
}

export function removeComment(comment_id) {
    return (dispatch) => {
        return axios.delete(`${process.env.REACT_APP_DEV_URL}blog/comment/${comment_id}`
        )
            .then(res => {
                dispatch({ type: REMOVE_COMMENT, payload:res.data })
            })
    }
}

    export function fetchAllPost() {
        return (dispatch) => {
            return axios(`${process.env.REACT_APP_DEV_URL}blog/all`)
                .then(res => {
                    dispatch({ type: FETCH_ALLPOST, payload: res.data })
                })

        }
    }
    export function fetchPost(blog_id) {
        return dispatch => {
            return axios(`${process.env.REACT_APP_DEV_URL}blog/${blog_id}`)
                .then(res => {
                    dispatch({ type: FETCH_POST, payload: res.data[0] })
                })
        }
    }
    export function fetchAllCategory() {
        return (dispatch) => {
            return axios(`${process.env.REACT_APP_DEV_URL}blog/categories/`)
                .then(res => {
                    dispatch({ type: FETCH_ALLCATEGORY, payload: res.data })
                })

        }
    }
    export function createNewCategory(payload) {
        return dispatch => {
            return axios.post(`${process.env.REACT_APP_DEV_URL}blog/categories/`, payload)
                .then(res => {
                    dispatch({ type: CREATE_NEWCATEGORY, payload: res.data })
                })
        }
    }
    export function createComment(comment) {
        console.log(comment)
        return dispatch => {
            return axios.post(`${process.env.REACT_APP_DEV_URL}blog/comment/`, comment)
                .then(res => {
                    dispatch({ type: CREATE_COMMENT, payload: res.data })
                })
        }
    }

    export function createPost(newBlog, user_id) {
        return dispatch => {
            return axios.post(`${process.env.REACT_APP_DEV_URL}blog`, {
                ...newBlog, user_id
            },
                {
                    headers: authHeader()
                },
            )
                .then(res => {
                    dispatch({ type: CREATE_POST, payload: res.data })
                    console.log(res.data)
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

    export function removePostCategory(payload) {
        return { type: REMOVE_POSTCATEGORY, payload }
    }
    export function removePostImage(payload) {
        return { type: REMOVE_POSTIMAGE, payload }
    }
