import {
  CREATE_USER,
  FETCH_ALLUSER,
  FETCH_USER,
  UPDATE_USER,
  REMOVE_USER,
  CREATE_FAVPOST,
  REMOVE_FAVPOST,
  CREATE_USERDISTRICT,
  REMOVE_USERDISTRICT,
  CREATE_USERCHAT,
  REMOVE_USERCHAT,
  CREATE_USERCHATRECORD,
} from '../constants/action-types';

const initialUserState = {
  users: [
    {
      id: '1',
      user_name: 'pullip123',
      profile_picture_url: `https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRLWTAHflkoSso-p7fbKv7BecCWNSyYseuhfw&usqp=CAU`,
    },
    {
      id: '2',
      user_name: 'jacky123',
      profile_picture_url: `https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRIMey7cyC1XcqtyFcJlNhz7yP4oT1kAahWPw&usqp=CAU`,
    },
    {
      id: '3',
      user_name: 'edwin123',
      profile_picture_url: `https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSOqBpd6GqriW1DijpLyo7CCISdC_JSiYNXuw&usqp=CAU`,
    },
  ],
  user: [],
};

const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case FETCH_ALLUSER:
      return {
        ...state,
        users: [...action.payload],
      };
    case FETCH_USER:
      return {
        ...state,
        user: [...action.payload],
      };
    case CREATE_USER:
      return {
        ...state,
      };
    case CREATE_FAVPOST:
      return {
        ...state,
      };
    case CREATE_USERDISTRICT:
      return {
        ...state,
      };
    case CREATE_USERCHAT:
      return {
        ...state,
      };
    case CREATE_USERCHATRECORD:
      return {
        ...state,
      };
    default:
      return {
        ...state,
      };
  }
};

export default userReducer;
