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
  FETCH_CHATROOM_LIST,
  FETCH_CHATROOM,
  BACK_TO_CHAT_LIST,
  SET_MESSAGE,
  SEND_MESSAGE,
} from '../constants/actionTypes';

const initialChatroomState = {
  userId: 1,
  // Should be set according to the currentRoomId
  chatroomUserId: 1,
  username: 'Edwin',
  currentRoomId: null,
  roomList: [],
  messages: [''],
  conversation: [],
};

const chatroomReducer = (state = initialChatroomState, action) => {
  switch (action.type) {
    case FETCH_CHATROOM_LIST:
      return {
        ...state,
        roomList: action.payload,
      };

    case FETCH_CHATROOM:
      return {
        ...state,
        currentRoomId: action.roomId,
        conversation: action.payload,
      };

    case SET_MESSAGE:
      return {
        ...state,
        messages: [action.payload],
      };

    case SEND_MESSAGE:
      return {
        ...state,
        messages: [''],
        conversation: [...state.conversation, action.payload],
      };

    case CREATE_CHATROOM:
      return {
        ...state,
      };

    case CREATE_CHATROOMRECORD:
      return {
        ...state,
      };

    case BACK_TO_CHAT_LIST:
      return {
        ...state,
        currentRoomId: null,
      };

    default:
      return {
        ...state,
      };
  }
};

export default chatroomReducer;
