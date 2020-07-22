import React from 'react';

import './Messages.css';

const Messages = ({ conversation, userId }) => {
  let testing = conversation.map((message) => {
    return userId === message.userId ? (
      <div className='messageContainer justifyEnd'>
        <p className='sentText pr-10'>{message.user}</p>
        <div className='messageBox backgroundBlue'>
          <p className='messageText colorWhite'>{message.message}</p>
        </div>
      </div>
    ) : (
      <div className='messageContainer justifyStart'>
        <div className='messageBox backgroundLight'>
          <p className='messageText colorDark'>{message.message}</p>
        </div>
        <p className='messageText pl-10'>{message.user}</p>
      </div>
    );
  });

  let isSentByCurrentUser = false;

  // let displayedContent = conversation.map((message) => {
  //   return (
  //     <div className='messageContainer justifyStart'>
  //       <div className='messageBox backgroundLight'>
  //         <p className='messageText colorDark'>{message.message}</p>
  //       </div>
  //       <p className='messageText pl-10'>{message.user}</p>
  //     </div>
  //   );
  // });

  return testing;

  // return !isSentByCurrentUser
  //   ? conversation.map((message) => (
  //       // Message from the phone owner
  //       <div className='messageContainer justifyEnd'>
  //         <p className='sentText pr-10'>{message.message}</p>
  //         <div className='messageBox backgroundBlue'>
  //           <p className='messageText colorWhite'>{message.user}</p>
  //         </div>
  //       </div>
  //     ))
  //   : displayedContent;
};

export default Messages;
