import React, { useState } from 'react';
import UploadPhotos from './UploadPhotos/UploadPhotos';
import { Input, InputGroup, InputGroupAddon } from 'reactstrap';

const input = ({ messages, sendMessage, setMessage }) => {
  return (
    <InputGroup id='inputline'>
      <InputGroupAddon addonType='prepend'>
        <UploadPhotos className='uploadPhotoButton' />
      </InputGroupAddon>
      <Input
        className='height5 inputTextArea'
        type='text'
        placeholder='Type a message...'
        value={messages}
        onChange={(event) => {
          setMessage(event.target.value);
          console.log(messages);
        }}
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
    </InputGroup>
  );
};

export default input;
