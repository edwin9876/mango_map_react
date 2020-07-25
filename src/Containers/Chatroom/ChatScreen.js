import React, { Component } from 'react';
import Chat from './Chat/Chat';
import ChatToolbar from '../../Components/UI/Layout/ChatToolbar';
import SearchBar from '../../Components/UI/Layout/SearchBar';
import Join from './Join/Join';

import { ThemeContext } from '../../Contexts/Theme'

export default class BlogScreen extends Component {
  static contextType = ThemeContext;

  state = {
    loggedIn: true,
  };

  render() {
    const {isLightTheme, light, dark} = this.context;
    const theme = isLightTheme ? light : dark;
    return (
      <div id="chat_container" style={{ background: theme.low}}>
        {this.state.loggedIn ? (
          <>
            <ChatToolbar />
            <SearchBar />
            <div className="">
            <Chat /></div>
          </>
        ) : (
          <Join />
        )}
      </div>
    );
  }
}
