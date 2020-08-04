
import {
    FETCH_ALLPOST,
    FETCH_POST,
    CREATE_POST,
    CREATE_POSTIMAGES,
    FETCH_ALLCATEGORY,
    CREATE_COMMENT,
    REMOVE_COMMENT,
    UPDATE_COMMENT,
    CREATE_USERFAVPOST,
    REMOVE_USERFAVPOST,
    // CREATE_NEWCATEGORY,
    // UPDATE_POST,
    // UPDATE_POSTCATEGORY,
    // UPDATE_POSTIMAGE,
    // REMOVE_POST,
    // REMOVE_POSTCATEGORY,
    // REMOVE_POSTIMAGE,
    // FETCH_COMMENT,
} from '../constants/actionTypes'

import axios from 'axios'
import imgurHeader from '../helpers/imgurHeader'
import authHeader from '../helpers/authHeader'

require('dotenv').config()

//comment
export function createComment(comment) {
    console.log(comment)
    return dispatch => {
        return axios.post(`${process.env.REACT_APP_DEV_URL}blog/comment/`, comment)
            .then(res => {
                dispatch({ type: CREATE_COMMENT, payload: res.data })
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
                dispatch({ type: REMOVE_COMMENT, payload: res.data })
            })
    }
}

//Post

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

export function createPost(newBlog, user_id) {
    console.log(newBlog)
    console.log(user_id)
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

export function createPostImages(images64, blog_id) {
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
                }
            )
            images_url.push(res.data.data.link)

        }
        console.log(images_url)
        let res = await axios.post(`${process.env.REACT_APP_DEV_URL}blog/${blog_id}/images`,
            {
                images_url: images_url
            },
            {
                headers: authHeader()
            })

        return dispatch({ type: CREATE_POSTIMAGES, payload: res.data })
    }
}

//Fav Post
export function createFavPost(blog_id, user_id) {
    return dispatch => {
        return axios.post(`${process.env.REACT_APP_DEV_URL}blog/favBlog/${blog_id}/${user_id}`,
        {
            headers: authHeader()
        })
            .then(res => {
                console.log(res.data)
                dispatch({ type: CREATE_USERFAVPOST, payload: res.data })
            })
    }
}

export function removeFavPost(blog_id, user_id) {
    return dispatch => {
        return axios.delete(`${process.env.REACT_APP_DEV_URL}blog/favBlog/${blog_id}/${user_id}`,
        {
            headers: authHeader()
        })
            .then(res => {
                console.log(res.data)
                dispatch({ type: REMOVE_USERFAVPOST, payload: res.data })
            })
    }
}





// export function updatePost(payload) {
//     return { type: UPDATE_POST, payload }
// }
// export function updatePostCategory(payload) {
//     return { type: UPDATE_POSTCATEGORY, payload }
// }
// export function updatePostImage(payload) {
//     return { type: UPDATE_POSTIMAGE, payload }
// }
// export function removePost(payload) {
//     return { type: REMOVE_POST, payload }
// }

// export function removePostCategory(payload) {
//     return { type: REMOVE_POSTCATEGORY, payload }
// }
// export function removePostImage(payload) {

//     return { type: REMOVE_POSTIMAGE, payload }
// }

// export function fetchComment() {
//     return (dispatch) => {
//         return axios(`${process.env.REACT_APP_DEV_URL}comment`)
//             .then(res => {
//                 dispatch({ type: FETCH_COMMENT, payload: res.data })
//             })

//     }
// }

// export function createNewCategory(payload) {
//     return dispatch => {
//         return axios.post(`${process.env.REACT_APP_DEV_URL}blog/categories/`, payload)
//             .then(res => {
//                 dispatch({ type: CREATE_NEWCATEGORY, payload: res.data })
//             })
//     }
// }
