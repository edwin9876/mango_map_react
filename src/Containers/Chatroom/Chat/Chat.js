import React, { Component } from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';

import {
  fetchChatroomList,
  fetchChatroom,
  setMessage,
  sendMessage,
} from '../../../redux/actions/chatroom';

import { connect } from 'react-redux';

import io from 'socket.io-client';
import { css } from 'glamor';

import Input from '../../../Components/Chat/Input/Input';
import Messages from '../../../Components/Chat/Messages/Messages';

import { Button, ButtonGroup } from 'reactstrap';
import { ThemeContext } from '../../../Contexts/Theme';

import './Chat.css';

class Chat extends Component {
  static contextType = ThemeContext;

  constructor(props) {
    super(props);
    this.socket = io('https://localhost:8000');
  }

  ROOT_CSS = css({
    height: '100%',
    width: '100%',
  });

  componentDidMount() {
    this.socket.emit('new-user', { name: this.props.username });

    console.log('[componentDidMount] is executed');

    this.socket.on('user-connected', (name) => {
      console.log('Welcome to Mango Map, ' + name);
    });

    // Receive the messages from other users
    this.socket.on('chat-message', (message) => {
      console.log(message);
      console.log('[chat-message] received');
    });

    this.props.fetchChatroomList(this.props.userId);
  }

  componentWillUnmount() {
    this.socket.emit('disconnect');
    this.socket.off();
  }

  // State.conversation is the complete chat history and new messages
  // In the current chatroom
  setConversationHandler = (message) => {
    this.setState({
      ...this.state,
      conversation: [...this.state.conversation, message],
    });
  };

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

  render() {
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;

    let displayedContent = this.props.currentRoomId ? (
      // This div is in a chatroom
      <div>
        <h5 className='d-flex justify-content-center paddingy1'>Group1</h5>
        <ButtonGroup className='d-flex justify-content-center'>
          <Button
            style={{
              background: theme.low,
              color: theme.high,
              borderColor: theme.low,
            }}
          >
            Messages
          </Button>
          <Button
            style={{
              background: theme.low,
              color: theme.high,
              borderColor: theme.low,
            }}
          >
            TimeTree
          </Button>
        </ButtonGroup>
        <ScrollToBottom className={this.ROOT_CSS + ' textBox'}>
          <div className='margin5'>
            <Messages
              conversation={this.props.conversation}
              userId={this.props.userId}
            />
          </div>
        </ScrollToBottom>
        <div>
          <Input
            sendMessage={() =>
              this.props.sendMessage(
                this.props.messages,
                this.props.currentRoomId,
                this.props.chatroomUserId
              )
            }
            messages={this.props.messages}
            setMessage={this.props.setMessage}
          />{' '}
        </div>
      </div>
    ) : (
      // Display the list of chatrooms the user has
      this.props.roomList.map((room, index) => {
        return (
          <div
            class='chatroomListTesting'
            key={index}
            onClick={() => this.props.fetchChatroom(index + 1)}
          >
            <ul className='collection'>
              <li className='collection-item avatar gray70'>
                <i className='material-icons circle grey blur'>star</i>
                <span className='title bold'>{room.room_name}</span>
                <p>Last message</p>
                <a href='#!' className='secondary-content'>
                  <i className='material-icons blur'>grade</i>
                </a>
              </li>
            </ul>
          </div>
        );
      })
    );

    return displayedContent;
  }
}

const mapStateToProps = (state) => {
  return {
    userId: state.chatroom.userId,
    username: state.chatroom.username,
    chatroomUserId: state.chatroom.chatroomUserId,
    roomList: state.chatroom.roomList,
    currentRoomId: state.chatroom.currentRoomId,
    messages: state.chatroom.messages,
    conversation: state.chatroom.conversation,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchChatroomList: (userId) => dispatch(fetchChatroomList(userId)),
    fetchChatroom: (id) => dispatch(fetchChatroom(id)),
    setMessage: (event) => dispatch(setMessage(event)),
    sendMessage: (message, roomId, roomUserId) =>
      dispatch(sendMessage(message, roomId, roomUserId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
