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

  post: [
    {
      id: '4',
      title: 'Mini Trip in HK',
      author: 'Pullip123',
      content: `Hope. Fear. Excitement. Traveling for the first time produced a wave of emotions.

        When I left to travel the world on my first round-the-world trip, I didn’t know what to expect.
        
        Now, with fifteen years of travel experience under my belt, I know better. Traveling is second nature to me now. I land in an airport and I just go on autopilot.
        
        But, back then, I was as green as they come.
        
        To compensate for my lack of experience, I followed my guidebooks and wet my feet by going on organized tours. I was young and inexperienced and I made a lot of rookie travel mistakes.
        
        I know what it’s like to just be starting out and have a mind filled with questions, anxieties, and concerns.
        
        So, if you’re new to travel and looking for advice to help you prepare, here are 12 tips that I’d tell a new traveler to help them avoid some of my early mistakes:
      `,
      main_picture_url: `https://www.wowabouts.com/z-media/2018/10/Dragon's%20Back%201.jpg`,
      comments: [
        { id: '1', user_id: 'Jacky123', body: 'Quite inspiring!' },
        { id: '2', user_id: 'Edwin123', body: 'Quite surprising!' },
      ],
      modified: false,
      userDistrict_id: '',
    },
  ],

  posts: [
    {
      id: '1',
      title: 'My First Trip',
      author: 'Pullip',
      content: 'Very nice first trip I had in Hong Kong',
    },
    {
      id: '2',
      title: 'My Second Trip',
      author: 'Jacky',
      content: 'Very nice second trip I had in Hong Kong',
    },
    {
      id: '3',
      title: 'My Third Trip',
      author: 'Edwin',
      content: 'Very nice third trip I had in Hong Kong',
    },
  ],

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
