import React from 'react';
import UploadPhotos from './UploadPhotos/UploadPhotos';
import { Input, InputGroup, InputGroupAddon } from 'reactstrap';

const input = ({ messages, sendMessage, setMessage }) => (
  <InputGroup>
    <InputGroupAddon addonType='prepend'>
      <UploadPhotos className='uploadPhotoButton' />
    </InputGroupAddon>
    <Input
      className='height5 inputTextArea'
      type='text'
      placeholder='Type a message...'
      value={messages}
      onChange={(event) => setMessage(event.target.value)}
      onKeyPress={(event) => (event.key === 'Enter' ? sendMessage() : null)}
    />
    <InputGroupAddon
      className='height5 sendMessageButton'
      addonType='append'
      onClick={(event) => {
        sendMessage();
      }}
    >
      SEND
    </InputGroupAddon>
    <button>HI</button>
  </InputGroup>
);

export default input;
