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
} from '../constants/actionTypes';

const initialChatroomState = {
  userId: 1,
  username: 'Jacky',
  currentRoomId: null,
  roomList: [
    {
      roomName: 'Pullip',
    },
    {
      roomName: 'Edwin',
    },
    {
      roomName: 'Jacky',
    },
    {
      roomName: 'The capstone project group',
    },
  ],
  messages: [],
  conversation: [
    { userId: 1, user: 'Jacky', message: 'hi' },
    { userId: 1, user: 'Jacky', message: "How you doin'?" },
    { userId: 2, user: 'Edwin', message: 'I am fine, thank you.' },
    { userId: 3, user: 'Pullip', message: 'I go to school by bus.' },
  ],
};

const chatroomReducer = (state = initialChatroomState, action) => {
  switch (action.type) {
    case FETCH_CHATROOM_LIST:
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
