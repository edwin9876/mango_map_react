import React, {useState} from 'react'
import { Collapse, Button, CardBody, Card, CardTitle } from 'reactstrap';

const ChatRoomSummary = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <div>
        <Button color="bright" onClick={toggle} style={{ marginBottom: '1rem' }} >I</Button>
        <Collapse isOpen={isOpen}>
          <Card>
            <CardBody>
            <CardTitle className="blur gray70 bold">Capstone</CardTitle>
            <p>Members: Pullip123, Jacky123, Edwin123</p>
            <p>Created: 20th June, 2020</p>
            <p>Description: This is chat for capstone</p>
            </CardBody>
          </Card>
        </Collapse>
      </div>
    );
  }

export default ChatRoomSummary
