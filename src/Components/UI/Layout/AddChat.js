import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Form} from 'reactstrap';


const AddChat = (props) => {

  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);
  const [unmountOnClose, setUnmountOnClose] = useState(true);

  const toggle = () => setModal(!modal);
  const changeUnmountOnClose = e => {
      let value = e.target.value;
      setUnmountOnClose(JSON.parse(value));
  }

  return (
    <div>
      <nav>
          <Form inline onSubmit={(e) => e.preventDefault()}>
          {' '}
          <i className='material-icons gray70' onClick={toggle}>note_add{buttonLabel}</i>
          </Form>
          <Modal isOpen={modal} toggle={toggle} className={className} unmountOnClose={unmountOnClose}>
              <ModalHeader toggle={toggle}>Create New Chat</ModalHeader>
              <ModalBody>
              <Input type="textarea" placeholder="Title" rows={1} className="margin1vw"/>
              <Input type="textarea" placeholder="Description" rows={2} className="margin1vw"/>
            </ModalBody>
              <ModalFooter  className="d-flex justify-content-center" >
                  <Button color="success" onClick={toggle}>Add</Button>{' '}
              </ModalFooter>
          </Modal>
      </nav>
    </div>
  );
};

export default AddChat;
