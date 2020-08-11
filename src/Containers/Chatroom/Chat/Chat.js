import React, { Component } from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import axios from 'axios';
import {
  fetchChatroomList,
  fetchChatroom,
  setMessage,
  setRoomname,
  sendMessage,
  receiveMessage,
  initializeState,
} from '../../../redux/actions/chatroom';
import { connect } from 'react-redux';
import io from 'socket.io-client';
import ChatToolbar from '../../../Components/UI/Layout/ChatToolbar';
import { backToChatList } from '../../../redux/actions/chatroom';
import Input from '../../../Components/Chat/Input/Input';
import Messages from '../../../Components/Chat/Messages/Messages';
import AddChat from '../../../Components/UI/Layout/AddChat';
import { Button, ButtonGroup, ListGroup, ListGroupItem } from 'reactstrap';
import { ThemeContext } from '../../../Contexts/Theme';
import ChatroomSummary from '../../../Components/Chat/ChatRoomSummary';

require('dotenv').config();

class Chat extends Component {
  static contextType = ThemeContext;

  constructor(props) {
    super(props);
    this.socket = io(process.env.REACT_APP_DEV_URL);
  }

 
  sendMessageToChatroom = (message, roomId, userId, username) => {
    console.log('[Chats.js]', username);
    this.socket.emit('chat-message', { message, roomId, userId, username });
    this.props.sendMessage(message, roomId, userId, username);
  };


  async componentDidMount() {
    let userInfo = await JSON.parse(localStorage.getItem('user'));
    console.log(this);
    this.props.initializeState(userInfo.user_name, userInfo.id);
    console.log(this);

    this.props.fetchChatroomList(userInfo.id);
    let chatroomList = await axios
      .get(`${process.env.REACT_APP_DEV_URL}chatroom/all/${userInfo.id}`)
      .then((response) => {
        console.log(response);
        return response.data.map((chatroom) => {
          return chatroom.chatroom_id;
        });
      });

    this.socket.on('chat-message', ({ message, roomId, userId, username }) => {
      console.log(message, roomId, userId, username);
      if (roomId === this.props.currentRoomId) {
        this.props.sendMessage(message, roomId, userId, username);
      }
    });

    this.socket.on('join-chatroom', (data) => {
      console.log(data);
    });

    // this.socket.on("chat-image", )

    this.socket.emit('new-user', {
      name: this.props.username,
      roomList: chatroomList,
    });

    this.socket.on('user-connected', (name) => {
      console.log('Welcome to Mango Map, ' + name);
    });

    this.socket.on('join-chatroom-user', (data) => {
      this.props.receiveMessage(
        data.username,
        `${data.username} has joined the chatroom!`
      );
    });
  }

  componentDidUpdate() {}

  componentWillUnmount() {
    this.socket.emit('disconnect');
    this.socket.off();
  }

  // Sending the message to server
  // Will trigger the chat-message event in componentDidMount
  sendMessageHandler = (event) => {
    event.preventDefault();
    console.log(this.state.messages);
    this.socket.emit(
      'send-chat-message',
      { message: this.state.messages },
      () => {
        console.log('sendMessageHandler callback is invoked');
        // Adding the new message just sent to the state
        this.setConversationHandler({
          userId: this.state.userId,
          user: this.state.username,
          message: this.state.messages,
        });

        // Clearing the input field
        this.setState({ ...this.state, messages: [''] });
      }
    );
  };

  openChatroomSummary = async (currentRoomId) => {
    return <ChatroomSummary></ChatroomSummary>;
  };

  render() {
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;

    let displayedContent = this.props.currentRoomId ? (
      <div>
        <ChatToolbar
          roomname={this.props.roomname}
          backToChatList={this.props.backToChatList}
          currentRoomId={this.props.currentRoomId}
        />{' '}
        <ButtonGroup className='d-flex justify-content-center'>
          <Button
            style={{
              background: theme.low,
              color: theme.high,
              borderColor: theme.low,
            }}
          >
            <p className='bold blur'>Messages</p>
          </Button>
          <Button
            style={{
              background: theme.low,
              color: theme.high,
              borderColor: theme.low,
            }}
          >
            <p className='bold blur'>TimeTree</p>
          </Button>
        </ButtonGroup>
        <ScrollToBottom className={ ' textBox'}>
          <div className='margin5'>
            <Messages
              conversation={this.props.conversation}
              username={this.props.username}
              user={this.props.user}
            />
          </div>
        </ScrollToBottom>
        <div>
          <Input
            sendMessage={() =>
              this.sendMessageToChatroom(
                this.props.messages,
                this.props.currentRoomId,
                this.props.userId,
                this.props.username
              )
            }
            messages={this.props.messages}
            setMessage={this.props.setMessage}
          />{' '}
        </div>
      </div>
    ) : (
      // Display the list of chatrooms the user has
      this.props.roomList.map((room) => {
        return (
          <div
            className='chatroomListTesting paddingt1 margin1x'
            key={room.chatroom_id}
            onClick={() => {
              this.props.fetchChatroom(room.chatroom_id);
              this.props.setRoomname(room.room_name);
            }}
          >
            <ListGroup className=''>
              <ListGroupItem
                color={theme.listcolor}
                style={{
                  background: theme.mid,
                  color: theme.high,
                  borderColor: theme.highlight,
                }}
                className='justify-content-between d-flex'
              >
                <img
                  className='material-icons roundimg'
                  src='https://i.imgur.com/1jH2zcV.png'
                  alt='Avatar'
                />
                <h6 className='d-flex align-items-center'>{room.room_name}</h6>
                <h6 className='d-flex align-items-center blur light'>
                  {room.created_at.slice(0, 10)}
                </h6>
              </ListGroupItem>
            </ListGroup>
          </div>
        );
      })
    );

    return this.props.currentRoomId ? (
      displayedContent
    ) : (
      <>
        <div id='addChat'>
          <AddChat
            userId={this.props.userId}
            fetchChatroomList={this.props.fetchChatroomList}
          />
        </div>

        <div className='padding5'>{displayedContent}</div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userId: state.chatroom.userId,
    username: state.chatroom.username,
    chatroomUserId: state.chatroom.chatroomUserId,
    roomList: state.chatroom.roomList,
    roomname: state.chatroom.roomname,
    currentRoomId: state.chatroom.currentRoomId,
    messages: state.chatroom.messages,
    conversation: state.chatroom.conversation,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    initializeState: (username, userId) =>
      dispatch(initializeState(username, userId)),
    fetchChatroomList: (userId) => dispatch(fetchChatroomList(userId)),
    fetchChatroom: (id) => dispatch(fetchChatroom(id)),
    setMessage: (event) => dispatch(setMessage(event)),
    setRoomname: (roomname) => dispatch(setRoomname(roomname)),
    sendMessage: (message, roomId, userId, username) =>
      dispatch(sendMessage(message, roomId, userId, username)),
    receiveMessage: (username, message) =>
      dispatch(receiveMessage(username, message)),
    backToChatList: () => dispatch(backToChatList()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
