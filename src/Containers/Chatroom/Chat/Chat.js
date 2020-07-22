import React, { Component } from 'react';
import SearchBar from '../../../Components/UI/Layout/SearchBar';
import Input from './Input/Input';

import io from 'socket.io-client';

import Messages from './Messages/Messages';

import './Chat.css';

class Chat extends Component {
  constructor(props) {
    super(props);
    this.socket = io('https://localhost:8000');
  }

  state = {
    userId: 1,
    username: 'Jacky',
    currentRoomId: null,
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
    console.log(this.socket);
    this.socket.on('user-connected', (name) => {
      console.log('Welcome to my world ' + name);
    });

    this.socket.on('chat-message', (message) => {
      console.log(message);
      console.log('[chat-message] received');
    });
  }

  componentWillUnmount() {
    this.socket.emit('disconnect');
    this.socket.off();
  }

  setMessage = (message) => {
    this.setState(
      {
        ...this.state,
        messages: [message],
      },
      () => console.log(this.state.messages)
    );
  };

  setConversation = (message) => {
    this.setState({
      ...this.state,
      conversation: [...this.state.conversation, message],
    });
  };

  sendMessage = (event) => {
    event.preventDefault();
    console.log(this.state.messages);
    this.socket.emit(
      'send-chat-message',
      { message: this.state.messages },
      () => {
        console.log('SendMessage callback is invoked');
        this.setConversation({
          userId: this.state.userId,
          user: this.state.username,
          message: this.state.messages,
        });
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

  changeRoomId = (id) => {
    // Change to immutable setState
    this.setState({ ...this.state, currentRoomId: id });
  };

  render() {
    let displayedContent = this.state.currentRoomId ? (
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
        <div className='textBox'>
          <Messages
            conversation={this.state.conversation}
            userId={this.state.userId}
          />
        </div>
        <div>
          <Input
            sendMessage={this.sendMessage}
            messages={this.state.messages}
            setMessage={this.setMessage}
          />{' '}
        </div>
      </div>
    ) : (
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
