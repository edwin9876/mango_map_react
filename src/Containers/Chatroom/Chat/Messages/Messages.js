import React from 'react';

import '../Chat.css';

const Messages = ({ conversation, userId }) => {
  let testing = conversation.map((message) => {
    console.log(userId, message.userId);
    return userId === message.userId ? (
      // The user's own messages
      // <div className='messageContainer justifyEnd'>
      //   <p className='sentText pr-10'>{message.user}</p>
      //   <div className='messageBox backgroundBlue'>
      //     <p className='messageText colorWhite'>{message.message}</p>
      //   </div>
      // </div>
      <div class='container darker '>
        <img 
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRLWTAHflkoSso-p7fbKv7BecCWNSyYseuhfw&usqp=CAU'
          alt='Avatar'
          className='right roundimg'
        />
        <p>{message.message}</p>
        <span class='time-left'>11:00</span>
      </div>
    ) : (
      // Other people's messages
      // <div className='messageContainer justifyStart'>
      //   <div className='messageBox backgroundLight'>
      //     <p className='messageText colorDark'>{message.message}</p>
      //   </div>
      //   <p className='messageText pl-10'>{message.user}</p>
      // </div>

      <div className='container '>
        <img
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRIMey7cyC1XcqtyFcJlNhz7yP4oT1kAahWPw&usqp=CAU'
          alt='Avatar'
        className="roundimg"/>
        <p>{message.message}</p>
        <div className='time-right'>11:00</div>
      </div>
    );
  });

  let isSentByCurrentUser = false;

  return testing;
};

export default Messages;