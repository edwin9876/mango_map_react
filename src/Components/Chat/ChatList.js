import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ChatList extends Component {
  render() {
    const { chatrooms } = this.state;
    console.log(this.state);
    const chatroomList = chatrooms.length ? (
      chatrooms.map((chatroom) => {
        return (
          <div>
            <Link to='/chat/:id'>
              <li className='collection-item avatar gray70'>
                <i className='material-icons circle grey blur'>star</i>
                <span className='title bold'>{chatroom.name}</span>
                <p>{chatroom.preview}</p>
                <a href='#!' className='secondary-content'>
                  <i className='material-icons blur'>grade</i>
                </a>
              </li>
            </Link>
          </div>
        );
      })
    ) : (
      <div className='d-flex justify-content-center'>No chats yet</div>
    );

    return <ul className='collection'>{chatroomList}</ul>;
  }
}
