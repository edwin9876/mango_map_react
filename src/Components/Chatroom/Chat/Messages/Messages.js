import React from 'react';

import '../Chat.css';
import './Messages.css';

const Messages = ({ conversation, username }) => {
  let testing = conversation.map((message, index) => {
    let h = new Date(message.created_at).getHours();
    let m = new Date(message.created_at).getMinutes();

    return username === message.user_name ? (
      <div className="container darker" key={index}>
        <img
          src="https://i.imgur.com/9TowUuJ.png"
          alt="Avatar"
          className="right roundimg"
        />

        {message.url ? (
          <img
            src={message.url}
            alt="chatroom upload"
            className="uploadedImage"
          />
        ) : (
          <p>{message.body}</p>
        )}

        <span className="time-left white100">
          {h}:{m}
        </span>
      </div>
    ) : (
      <div className="container" key={index}>
        <img
          src="https://i.imgur.com/XzYFfkF.png"
          alt="Avatar"
          className="roundimg"
        />
        <p className="floatR gray70">{message.user_name}</p>
        {message.url ? (
          <img
            src={message.url}
            alt="chatroom upload"
            className="uploadedImage"
          />
        ) : (
          <p>{message.body}</p>
        )}{' '}
        <div className="time-right">
          {h}:{m}
        </div>
      </div>
    );
  });

  return testing;
};

export default Messages;
