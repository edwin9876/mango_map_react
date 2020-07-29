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
} from '../constants/actionTypes';

const initialBlogState = {
  images: [
    {
      id: '1',
      url: `https://www.wowabouts.com/z-media/2018/10/Dragon's%20Back%201.jpg`,
    },
    {
      id: '2',
      url: `https://www.wowabouts.com/z-media/2018/10/Dragon's%20Back%201.jpg`,
    },
    {
      id: '3',
      url: `https://www.wowabouts.com/z-media/2018/10/Dragon's%20Back%201.jpg`,
    },
    {
      id: '4',
      url: `https://www.wowabouts.com/z-media/2018/10/Dragon's%20Back%201.jpg`,
    },
    {
      id: '5',
      url: `https://www.wowabouts.com/z-media/2018/10/Dragon's%20Back%201.jpg`,
    },
    {
      id: '6',
      url: `https://www.wowabouts.com/z-media/2018/10/Dragon's%20Back%201.jpg`,
    },
  ],

  post: [],

  posts: [],

  categories: [],
};

function blogReducer(state = initialBlogState, action) {
  switch (action.type) {
    case FETCH_ALLPOST:
      return {
        ...state,
        posts: [...action.payload],
      };
    case FETCH_POST:
      return {
        ...state,
        post: [...action.payload],
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
