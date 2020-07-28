import React, { Component } from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import { connect } from 'react-redux';
import * as actionTypes from '../../../redux/constants/actionTypes';

import * as actions from '../../../redux/actions/chatroom';
import state from '../../../redux/reducers/chatroom';

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
  }

  componentWillUnmount() {
    this.socket.emit('disconnect');
    this.socket.off();
  }

  // State.messages is the input value the users type in
  setMessage = (message) => {
    this.setState(
      {
        ...this.state,
        messages: [message],
      },
      () => console.log(this.state.messages)
    );
  };

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

  // Fake data

  // This is invoked when user click a room div
  changeRoomIdHandler = (id) => {
    this.setState({ ...this.state, currentRoomId: id });
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
            sendMessageHandler={this.sendMessageHandler}
            messages={this.props.messages}
            setMessage={this.setMessage}
          />{' '}
        </div>
      </div>
    ) : (
      // Display the list of chatrooms the user has
      this.props.roomList.map((room, index) => {
        return (
          <div key={index} onClick={() => this.changeRoomIdHandler(index)}>
            <ul className='collection'>
              <li className='collection-item avatar gray70'>
                <i className='material-icons circle grey blur'>star</i>
                <span className='title bold'>{room.roomName}</span>
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
    roomList: state.chatroom.roomList,
    currentRoomId: state.chatroom.currentRoomId,
    messages: state.chatroom.messages,
    conversation: state.chatroom.conversation,
  };
};

export default connect(mapStateToProps, actions)(Chat);
