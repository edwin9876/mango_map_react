import {
  CREATE_DISTRICT,
  UPDATE_DISTRICT,
  REMOVE_DISTRICT,
  FETCH_DISTRICT,
  FETCH_ALL_DISTRICTS,
  CHANGE_ZOOM_LEVEL,
  FETCH_ALL_LOCATIONS,
  FETCH_LOCATION,
  CREATE_LOCATIONIMAGES,
  CREATE_USERLOCATION,
  SAVE_LATLNG,
  CREATE_LOCATION,
  INITIALIZE_STATE,
} from "../constants/actionTypes";

const initialMapState = {
  districts: [],
  locations: [],
  zoom: 12,
};

const mapReducer = (state = initialMapState, action) => {
  switch (action.type) {
    case FETCH_ALL_DISTRICTS:
      return {
        ...state,
        districts: [...action.payload],
      };
    case FETCH_ALL_LOCATIONS:
      return {
        ...state,
        locations: [...action.payload],
      };
    case FETCH_LOCATION:
      return {
        ...state,
        location: action.payload,
      };
    case FETCH_DISTRICT:
      return {
        ...state,
        location: action.payload,
      };
    case CREATE_DISTRICT:
      return {
        ...state,
      };

    case CREATE_USERLOCATION:
      return {
        ...state,
      };
    case CHANGE_ZOOM_LEVEL:
      return {
        ...state,
        zoom: action.payload,
      };
    case CREATE_LOCATIONIMAGES:
      return {
        ...state,
      };
    case CREATE_LOCATION:
      return {
        ...state,
        new_location: action.payload[0],
      };
    case SAVE_LATLNG:
      return {
        ...state,
        lat_lng: action.payload,
      };

    default:
      return {
        ...state,
        districts: ["BUGGY"],
      };
  }
};

export default mapReducer;
