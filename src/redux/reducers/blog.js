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

const initialBlogState =
{   
    blogs:[{id: '1', title: 'My mini trip', content: 'such a good journey'},
    {id: '2', title: 'My second trip', content: 'Same everyday'}

],
    categories:[]
}

function blogReducer(state = initialBlogState, action) {
    switch (action.type) {
        case FETCH_ALLBLOG:
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