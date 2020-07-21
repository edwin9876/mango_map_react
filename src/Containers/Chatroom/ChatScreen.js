import React, { Component } from 'react';
import Chat from './Chat/Chat';
import ChatToolbar from '../../Components/UI/Layout/ChatToolbar';
import SearchBar from '../../Components/UI/Layout/SearchBar';

import Join from './Join/Join';

export default class BlogScreen extends Component {
  state = {
    loggedIn: true,
  };

  render() {
    return (
      <div className='mb10vh'>
        {this.state.loggedIn ? (
          <>
            <ChatToolbar />
            <SearchBar />
            <Chat />
          </>
        ) : (
          <Join />
        )}
      </div>
    );
  }
}
