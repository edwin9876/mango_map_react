import {combineReducers} from 'redux'
import blogReducer from './blog'
import mapReducer from './map'
import chatroomReducer from './chatroom'
import userReducer from './user'
import imageReducer from './user'
import authentication from './auth'

const rootReducer = combineReducers({
    blog: blogReducer,
    mapReducer,
    chatroomReducer,
    imageReducer,
    user:userReducer,
    auth:authentication
})

export default rootReducer;