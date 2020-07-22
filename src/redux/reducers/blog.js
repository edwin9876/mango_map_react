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

const initialBlogState =
{
    posts: [],
    post:[],
    categories:[]
}

function blogReducer(state = initialBlogState, action) {
    switch (action.type) {
        case FETCH_ALLPOST:
            return {
                ...state,
                posts: [...action.payload]
            }
        case FETCH_POST:
            return {
                ...state,
                post: [...action.payload]
            }
        case FETCH_ALLCATEGORY:
            return {
                ...state,
                categories: [...action.payload]
            }
        case CREATE_NEWCATEGORY:
            return {
                ...state
            }
        case CREATE_COMMENT:
            return {
                ...state
            }
        case CREATE_POST:
            return {
                ...state
            }
        default:
            return state.posts
    }
}

export default blogReducer