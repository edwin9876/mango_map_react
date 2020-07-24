import React from 'react';

import UploadPhotos from './UploadPhotos/UploadPhotos';

import './Input.css';

const input = ({ messages, sendMessage, setMessage }) => (
  <form className='form'>
    <input
      className='textInput'
      type='text'
      placeholder='Type a message...'
      value={messages}
      onChange={(event) => setMessage(event.target.value)}
      onKeyPress={(event) =>
        event.key === 'Enter' ? sendMessage(event) : null
      }
    />
    <UploadPhotos />
    <button
      className='sendButton'
      onClick={(event) => {
        sendMessage(event);
      }}
    >
      Send
    </button>
  </form>
);

export default input;
