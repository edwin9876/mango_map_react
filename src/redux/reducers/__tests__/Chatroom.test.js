import chatroomReducer from '../chatroom';
import {
  SET_MESSAGE,
  FETCH_CHATROOM,
  FETCH_CHATROOM_LIST,
} from '../../constants/actionTypes';

it('handles actions of type SET_MESSAGE', () => {
  const action = {
    type: SET_MESSAGE,
    payload: 'jaisodjo',
  };

  const newState = chatroomReducer([], action);
  expect(newState.messages).toEqual(['jaisodjo']);
});

it('handles actions of type FETCH_CHATROOM_LIST', () => {
  const data = [
    {
      id: 1,
      room_name: 'Capstone Project',
      descriptions: 'des1',
      chatroom_id: 1,
      user_id: 1,
    },
    {
      id: 4,
      room_name: 'test2',
      descriptions: 'des3',
      chatroom_id: 3,
      user_id: 1,
    },
    {
      id: 5,
      room_name: 'test3',
      descriptions: 'des3',
      chatroom_id: 3,
      user_id: 1,
    },
    {
      id: 6,
      room_name: 'test4',
      descriptions: 'des3',
      chatroom_id: 3,
      user_id: 1,
    },
  ];

  const action = {
    type: FETCH_CHATROOM_LIST,
    payload: data,
  };

  const newState = chatroomReducer([], action);
  expect(newState.roomList).toEqual(data);
});

it('handles actions of type FETCH_CHATROOM', () => {
  const chatroomChatRecords = [
    {
      id: 1,
      body: 'Hi, where are you!',
      chatroom_user_id: 1,
      created_at: '2020-07-28T23:56:11.913Z',
      updated_at: '2020-07-28T23:56:11.913Z',
      user_name: 'Edwin',
    },
    {
      id: 2,
      body: 'I am Five thank you',
      chatroom_user_id: 1,
      created_at: '2020-07-28T23:56:11.913Z',
      updated_at: '2020-07-28T23:56:11.913Z',
      user_name: 'Edwin',
    },
    {
      id: 3,
      body: 'Sipailuma',
      chatroom_user_id: 2,
      created_at: '2020-07-28T23:56:11.913Z',
      updated_at: '2020-07-28T23:56:11.913Z',
      user_name: 'Pulips',
    },
    {
      id: 4,
      body: 'Why are you speaking Korean?',
      chatroom_user_id: 2,
      created_at: '2020-07-28T23:56:11.913Z',
      updated_at: '2020-07-28T23:56:11.913Z',
      user_name: 'Pulips',
    },
    {
      id: 5,
      body: 'JINSDJASDIOAJDO',
      chatroom_user_id: 3,
      created_at: '2020-07-28T23:56:11.913Z',
      updated_at: '2020-07-28T23:56:11.913Z',
      user_name: 'Jacky',
    },
    {
      id: 9,
      body: 'Hello This is Jacky',
      chatroom_user_id: 1,
      created_at: '2020-07-29T00:00:08.431Z',
      updated_at: '2020-07-29T00:00:08.431Z',
      user_name: 'Edwin',
    },
    {
      id: 10,
      body: 'ajsiodjsaiodjas',
      chatroom_user_id: 1,
      created_at: '2020-07-29T00:00:11.290Z',
      updated_at: '2020-07-29T00:00:11.290Z',
      user_name: 'Edwin',
    },
    {
      id: 11,
      body: 'A testing',
      chatroom_user_id: 1,
      created_at: '2020-07-29T01:07:08.744Z',
      updated_at: '2020-07-29T01:07:08.744Z',
      user_name: 'Edwin',
    },
    {
      id: 12,
      body: 'asdadqwdqw',
      chatroom_user_id: 1,
      created_at: '2020-07-29T01:07:11.106Z',
      updated_at: '2020-07-29T01:07:11.106Z',
      user_name: 'Edwin',
    },
  ];

  const action = {
    type: FETCH_CHATROOM,
    payload: chatroomChatRecords,
  };

  const newState = chatroomReducer([], action);
  expect(newState.conversation).toEqual(chatroomChatRecords);
});
