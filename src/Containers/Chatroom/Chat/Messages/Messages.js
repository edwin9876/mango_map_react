import React from 'react';

import './Messages.css';

const Messages = ({ conversation, userId }) => {
  let testing = conversation.map((message) => {
    return userId === message.userId ? (
      <div class='container darker '>
        <img
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRLWTAHflkoSso-p7fbKv7BecCWNSyYseuhfw&usqp=CAU'
          alt='Avatar'
          class='right'
        />
        <p>{message.message}</p>
        <span class='time-left'>11:00</span>
      </div>
    ) : (
      <div className='container '>
        <img
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRIMey7cyC1XcqtyFcJlNhz7yP4oT1kAahWPw&usqp=CAU'
          alt='Avatar'
        />
        <p>{message.message}</p>
        <div className='time-right'>11:00</div>
      </div>
    );
  });

  return testing;
};

export default Messages;
