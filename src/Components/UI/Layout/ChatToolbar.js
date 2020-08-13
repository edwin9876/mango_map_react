import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import axios from 'axios';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Label,
  Form,
} from 'reactstrap';
import ChatroomSummary from '../../Chatroom/Chat/ChatroomSummary';

require('dotenv').config();

const ChatToolbar = ({ backToChatList, currentRoomId, roomname }, props) => {
  const { buttonLabel, className } = props;
  const [modal, setModal] = useState(false);
  const [unmountOnClose, setUnmountOnClose] = useState(true);
  const [username, setUsername] = useState('');
  const [options, setOptions] = useState('');
  const [alreadyIn, setAlreadyIn] = useState({ color: 'red', display: 'none' });

  const socket = io(process.env.REACT_APP_DEV_URL);

  const toggle = () => {
    // Clean up when user closes add user modal
    setOptions('');
    setUsername('');
    setAlreadyIn({ ...alreadyIn, display: 'none' });
    setModal(!modal);
  };
  const changeUnmountOnClose = (e) => {
    let value = e.target.value;
    setUnmountOnClose(JSON.parse(value));
  };

  useEffect(() => {
    axios
      .post(`${process.env.REACT_APP_DEV_URL}chatroom/username`, {
        username: username,
      })
      .then((response) => {
        if (response.data.length === 1) {
          console.log(response.data[0]);
          setOptions(
            <div
              key={response.data[0].id}
              className='d-flex justify-content-between align-items-center normalBorder smrBorder padding1'
            >
              <img
                className='icons20'
                src={response.data[0].profile_picture_url}
              />
              <p>
                {response.data[0].user_name}
                <br />
                <span className='blur'>Desciptions</span>
              </p>
            </div>
          );
        } else {
          setOptions();
        }
      })
      .catch((err) => console.log(err));
  }, [username]);

  return (
    <div>
      <nav>
        <div className='d-flex justify-content-between paddingt1 margin5x'>
          <i className='material-icons gray50' onClick={backToChatList}>
            arrow_back
          </i>
          <ChatroomSummary roomname={roomname} currentRoomId={currentRoomId} />
          <div>
            <Form inline onSubmit={(e) => e.preventDefault()}>
              {' '}
              <i className='material-icons gray70' onClick={toggle}>
                person_add{buttonLabel}
              </i>
            </Form>
            <Modal
              isOpen={modal}
              toggle={toggle}
              className={className}
              unmountOnClose={unmountOnClose}
            >
              <ModalHeader toggle={toggle}>Add friends to chat</ModalHeader>
              <ModalBody>
                <Input
                  type='textarea'
                  placeholder='Find with username'
                  rows={1}
                  onChange={(event) => {
                    setUsername(event.target.value);
                    setAlreadyIn({ ...alreadyIn, display: 'none' });
                  }}
                />
                <Label for='exampleSelectMulti'>Search result</Label>
                {options}

                <div style={alreadyIn}>
                  <p>This user is already in the chatroom</p>
                </div>
              </ModalBody>
              <ModalFooter className='d-flex justify-content-center'>
                <Button
                  color='success'
                  onClick={() => {
                    if (options) {
                      axios
                        .post(
                          `${process.env.REACT_APP_DEV_URL}chatroom/username/check`,
                          {
                            // options.key is PK in users table
                            userId: options.key,
                            currentRoomId: currentRoomId,
                          }
                        )
                        .then((response) => {
                          if (response.data.length >= 1) {
                            setAlreadyIn({ ...alreadyIn, display: 'block' });
                          } else {
                            console.log(currentRoomId);
                            axios
                              .post(
                                `${process.env.REACT_APP_DEV_URL}chatroom/user`,
                                {
                                  chatroomId: currentRoomId,
                                  userId: options.key,
                                }
                              )
                              .then((response) => {
                                console.log('[ChatToolbar]', response.data[0]);
                                socket.emit('add-chatroom-user', {
                                  username: response.data[0].user_name,
                                });
                                toggle();
                              });
                          }
                        });
                    }
                  }}
                >
                  Add User
                </Button>{' '}
              </ModalFooter>
            </Modal>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default ChatToolbar;
