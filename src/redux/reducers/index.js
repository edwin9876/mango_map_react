import { combineReducers } from 'redux';
import blogReducer from './blog';
import imageReducer from './image';
import mapReducer from './map';
import chatroomReducer from './chatroom';
import userReducer from './user';
import authentication from './auth';

const rootReducer = combineReducers({
  blog: blogReducer,
  mapReducer,
  chatroom: chatroomReducer,
  img:imageReducer,
  user: userReducer,
  auth: authentication,
});

export default rootReducer;
