import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Form,
} from "reactstrap";
import axios from "axios";

const AddChat = (props) => {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);
  const [unmountOnClose, setUnmountOnClose] = useState(true);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const toggle = () => {
    setTitle("");
    setDescription("");
    setModal(!modal);
  };

  const createChatroom = (title, description) => {
    axios
      .post(`${process.env.REACT_APP_DEV_URL}chatroom`, {
        chatroomName: title,
        chatroomDescription: description,
        userId: props.userId,
      })
      .then((res) => props.fetchChatroomList(props.userId));
  };

  const changeUnmountOnClose = (e) => {
    let value = e.target.value;
    setUnmountOnClose(JSON.parse(value));
  };

  return (
    <div>
      <nav>
        <Form inline onSubmit={(e) => e.preventDefault()}>
          {" "}
          <i
            className="material-icons gray50 micons15"
            id="addchatIC"
            onClick={toggle}
          >
            add_box{buttonLabel}
          </i>
        </Form>
        <Modal
          isOpen={modal}
          toggle={toggle}
          className={className}
          unmountOnClose={unmountOnClose}
        >
          <ModalHeader toggle={toggle}>Create New Chat</ModalHeader>
          <ModalBody>
            <Input
              type="textarea"
              placeholder="Title"
              rows={1}
              className="margin1vw"
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
            <Input
              type="textarea"
              placeholder="Description"
              rows={2}
              className="margin1vw"
              onChange={(event) => {
                setDescription(event.target.value);
              }}
            />
          </ModalBody>
          <ModalFooter className="d-flex justify-content-center">
            <Button
              color="success"
              onClick={() => {
                if (title === "" || description === "") {
                  alert("Please put in title and description");
                  return;
                }
                createChatroom(title, description);
                toggle();
              }}
            >
              Add
            </Button>{" "}
          </ModalFooter>
        </Modal>
      </nav>
    </div>
  );
};

export default AddChat;
