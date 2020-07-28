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

import axios from 'axios';

export const fetchChatroomList = () => {
  return async (dispatch) => {
    let res = await axios('https://localhost:8000/chatroom/all');
    dispatch({ type: FETCH_CHATROOM_LIST, payload: res.data });
  };
};

export const fetchChatroom = (payload) => {
  return async (dispatch) => {
    let res = await axios(
      `https://localhost:8000/chatroom/${payload.chatroom_id}`
    );
    dispatch({ type: FETCH_CHATROOM, payload: res.data });
  };
};

export const createChatroom = (payload) => {
  return async (dispatch) => {
    let res = await axios.post(`https://localhost:8000/chatroom/`, payload);
    dispatch({ type: CREATE_CHATROOM, payload: res.data });
  };
};

export const createChatroomRecord = (payload) => {
  return async (dispatch) => {
    let res = await axios.post(
      `https://localhost:8000/chatroom/${payload.chatroom_id}/record`,
      payload.chatRecord
    );
    dispatch({ type: CREATE_CHATROOMRECORD, payload: res.data });
  };
};

export function updateChatroom(payload) {
  return { type: UPDATE_CHATROOM, payload };
}

export function updateChatroomRecord(payload) {
  return { type: UPDATE_CHATROOMRECORD, payload };
}

export function updateChatroomUser(payload) {
  return { type: UPDATE_CHATROOMUSER, payload };
}

export function removeChatroom(payload) {
  return { type: REMOVE_CHATROOM, payload };
}

export function removeChatroomRecord(payload) {
  return { type: REMOVE_CHATROOMRECORD, payload };
}

export function removeChatroomUser(payload) {
  return { type: REMOVE_CHATROOMUSER, payload };
}

// // State.messages is the input value the users type in
// setMessage = (message) => {
//   this.setState(
//     {
//       ...this.state,
//       messages: [message],
//     },
//     () => console.log(this.state.messages)
//   );
// };

// // State.conversation is the complete chat history and new messages
// // In the current chatroom
// setConversationHandler = (message) => {
//   this.setState({
//     ...this.state,
//     conversation: [...this.state.conversation, message],
//   });
// };

// // Sending the message to server
// // Will trigger the chat-message event in componentDidMount
// sendMessageHandler = (event) => {
//   event.preventDefault();
//   console.log(this.state.messages);
//   this.socket.emit(
//     'send-chat-message',
//     { message: this.state.messages },
//     () => {
//       console.log('sendMessageHandler callback is invoked');
//       // Adding the new message just sent to the state
//       this.setConversationHandler({
//         userId: this.state.userId,
//         user: this.state.username,
//         message: this.state.messages,
//       });

//       // Clearing the input field
//       this.setState({ ...this.state, messages: [''] });
//     }
//   );
// };

// // Fake data

// // This is invoked when user click a room div
// changeRoomIdHandler = (id) => {
//   this.setState({ ...this.state, currentRoomId: id });
// };
