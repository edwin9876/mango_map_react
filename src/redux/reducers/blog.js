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
    blogs: [],
    blog:[{id: '1', title: 'My mini trip', content: 'such a good journey', imgURL: 'https://media.timeout.com/images/105292288/630/472/image.jpg'}],
    categories:[]
}

function blogReducer(state = initialBlogState, action) {
    switch (action.type) {
        case FETCH_ALLBLOG:
            return {
                ...state,
                blogs: [...action.payload]
            }
        case FETCH_BLOG:
            return {
                ...state,
                blog: [...action.payload]
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
        case CREATE_BLOG:
            return {
                ...state
            }
        default:
            return state.blogs
    }
}

export default blogReducer