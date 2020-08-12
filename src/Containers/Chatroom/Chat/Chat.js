import React, { useState, useEffect } from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import axios from 'axios';
import {
  fetchChatroomList,
  fetchChatroom,
  setMessage,
  setRoomname,
  sendMessage,
  receiveMessage,
  initializeState,
  setGroupMapTrue,
  setGroupMapFalse,
} from '../../../redux/actions/chatroom';
import { connect } from 'react-redux';
import io from 'socket.io-client';
import ChatToolbar from '../../../Components/UI/Layout/ChatToolbar';
import { backToChatList } from '../../../redux/actions/chatroom';
import Input from '../../../Components/Chat/Input/Input';
import Messages from '../../../Components/Chat/Messages/Messages';
import AddChat from '../../../Components/UI/Layout/AddChat';
import { Button, ButtonGroup, ListGroup, ListGroupItem } from 'reactstrap';
import { ThemeContext } from '../../../Contexts/Theme';
import ChatroomSummary from '../../../Components/Chat/ChatRoomSummary';

// import React from 'react';

// const  = (props) => {

// };

//  export default ;

const Chat = (props) => {
  let socket = io(process.env.REACT_APP_DEV_URL);
  let userInfo;
  let test = 'Test';

  const [inputMessage, setInputMessage] = useState('');

  userInfo = JSON.parse(localStorage.getItem('user'));
  console.log(userInfo);
  props.initializeState(userInfo.user_name, userInfo.id);

  useEffect(() => {
    console.log(socket, 'UseEffect');

    props.fetchChatroomList(userInfo.id);

    socket.on('chat-message', ({ message, roomId, userId, username }) => {
      console.log(message, roomId, props.currentRoomId);
      if (roomId === props.currentRoomId) {
        props.sendMessage(message, roomId, userId, username);
      }
    });

    socket.on('join-chatroom', (data) => {
      console.log(data);
    });

    socket.on('join-chatroom-user', (data) => {
      props.receiveMessage(
        data.username,
        `${data.username} has joined the chatroom!`
      );
    });

    const asynFetchChatroom = async () => {
      let chatroomList = await axios
        .get(`${process.env.REACT_APP_DEV_URL}chatroom/all/${userInfo.id}`)
        .then((response) => {
          console.log(response);
          return response.data.map((chatroom) => {
            return chatroom.chatroom_id;
          });
        });
      socket.emit('new-user', {
        name: props.username,
        roomList: chatroomList,
      });
    };

    asynFetchChatroom();

    socket.on('user-connected', (name) => {
      console.log('Welcome to Mango Map, ' + name);
    });

    return () => {
      socket.emit('disconnect');
      socket.off();
    };
  }, []);

  const ROOT_CSS = {
    height: '100%',
    width: '100%',
  };

  const sendMessageToChatroom = (message, roomId, userId, username) => {
    console.log(message);
    socket.emit('chat-message', {
      message,
      roomId,
      userId,
      username,
    });
    props.sendMessage(message, roomId, userId, username);
    setInputMessage('');
  };

  // class Chat extends Component {
  // static contextType = ThemeContext;

  // constructor(props) {
  // super(props);
  // this.socket = io(process.env.REACT_APP_DEV_URL);
  // this.userInfo = JSON.parse(localStorage.getItem('user'));
  // this.props.initializeState(this.userInfo.user_name, this.userInfo.id);

  // this.props.fetchChatroomList(this.userInfo.id);

  // this.socket.on('chat-message', ({ message, roomId, userId, username }) => {
  //   if (roomId === this.props.currentRoomId) {
  //     this.props.sendMessage(message, roomId, userId, username);
  //   }
  // });

  // this.socket.on('join-chatroom', (data) => {
  //   console.log(data);
  // });

  //   this.socket.on('join-chatroom-user', (data) => {
  //     this.props.receiveMessage(
  //       data.username,
  //       `${data.username} has joined the chatroom!`
  //     );
  //   });
  // }

  // Alternative
  // async componentDidMount() {
  //   let roomList = await this.props.fetchChatroomList(this.props.userId);
  //   let newRoomList = roomList.map((room) => room.chatroom_id);

  //   this.socket.emit('new-user', {
  //     name: this.props.username,
  //     roomList: newRoomList,

  // async componentDidMount() {
  //   let userInfo = JSON.parse(localStorage.getItem('user'));
  //   this.props.initializeState(userInfo.user_name, userInfo.id);

  //   this.props.fetchChatroomList(userInfo.id);
  //   let chatroomList = await axios
  //     .get(`${process.env.REACT_APP_DEV_URL}chatroom/all/${userInfo.id}`)
  //     .then((response) => {
  //       console.log(response);
  //       return response.data.map((chatroom) => {
  //         return chatroom.chatroom_id;
  //       });
  //     });

  // this.socket.on('chat-message', ({ message, roomId, userId, username }) => {
  //   console.log(message, roomId, userId, username);
  //   if (roomId === this.props.currentRoomId) {
  //     this.props.sendMessage(message, roomId, userId, username);
  //   }
  // });

  // this.socket.on('join-chatroom', (data) => {
  //   console.log(data);
  // });

  // this.socket.on("chat-image", )

  // this.socket.emit('new-user', {
  //   name: this.props.username,
  //   roomList: chatroomList,
  // });

  // this.socket.on('user-connected', (name) => {
  //   console.log('Welcome to Mango Map, ' + name);
  // });

  // componentDidUpdate() {}

  // componentWillUnmount() {
  //   return () => {

  //   this.socket.emit('disconnect');
  //   this.socket.off()
  //   }
  // }

  // Sending the message to server
  // Will trigger the chat-message event in componentDidMount
  // const sendMessageHandler = (event) => {
  //   event.preventDefault();
  //   console.log(state.messages);
  //   socket.emit('send-chat-message', { message: inputMessage }, () => {
  //     console.log('sendMessageHandler callback is invoked');
  //     // Adding the new message just sent to the state
  //     this.setConversationHandler({
  //       userId: this.state.userId,
  //       user: this.state.username,
  //       message: this.state.messages,
  //     });

  //     // Clearing the input field
  //     setInputMessage('');
  //   });
  // };

  // const { isLightTheme, light, dark } = this.context;
  // const theme = isLightTheme ? light : dark;

  let displayedContent = props.currentRoomId ? (
    <div>
      <ChatToolbar
        roomname={props.roomname}
        backToChatList={props.backToChatList}
        currentRoomId={props.currentRoomId}
      />{' '}
      <ButtonGroup className='d-flex justify-content-center'>
        <Button
          style={
            {
              // background: theme.low,
              // color: theme.high,
              // borderColor: theme.low,
            }
          }
          onClick={() => {
            props.setGroupMapFalse();
          }}
        >
          <p className='bold blur'>Messages</p>
        </Button>
        <Button
          style={
            {
              // background: theme.low,
              // color: theme.high,
              // borderColor: theme.low,
            }
          }
          onClick={() => {
            props.setGroupMapTrue();
            console.log(props.groupMap);
          }}
        >
          <p className='bold blur'>Group Map</p>
        </Button>
      </ButtonGroup>
      <ScrollToBottom className={ROOT_CSS + ' textBox'}>
        <div className='margin5'>
          <Messages
            conversation={props.conversation}
            username={props.username}
            user={props.user}
          />
        </div>
      </ScrollToBottom>
      <div>
        <Input
          sendMessage={() =>
            sendMessageToChatroom(
              inputMessage,
              props.currentRoomId,
              props.userId,
              props.username
            )
          }
          messages={inputMessage}
          setMessage={setInputMessage}
        />{' '}
      </div>
    </div>
  ) : (
    // Display the list of chatrooms the user has
    props.roomList.map((room) => {
      return (
        <div
          className='chatroomListTesting paddingt1 margin1x'
          key={room.chatroom_id}
          onClick={() => {
            props.fetchChatroom(room.chatroom_id);
            props.setRoomname(room.room_name);
          }}
        >
          <ListGroup className=''>
            <ListGroupItem
              // color={theme.listcolor}
              style={
                {
                  // background: theme.mid,
                  // color: theme.high,
                  // borderColor: theme.highlight,
                }
              }
              className='justify-content-between d-flex'
            >
              <img
                className='material-icons roundimg'
                src='https://i.imgur.com/1jH2zcV.png'
                alt='Avatar'
              />
              <h6 className='d-flex align-items-center'>{room.room_name}</h6>
              <h6 className='d-flex align-items-center blur light'>
                {room.created_at.slice(0, 10)}
              </h6>
            </ListGroupItem>
          </ListGroup>
        </div>
      );
    })
  );

  return props.currentRoomId ? (
    props.groupMap ? (
      <>
        <ChatToolbar
          roomname={props.roomname}
          backToChatList={props.backToChatList}
          currentRoomId={props.currentRoomId}
        />{' '}
        <ButtonGroup className='d-flex justify-content-center'>
          <Button
            style={
              {
                // background: theme.low,
                // color: theme.high,
                // borderColor: theme.low,
              }
            }
            onClick={() => {
              props.setGroupMapFalse();
            }}
          >
            <p className='bold blur'>Messages</p>
          </Button>
          <Button
            style={
              {
                // background: theme.low,
                // color: theme.high,
                // borderColor: theme.low,
              }
            }
            onClick={() => {
              props.setGroupMapTrue();
              console.log(props.groupMap);
            }}
          >
            <p className='bold blur'>Group Map</p>
          </Button>
        </ButtonGroup>{' '}
        <p>This is a map</p>
      </>
    ) : (
      displayedContent
    )
  ) : (
    <>
      <div id='addChat'>
        <AddChat
          userId={props.userId}
          fetchChatroomList={props.fetchChatroomList}
        />
      </div>

      <div className='padding5'>{displayedContent}</div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    userId: state.chatroom.userId,
    username: state.chatroom.username,
    chatroomUserId: state.chatroom.chatroomUserId,
    roomList: state.chatroom.roomList,
    roomname: state.chatroom.roomname,
    groupMap: state.chatroom.groupMap,
    currentRoomId: state.chatroom.currentRoomId,
    messages: state.chatroom.messages,
    conversation: state.chatroom.conversation,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    initializeState: (username, userId) =>
      dispatch(initializeState(username, userId)),
    fetchChatroomList: (userId) => dispatch(fetchChatroomList(userId)),
    fetchChatroom: (id) => dispatch(fetchChatroom(id)),
    setMessage: (event) => dispatch(setMessage(event)),
    setGroupMapTrue: () => dispatch(setGroupMapTrue()),
    setGroupMapFalse: () => dispatch(setGroupMapFalse()),
    setRoomname: (roomname) => dispatch(setRoomname(roomname)),
    sendMessage: (message, roomId, userId, username) =>
      dispatch(sendMessage(message, roomId, userId, username)),
    receiveMessage: (username, message) =>
      dispatch(receiveMessage(username, message)),
    backToChatList: () => dispatch(backToChatList()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
