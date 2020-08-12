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
  SET_ROOMNAME,
  SEND_MESSAGE,
  SEND_IMAGE,
  RECEIVE_MESSAGE,
  INITIALIZE_STATE,
  SET_GROUP_MAP_TRUE,
  SET_GROUP_MAP_FALSE,
} from '../constants/actionTypes';

const initialChatroomState = {
  userId: null,
  // Should be set according to the currentRoomId
  username: '',
  currentRoomId: null,
  roomList: [],
  messages: [''],
  conversation: [],
  roomname: '',
  groupMap: false,
};

const chatroomReducer = (state = initialChatroomState, action) => {
  switch (action.type) {
    case INITIALIZE_STATE:
      return {
        ...state,
        username: action.username,
        userId: action.userId,
      };
    case FETCH_CHATROOM_LIST:
      return {
        ...state,
        roomList: action.payload,
      };

    case SET_GROUP_MAP_TRUE:
      return {
        ...state,
        groupMap: true,
      };

    case SET_GROUP_MAP_FALSE:
      return {
        ...state,
        groupMap: false,
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

    case SET_ROOMNAME:
      return {
        ...state,
        roomname: action.payload,
      };

    case SEND_MESSAGE:
      return {
        ...state,
        messages: [''],
        conversation: [...state.conversation, { ...action.payload }],
      };

    case SEND_IMAGE:
      return {
        ...state,
        conversation: [
          ...state.conversation,
          {
            url: action.payload,
            chatroom_user_id: action.chatroomUserId,
            created_at: action.created_at,
          },
        ],
      };

    case RECEIVE_MESSAGE:
      return {
        ...state,
        conversation: [
          ...state.conversation,
          {
            user_name: action.username,
            body: action.message,
            created_at: action.created_at,
          },
        ],
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
        groupMap: false,
        currentRoomId: null,
        conversation: [],
        messages: [''],
      };

    default:
      return {
        ...state,
      };
  }
};

export default chatroomReducer;
