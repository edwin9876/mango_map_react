<<<<<<< HEAD
import { combineReducers } from 'redux';
import blogReducer from './blog';
import mapReducer from './map';
import chatroomReducer from './chatroom';
import userReducer from './user';
import imageReducer from './user';
import authentication from './auth';
=======
import {combineReducers} from 'redux'
import blogReducer from './blog'
import imageReducer from './image'
import mapReducer from './map'
import chatroomReducer from './chatroom'
import userReducer from './user'
// import imageReducer from './user'
import authentication from './auth'
>>>>>>> 430a78a0b53ce20b9e150b3092d587e74810506f

const rootReducer = combineReducers({
  blog: blogReducer,
  mapReducer,
  chatroomReducer,
  imageReducer,
  user: userReducer,
  auth: authentication,
});

export default rootReducer;
