import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card, CardTitle } from 'reactstrap';
import axios from 'axios';

const ChatRoomSummary = ({ currentRoomId, roomname }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [userList, setUserList] = useState([]);
  const [time, setTime] = useState('');
  const [description, setDescription] = useState('');

  const toggle = () => setIsOpen(!isOpen);

  const getChatroomInfo = (currentRoomId) => {
    axios
      .get(`${process.env.REACT_APP_DEV_URL}chatroom/info/${currentRoomId}`)
      .then((res) => {
        let createdAt = res.data[0]['created_at'].split('-');
        createdAt =
          createdAt[0] + ' ' + createdAt[1] + ' ' + createdAt[2].split('T')[0];
        setTime(createdAt);
        setDescription(res.data[0].descriptions);
        setUserList(res.data);
        toggle();
      });
  };

  return (
    <div>
      <Button
        color='bright'
        onClick={() => getChatroomInfo(currentRoomId)}
        style={{ marginBottom: '1rem' }}
      >
        <p className="bold">{roomname}</p>
      </Button>
      <Collapse isOpen={isOpen}>
        <Card className="vw75">
          <CardBody>
            <p>
              Members: <p>{userList.map((user) => user.user_name + ', ')}</p>
            </p>
            <p>Created: {time}</p>
            <p>Description: {description}</p>
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
};

export default ChatRoomSummary;
