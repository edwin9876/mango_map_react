import React, { Component } from 'react';
import SearchBar from '../../../Components/UI/Layout/SearchBar';
import ScrollToBottom from 'react-scroll-to-bottom';
import Input from './Input/Input';

import io from 'socket.io-client';

import { css } from 'glamor';
import Messages from './Messages/Messages';

import './Chat.css';

class Chat extends Component {
  constructor(props) {
    super(props);
    this.socket = io('https://localhost:8000');
  }

  ROOT_CSS = css({
    height: '100%',
    width: '100%',
  });

  state = {
    userId: 1,
    username: 'Jacky',
    currentRoomId: 1,
    messages: [],
    conversation: [
      { userId: 1, user: 'Jacky', message: 'hi' },
      { userId: 1, user: 'Jacky', message: "How you doin'?" },
      { userId: 2, user: 'Edwin', message: 'I am fine, thank you.' },
      { userId: 3, user: 'Pullip', message: 'I go to school by bus.' },
    ],
  };

  componentDidMount() {
    this.socket.emit('new-user', { name: 'Jacky' });

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
  setConversation = (message) => {
    this.setState({
      ...this.state,
      conversation: [...this.state.conversation, message],
    });
  };

  // Sending the message to server
  // Will trigger the chat-message event in componentDidMount
  sendMessage = (event) => {
    event.preventDefault();
    console.log(this.state.messages);
    this.socket.emit(
      'send-chat-message',
      { message: this.state.messages },
      () => {
        console.log('SendMessage callback is invoked');
        // Adding the new message just sent to the state
        this.setConversation({
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
  room = [
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
  ];

  // This is invoked when user click a room div
  changeRoomId = (id) => {
    this.setState({ ...this.state, currentRoomId: id });
  };

  render() {
    let displayedContent = this.state.currentRoomId ? (
      // This div is in a chatroom
      <div>
        <h5 className='center'>Thomas Burberry</h5>
        <div className='card-tabs margin1'>
          <ul className='tabs tabs-fixed-width'>
            <li className='tab'>
              <a href='#test6' className='bold black-text'>
                Messages
              </a>
            </li>
            <li className='tab'>
              <a href='#test4' className='bold black-text'>
                TripBook
              </a>
            </li>
          </ul>
        </div>
        <ScrollToBottom className={this.ROOT_CSS + ' textBox'}>
          <Messages
            conversation={this.state.conversation}
            userId={this.state.userId}
          />
        </ScrollToBottom>
        <div>
          <Input
            sendMessage={this.sendMessage}
            messages={this.state.messages}
            setMessage={this.setMessage}
          />{' '}
        </div>
      </div>
    ) : (
      // Display the list of chatrooms the user has
      this.room.map((room, index) => {
        return (
          <div key={index} onClick={() => this.changeRoomId(index)}>
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

export default Chat;
