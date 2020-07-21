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
    userID: null,
    currentRoomId: null,
    messages: [],
  };

  conversation = [
    { user: 'Jacky', message: 'hi' },
    { user: 'Jacky', message: "How you doin'??" },
    { user: 'Edwin', message: 'I am fine, thank you.' },
    { user: 'Pullip', message: 'I go to school by bus.' },
  ];

  componentDidMount() {
    this.socket.emit('new-user', { name: 'Jacky' });
    console.log('[componentDidMount] is executed');

    this.socket.on('user-connected', (name) => {
      console.log('Welcome to my world ' + name);
    });

    this.socket.on('chat-message', (message) => {
      //   let newState = { ...this.state };
      //   newState.conversation.push(message)
      //   this.setState({ newState });
      console.log(message);
      console.log('[chat-message] received');
    });
  }

  componentWillUnmount() {
    this.socket.emit('disconnect');
    this.socket.off();
  }

  setMessage = (message) => {
    this.setState({
      ...this.state,
      messages: [...this.state.messages, message],
    });
  };

  sendMessage = (event) => {
    event.preventDefault();

    this.socket.emit('send-chat-message', { message: 'Hello WOlrd' }, () => {
      // this.setState({ ...this.state, messages: [''] });
      console.log('SendMessage callback is invoked');
    });
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
    console.log('[Chat] changeRoomId method was clicked');
    const newState = { ...this.state };
    newState.currentRoomId = id;
    this.setState({ newState });
    console.log(id);
    console.log(this.state);
    console.log(newState);
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
          <Messages conversation={this.conversation} />
        </div>
        <div>
          <Input
            sendMessage={this.sendMessage}
            messages={this.state.messages}
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
