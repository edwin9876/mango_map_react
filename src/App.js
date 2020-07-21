import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Navbar from './Components/UI/Layout/Navbar';
import Home from './Containers/Map/MapScreen';
import Blog from './Containers/Blog/BlogScreen';
import Chat from './Containers/Chatroom/ChatScreen';
import Profile from './Containers/Profile/ProfileScreen';

import MapDetails from './Components/Map/MapDetails';
import BlogNew from './Containers/Blog/NewPost/NewPost';
import BlogDetails from './Components/Blog/BlogDetails';
import ChatDetails from './Components/Chat/ChatDetails';
import SignIn from './Components/Auth/SignIn';
import SignUp from './Components/Auth/SignUp';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/location/:id' component={MapDetails} />
            <Route exact path='/blog' component={Blog} />
            <Route exact path='/blog/new' component={BlogNew} />
            <Route exact path='/blog/:id' component={BlogDetails} />
            <Route exact path='/chat' component={Chat} />
            <Route exact path='/chat/:id' component={ChatDetails} />

            <Route
              exact
              path='/profile'
              render={() => {
                return this.state.isLoggedIn ? (
                  <Redirect to='/profile/:id' />
                ) : (
                  <Redirect to='/signin' />
                );
              }}
            />

            <Route exact path='/profile/:id' component={Profile} />

            <Route exact path='/signin' component={SignIn} />
            <Route exact path='/signup' component={SignUp} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
  // Test Liine
}

export default App;
