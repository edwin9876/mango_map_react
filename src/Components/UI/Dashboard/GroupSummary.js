import React from 'react';
import { ThemeContext } from '../../../Contexts/Theme';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { fetchChatroom } from '../../../redux/actions/chatroom';

const GroupSummary = (props) => {
  console.log(props);

  return (
    <ThemeContext.Consumer>
      {(context) => {
        const { isLightTheme, light, dark } = context;
        const theme = isLightTheme ? light : dark;

        const handleClick = async (e) => {
          console.log('[GroupSummary] Working');
          const { dispatch } = props;
          await dispatch(fetchChatroom(props.chatroom.id));
          console.log(props);

          props.history.push(`/chat`);
        };

        return (
          <div className='margin5'>
            <ListGroup>
              <ListGroupItem
                onClick={handleClick}
                style={{ backgroundColor: theme.mid, borderColor: theme.high }}
                className='justify-content-between d-flex'
              >
                <img
                  className='material-icons roundimg'
                  src='https://i.imgur.com/9TowUuJ.png'
                  alt='Avatar'
                />
                <h6
                  className='d-flex align-items-center'
                  style={{ color: theme.high }}
                >
                  {props.chatroom.room_name}
                </h6>
                <h6
                  className='d-flex align-items-center blur'
                  style={{ color: theme.high }}
                >
                  {props.chatroom.created_at.slice(0, 10)}
                </h6>
              </ListGroupItem>
            </ListGroup>
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default GroupSummary;
