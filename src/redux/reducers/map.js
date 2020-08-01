import {
  CREATE_LOCATION,
  UPDATE_LOCATION,
  REMOVE_LOCATION,
  FETCH_LOCATION,
  FETCH_ALLLOCATION
} from '../constants/actionTypes';

const initialMapState = {
  locations: [],
  location: [],
};

const mapReducer = (state = initialMapState, action) => {
  switch (action.type) {
    case FETCH_ALLLOCATION:
      return {
        ...state,
        locations: [...action.payload],
      };
    case FETCH_LOCATION:
      return {
        ...state,
        location: action.payload,
      };
    case CREATE_LOCATION:
      return {
        ...state,
      };
    default:
      return {
        ...state,
      };
  }
};

export default mapReducer;
