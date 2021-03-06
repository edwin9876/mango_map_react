import {
  FETCH_ALLCATEGORY,
  CREATE_POST,
  CREATE_USERFAVPOST,
  REMOVE_USERFAVPOST,
  CREATE_POSTIMAGES,
  FETCH_COMMENT,
  CREATE_COMMENT,
  UPDATE_COMMENT,
  FETCH_ALLPOST,
  FETCH_POST,
  // CREATE_NEWCATEGORY,
  // REMOVE_COMMENT,
  // UPDATE_POST,
  // UPDATE_POSTCATEGORY,
  // UPDATE_POSTIMAGE,
  // REMOVE_POST,
  // REMOVE_POSTCATEGORY,
  // REMOVE_POSTIMAGE,

} from '../constants/actionTypes';

const initialBlogState = {
  posts: [],
  post: [],
};

function blogReducer(state = initialBlogState, action) {
  switch (action.type) {

    case FETCH_ALLPOST:
      return {
        ...state,
        posts: [...action.payload]
      };
    case FETCH_POST:
      return {
        ...state,
        post: { ...action.payload },
      };
    case FETCH_ALLCATEGORY:
      return {
        ...state,
        categories: [...action.payload],
      };
    case CREATE_USERFAVPOST:
      return {
        ...state,
      };
    case REMOVE_USERFAVPOST:
      return {
        ...state,
      };

    case FETCH_COMMENT:
      return {
        ...state,
        comments: { ...action.payload },
      };

    case UPDATE_COMMENT:
      return {
        ...state,
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
        post:{...action.payload}
      };
    case CREATE_POSTIMAGES:
      console.log('created post images');
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
