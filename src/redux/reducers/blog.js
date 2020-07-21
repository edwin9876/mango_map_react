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

const initialBlogState =
{
    blogs: []
}

function blogReducer(state = initialBlogState, action) {
    switch (action.type) {
        case FETCH_ALLBLOG:
            return {
                blogs: [...action.payload]
            }
        case FETCH_BLOG:
            return {
                
            }
        default:
            return state.blogs
    }
}