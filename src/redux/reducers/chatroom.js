import {
  CREATE_CHATROOM,
  CREATE_CHATROOMRECORD,
  CREATE_CHATROOMUSER,
  REMOVE_CHATROOMRECORD,
  REMOVE_CHATROOMUSER,
  REMOVE_CHATROOM,
  UPDATE_CHATROOM,
  UPDATE_CHATROOMRECORD,
  UPDATE_CHATROOMUSER,
  FETCH_ALLCHATROOM,
  FETCH_CHATROOM,
} from '../constants/actionTypes';

const initialChatroomState = {
  chatrooms: [],
  chatroom: [],
  chatroomRecord: [],
};

const chatroomReducer = (state = initialChatroomState, action) => {
  switch (action.type) {
    case FETCH_ALLCHATROOM:
      return {
        ...state,
        chatrooms: action.payload,
      };
    case FETCH_CHATROOM:
      return {
        ...state,
        chatroom: action.payload,
      };
    case CREATE_CHATROOM:
      return {
        ...state,
      };
    case CREATE_CHATROOMRECORD:
      return {
        ...state,
      };
    default:
      return {
        ...state,
      };
  }
};

export default chatroomReducer;
