import React from 'react';
import UploadPhotos from './UploadPhotos/UploadPhotos';
import { Input, InputGroup, InputGroupAddon } from 'reactstrap';


const input = ({ messages, sendMessageHandler, setMessage }) => (


  <InputGroup>
    <InputGroupAddon addonType="prepend"><UploadPhotos /></InputGroupAddon>
    <Input className='height5' type='text' placeholder='Type a message...' value={messages}
      onChange={(event) => setMessage(event.target.value)}
      onKeyPress={(event) =>
        event.key === 'Enter' ? sendMessageHandler(event) : null
      } />
    <InputGroupAddon className="height5" addonType="append"
      onClick={(event) => { sendMessageHandler(event); }}>SEND</InputGroupAddon>
  </InputGroup>

);

export default input;


// <InputGroupAddon addonType="append"
// onClick={(event) => {sendMessageHandler(event);}}>SEND</InputGroupAddon>