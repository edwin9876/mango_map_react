import {
    CREATE_NEWCATEGORY,
    FETCH_ALLCATEGORY,
    CREATE_BLOG,
    CREATE_COMMENT,
    REMOVE_COMMENT,
    UPDATE_BLOG,
    UPDATE_BLOGCATEGORY,
    UPDATE_BLOGIMAGE,
    REMOVE_BLOG,
    REMOVE_BLOGCATEGORY,
    REMOVE_BLOGIMAGE,
    FETCH_ALLBLOG,
    FETCH_BLOG,
} from '../constants/action-types'

import axios from 'axios'

export function fetchAllBlog() {
    return (dispatch) => {
        return axios("http://localhost:8000/blog/all")
            .then(res => {
                dispatch({ type: FETCH_ALLBLOG, payload: res.data })
            })

    }
}
export function fetchBlog(payload) {
    return dispatch => {
        return axios(`http://localhost:8000/blog/${payload.blog_id}`)
            .then(res => {
                dispatch({ type: FETCH_BLOG, payload: res.data })
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
        return axios.post(`http://localhost:8000/blog/categories/`, payload)
            .then(res => {
                dispatch({ type: CREATE_NEWCATEGORY, payload: res.data })
            })
    }
}
export function createComment(payload) {
    return dispatch => {
        return axios.post(`http://localhost:8000/blog/comment/${payload.blog_id}`, payload.comment)
            .then(res => {
                dispatch({ type: CREATE_COMMENT, payload:res.data })
            })
    }
}
export function createBlog(payload) {
    return dispatch => {
        return axios.post(`http://localhost:8000/blog`, payload)
            .then(res => {
                dispatch({ type: CREATE_BLOG, payload:res.data })
            })
    }
}

export function updateBlog(payload) {
    return { type: UPDATE_BLOG, payload }
}
export function updateBlogCategory(payload) {
    return { type: UPDATE_BLOGCATEGORY, payload }
}
export function updateBlogImage(payload) {
    return { type: UPDATE_BLOGIMAGE, payload }
}
export function removeBlog(payload) {
    return { type: REMOVE_BLOG, payload }
}
export function removeComment(payload) {
    return { type: REMOVE_COMMENT, payload }
}
export function removeBlogCategory(payload) {
    return { type: REMOVE_BLOGCATEGORY, payload }
}
export function removeBlogImage(payload) {
    return { type: REMOVE_BLOGIMAGE, payload }
}
