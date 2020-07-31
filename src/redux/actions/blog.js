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
    FETCH_COMMENT,
} from '../constants/actionTypes'

import axios from 'axios'
import authHeader from '../helpers/authHeader'



export function fetchComment() {
    return (dispatch) => {
        return axios("http://localhost:8000/comment")
            .then(res => {
                dispatch({ type: FETCH_COMMENT, payload: res.data })
            })

    }
}


export function fetchAllPost() {
    return (dispatch) => {
        return axios("http://localhost:8000/blog/all")
            .then(res => {
                dispatch({ type: FETCH_ALLPOST, payload: res.data })
            })

    }
}
export function fetchPost(blog_id) {
    return dispatch => {
        return axios(`http://localhost:8000/blog/${blog_id}`)
            .then(res => {
                dispatch({ type: FETCH_POST, payload: res.data[0] })
            })
    }
}
export function fetchAllCategory() {
    return (dispatch) => {
        return axios("http://localhost:8000/blog/categories/")
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
export function createComment(comment) {
    console.log(comment)
    return dispatch => {
        return axios.post(`http://localhost:8000/blog/comment/`, comment)
            .then(res => {
                dispatch({ type: CREATE_COMMENT, payload:res.data })
            })
    }
}

export function createPost(newBlog,user_id) {
    return dispatch => {
        return axios.post(`http://localhost:8000/blog`, {
            ...newBlog,user_id
        },            
        {
            headers:authHeader()
        },
        )
            .then(res => {
                dispatch({ type: CREATE_POST, payload:res.data })
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
export function removeComment(payload) {
    return { type: REMOVE_COMMENT, payload }
}
export function removePostCategory(payload) {
    return { type: REMOVE_POSTCATEGORY, payload }
}
export function removePostImage(payload) {
    return { type: REMOVE_POSTIMAGE, payload }
}
