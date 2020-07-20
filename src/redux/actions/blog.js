import {
    CREATE_NEWCATEGORY,
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
            .then(res => res.json())
            .then(json => {
                dispatch({ type: FETCH_ALLBLOG, payload: json })
            })

    }
}
export function fetchBlog(blog_id) {
    return dispatch => {
        return axios(`http://localhost:8000/blog/${blog_id}`)
            .then(res => res.json())
            .then(json => {
                dispatch({ type: FETCH_BLOG, payload: json })
            })
    }
}
export function createNewCategory(payload) {
    return { type: CREATE_NEWCATEGORY, payload }
}
export function createComment(payload) {
    return { type: CREATE_COMMENT, payload }
}
export function createBlog(payload) {
    return { type: CREATE_BLOG, payload }
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
