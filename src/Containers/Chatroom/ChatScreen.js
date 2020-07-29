import React, { Component } from 'react';
import { connect } from 'react-redux';

import { backToChatList } from '../../redux/actions/chatroom';

import Chat from './Chat/Chat';
import ChatToolbar from '../../Components/UI/Layout/ChatToolbar';
import SearchBar from '../../Components/UI/Layout/SearchBar';
import Join from './Join/Join';

import { ThemeContext } from '../../Contexts/Theme';

class ChatScreen extends Component {
  static contextType = ThemeContext;

  state = {
    loggedIn: true,
  };

  render() {
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;
    return (
      <div id='chat_container' style={{ background: theme.low }}>
        {this.state.loggedIn ? (
          <>
            <ChatToolbar backToChatList={this.props.backToChatList} />
            <SearchBar />
            <div className=''>
              <Chat />
            </div>
          </>
        ) : (
          <Join />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentRoomId: state.chatroom.currentRoomId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    backToChatList: () => dispatch(backToChatList()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatScreen);
