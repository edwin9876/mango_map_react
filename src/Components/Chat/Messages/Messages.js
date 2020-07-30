import React from 'react';

import '../../../Containers/Chatroom/Chat/Chat.css';
import './Messages.css';

const Messages = ({ conversation, chatroomUserId }) => {
  let testing = conversation.map((message) => {
    return chatroomUserId === message.chatroom_user_id ? (
      <div class='container darker '>
        <img
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRLWTAHflkoSso-p7fbKv7BecCWNSyYseuhfw&usqp=CAU'
          alt='Avatar'
          className='right roundimg'
        />

        {message.url ? (
          <img
            src={message.url}
            alt='chatroom upload'
            className='uploadedImage'
          />
        ) : (
          <p>{message.body}</p>
        )}

        <span class='time-left'>11:00</span>
      </div>
    ) : (
      <div className='container'>
        <img
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRIMey7cyC1XcqtyFcJlNhz7yP4oT1kAahWPw&usqp=CAU'
          alt='Avatar'
          className='roundimg'
        />
        <p>{message.user_name}</p>
        {message.url ? (
          <img
            src={message.url}
            alt='chatroom upload'
            className='uploadedImage'
          />
        ) : (
          <p>{message.body}</p>
        )}{' '}
        <div className='time-right'>11:00</div>
      </div>
    );
  });

  return testing;
};

export default Messages;
