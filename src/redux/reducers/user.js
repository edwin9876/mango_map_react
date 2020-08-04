import {
  CREATE_USER,
  FETCH_ALLUSER,
  FETCH_USERLOCATION,
  FETCH_USER,
  UPDATE_USER,
  REMOVE_USER,
  CREATE_FAVPOST,
  REMOVE_FAVPOST,
  CREATE_USERLOCATION,
  REMOVE_USERLOCATION,
} from '../constants/actionTypes';


const initialUserState = {
  users: [],
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
        user: {...action.payload},
      };
    case FETCH_USERLOCATION:
      return {
        ...state,
        user:{location:{...action.payload}},
      };
    case CREATE_USER:
      return {
        ...state,
      };
    case CREATE_FAVPOST:
      return {
        ...state,
      };
    case CREATE_USERLOCATION:
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
