import React, { useState, useEffect } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import axios from "axios";
import { connect } from "react-redux";
import io from "socket.io-client";
import { Button, ButtonGroup, ListGroup, ListGroupItem } from "reactstrap";
import ChatToolbar from "../../UI/Layout/ChatToolbar";
import Input from "./Input/Input";
import Messages from "./Messages/Messages";
import GroupMap from "./GroupMap/GroupMap";
import AddChat from "../../UI/Layout/AddChat";
import { ThemeContext } from "../../../Contexts/Theme";
import ChatroomSummary from "./ChatroomSummary";
import {
  backToChatList,
  fetchChatroomList,
  fetchChatroom,
  setMessage,
  setRoomname,
  sendMessage,
  receiveMessage,
  initializeState,
  setGroupMapTrue,
  setGroupMapFalse,
} from "../../../redux/actions/chatroom";

const Chat = (props) => {
  let socket = io(process.env.REACT_APP_DEV_URL);
  let userInfo;
  let test = "Test";

  const [inputMessage, setInputMessage] = useState("");

  userInfo = JSON.parse(localStorage.getItem("user"));

  props.initializeState(userInfo.user_name, userInfo.id);

  useEffect(() => {
    props.fetchChatroomList(userInfo.id);

    socket.on("chat-message", ({ message, roomId, userId, username }) => {
      if (roomId === props.currentRoomId) {
        props.sendMessage(message, roomId, userId, username);
      }
    });

    socket.on("join-chatroom", (data) => {});

    socket.on("join-chatroom-user", (data) => {
      props.receiveMessage(
        data.username,
        `${data.username} has joined the chatroom!`
      );
    });

    const asynFetchChatroom = async () => {
      let chatroomList = await axios
        .get(`${process.env.REACT_APP_DEV_URL}chatroom/all/${userInfo.id}`)
        .then((response) => {
          return response.data.map((chatroom) => {
            return chatroom.chatroom_id;
          });
        });
      socket.emit("new-user", {
        name: props.username,
        roomList: chatroomList,
      });
    };

    asynFetchChatroom();

    socket.on("user-connected", (name) => {});

    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, []);

  const ROOT_CSS = {
    height: "100%",
    width: "100%",
  };

  const sendMessageToChatroom = (message, roomId, userId, username) => {
    socket.emit("chat-message", {
      message,
      roomId,
      userId,
      username,
    });
    props.sendMessage(message, roomId, userId, username);
    setInputMessage("");
  };

  return (
    <ThemeContext.Consumer>
      {(context) => {
        const { isLightTheme, light, dark } = context;
        const theme = isLightTheme ? light : dark;

        let displayedContent = props.currentRoomId ? (
          <div>
            <ChatToolbar
              roomname={props.roomname}
              backToChatList={props.backToChatList}
              currentRoomId={props.currentRoomId}
            />{" "}
            <ButtonGroup className="d-flex justify-content-center">
              <Button
                style={{
                  background: theme.low,
                  color: theme.high,
                  borderColor: theme.low,
                }}
                onClick={() => {
                  props.setGroupMapFalse();
                }}
              >
                <p className="bold blur">Messages</p>
              </Button>
              <Button
                style={{
                  background: theme.low,
                  color: theme.high,
                  borderColor: theme.low,
                }}
                onClick={() => {
                  props.setGroupMapTrue();
                }}
              >
                <p className="bold blur">Group Map</p>
              </Button>
            </ButtonGroup>
            <ScrollToBottom className={ROOT_CSS + " textBox"}>
              <div className="margin5">
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
              />{" "}
            </div>
          </div>
        ) : (
          // Display the list of chatrooms the user has
          props.roomList.map((room) => {
            return (
              <div
                className="chatroomListTesting paddingt1 margin1x"
                key={room.chatroom_id}
                onClick={() => {
                  props.fetchChatroom(room.chatroom_id);
                  props.setRoomname(room.room_name);
                }}
              >
                <ListGroup className="">
                  <ListGroupItem
                    color={theme.listcolor}
                    style={{
                      background: theme.mid,
                      color: theme.high,
                      borderColor: theme.highlight,
                    }}
                    className="justify-content-between d-flex"
                  >
                    <img
                      className="material-icons roundimg"
                      src="https://i.imgur.com/9TowUuJ.png"
                      alt="Avatar"
                    />
                    <h6 className="d-flex align-items-center">
                      {room.room_name}
                    </h6>
                    <h6 className="d-flex align-items-center blur light">
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
              />{" "}
              <ButtonGroup className="d-flex justify-content-center">
                <Button
                  style={{
                    background: theme.low,
                    color: theme.high,
                    borderColor: theme.low,
                  }}
                  onClick={() => {
                    props.setGroupMapFalse();
                  }}
                >
                  <p className="bold blur">Messages</p>
                </Button>
                <Button
                  style={{
                    background: theme.low,
                    color: theme.high,
                    borderColor: theme.low,
                  }}
                  onClick={() => {
                    props.setGroupMapTrue();
                  }}
                >
                  <p className="bold blur">Group Map</p>
                </Button>
              </ButtonGroup>{" "}
              <GroupMap />
            </>
          ) : (
            displayedContent
          )
        ) : (
          <>
            <div id="addChat">
              <AddChat
                userId={props.userId}
                fetchChatroomList={props.fetchChatroomList}
              />
            </div>

            <div className="padding5">{displayedContent}</div>
          </>
        );
      }}
    </ThemeContext.Consumer>
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
