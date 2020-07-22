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
    post:[],

    posts:[{id:'1', title:'My First Trip', author: 'Pullip', content: 'Very nice first trip I had in Hong Kong'},{id:'2', title:'My Second Trip', author: 'Jacky',content: 'Very nice second trip I had in Hong Kong'},{id:'3', title:'My Third Trip', author: 'Edwin',content: 'Very nice third trip I had in Hong Kong'}],
    
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
            return state
    }
}

export default blogReducer