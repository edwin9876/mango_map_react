import { combineReducers } from 'redux';
import blogReducer from './blog';
import imageReducer from './image';
import mapReducer from './map';
import chatroomReducer from './chatroom';
import userReducer from './user';
import authentication from './auth';

const rootReducer = combineReducers({
  blog: blogReducer,
<<<<<<< HEAD
  map: mapReducer,
=======
  map:mapReducer,
>>>>>>> c74aaf3ff45aa8e3e5f7c48aa0b528bff324183d
  chatroom: chatroomReducer,
  img: imageReducer,
  user: userReducer,
  auth: authentication,
});

export default rootReducer;
