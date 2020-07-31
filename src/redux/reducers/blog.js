import {
  CREATE_NEWCATEGORY,
  FETCH_ALLCATEGORY,
  CREATE_POST,
  FETCH_COMMENT,
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
  
} from '../constants/actionTypes';

const initialBlogState = {
  posts:[],
  post: [],
};

function blogReducer(state = initialBlogState, action) {
  switch (action.type) {
   
    case FETCH_ALLPOST:
      return {
        ...state,
        posts:[...action.payload]
      };
    case FETCH_POST:
      return {
        ...state,
        post: {...action.payload},
      };
    case FETCH_ALLCATEGORY:
      return {
        ...state,
        categories: [...action.payload],
      };
    case CREATE_NEWCATEGORY:
      return {
        ...state,
      };

      case FETCH_COMMENT:
        return {
          ...state,
          comments: {...action.payload},
        };

    case CREATE_COMMENT:
      console.log('created comment');
      return {
        ...state,
      };
    case CREATE_POST:
      console.log('created post');
      return {
        ...state,
      };
    default:
      return state;
  }
}

export default blogReducer;
