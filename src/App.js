import React, { Component } from 'react';
import {withRouter, BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import {connect} from 'react-redux'

import Navbar from './components/UI/Layout/Navbar';
import Home from './Containers/Map/MapScreen';
import Blog from './Containers/Blog/BlogScreen';
import Chat from './components/Chatroom/ChatScreen';
import Profile from './Containers/Profile/ProfileScreen';
import EditProfile from './Containers/Profile/EditProfile'

import SpotDetails from './components/Map/SpotDetails';
import MapDetails from './components/Map/MapDetails';
import CreatePost from './Containers/Blog/CreatePost';
import BlogDetails from './Containers/Blog/BlogDetails';
import NewLocation from './Containers/Blog/NewLocation';
import TripDetails from './components/UI/Dashboard/TripDetails'
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';
import ChatroomSummary from './components/Chatroom/Chat/ChatroomSummary'
import CreateTrip from './components/Chatroom/CreateTrip'

import ThemeContextProvider from './Contexts/Theme';
import 'bootstrap/dist/css/bootstrap.min.css';

const mapStateToProps= (state)=>{
  return {
    ...state
  }
}

class ConnectedApp extends Component {
  // constructor() {
  //   super();
  // }

  render() {
    let {loggedIn} = this.props.auth

    return (
      <BrowserRouter>
        <div className='App'>
          <ThemeContextProvider>
            <Navbar />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/location/:id' component={MapDetails} />
              <Route exact path='/createlocation' component={NewLocation}/>
              <Route exact path='/blog' component={Blog} />
              <Route path='/createpost' component={CreatePost} />
              <Route exact path='/blog/:id' component={BlogDetails} />
              <Route exact path='/chat' component={Chat} />
              <Route exact path='/createtrip' component={CreateTrip}/>
              <Route exact path='/trip/:id' component={TripDetails}/>
              <Route exact path='/spot/:id' component={SpotDetails}/>
              <Route exact path='/test' component={ChatroomSummary}/>


              <Route
                exact
                path='/profile'
                render={() => {
                  return loggedIn ? (
                    <Redirect to='/profile/:id' />
                  ) : (
                    <Redirect to='/signin' />
                  );
                }}
              />

              <Route exact path='/profile/:id' component={Profile} />
              
              <Route exact path='/profile/:id/edit' component={EditProfile} />
              <Route exact path='/signin' component={SignIn} />
              <Route exact path='/signup' component={SignUp} />
            </Switch>
          </ThemeContextProvider>
        </div>
      </BrowserRouter>
    );
  }
  // Test Liine
}

const App = connect(mapStateToProps)(ConnectedApp)


export default App;



