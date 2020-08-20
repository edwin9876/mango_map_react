import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chat from './Chat/Chat';
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
            <div>
              <Chat />
            </div>
          </>
        ) : (
          null
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
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatScreen);
