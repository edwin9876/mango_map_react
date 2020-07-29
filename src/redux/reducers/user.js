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

    default:
      return {
        ...state,
      };
  }
};

export default userReducer;
