import React from 'react';

import './Messages.css';

const Messages = ({ conversation }) => {
  console.log(conversation);
  let isSentByCurrentUser = false;

  let displayedContent = conversation.map((message) => {
    return (
      <div className='messageContainer justifyStart'>
        <div className='messageBox backgroundLight'>
          <p className='messageText colorDark'>{message.message}</p>
        </div>
        <p className='messageText pl-10'>{message.user}</p>
      </div>
    );
  });

  return isSentByCurrentUser ? (
    <div className='messageContainer justifyEnd'>
      <p className='sentText pr-10'>user</p>
      <div className='messageBox backgroundBlue'>
        <p className='messageText colorWhite'>message</p>
      </div>
    </div>
  ) : (
    displayedContent
  );
};

export default Messages;
