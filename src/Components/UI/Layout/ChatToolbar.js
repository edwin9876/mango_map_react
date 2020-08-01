import React, { useState } from 'react';
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

const ChatToolbar = ({ backToChatList }, props) => {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);
  const [unmountOnClose, setUnmountOnClose] = useState(true);

  const toggle = () => setModal(!modal);
  const changeUnmountOnClose = (e) => {
    let value = e.target.value;
    setUnmountOnClose(JSON.parse(value));
  };

  return (
    <div>
      <nav>
        <div className='d-flex justify-content-between margin5'>
          <i className='material-icons gray50' onClick={backToChatList}>
            arrow_back
          </i>

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
                  onChange={(event) => console.log(event.target.value)}
                />
                <Label for='exampleSelectMulti'>Search Result comes here</Label>
                <Input
                  type='select'
                  name='selectMulti'
                  id='exampleSelectMulti'
                  multiple
                >
                  <option>pullip1</option>
                  <option>pullip12</option>
                </Input>
              </ModalBody>
              <ModalFooter className='d-flex justify-content-center'>
                <Button color='success' onClick={toggle}>
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
