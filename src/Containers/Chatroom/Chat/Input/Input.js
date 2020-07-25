import React from 'react';

import UploadPhotos from './UploadPhotos/UploadPhotos';
import { Button } from 'reactstrap';

import './Input.css';

const input = ({ messages, sendMessageHandler, setMessage }) => (
  <form className='form'>
    <input
      className='textInput'
      type='text'
      placeholder='Type a message...'
      value={messages}
      onChange={(event) => setMessage(event.target.value)}
      onKeyPress={(event) =>
        event.key === 'Enter' ? sendMessageHandler(event) : null
      }
    />
    <UploadPhotos />
    <Button
      onClick={(event) => {
        sendMessageHandler(event);
      }}
      color='primary'
      size='sm'
    >
      SEND
    </Button>{' '}
  </form>
);

export default input;
