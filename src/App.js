import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './Components/Layout/Navbar'
import Home from './Components/Screen/HomeScreen'
import Map from './Components/Screen/MapScreen'
import MapDetails from './Components/Map/MapDetails'
import Blog from './Components/Screen/BlogScreen'
import Chat from './Components/Screen/ChatScreen'
import ChatDetails from './Components/Chat/ChatDetails'
import Profile from './Components/Screen/ProfileScreen'
import SignIn from './Components/Auth/SignIn'
import SignUp from './Components/Auth/SignUp'



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/map' component={Map} />
            <Route exact path='/map/:id' component={MapDetails} />
            <Route exact path='/blog' component={Blog} />
            <Route exact path='/chat' component={Chat}/>
            <Route exact path='/chat/:id' component={ChatDetails}/>
            <Route exact path='/profile' component={Profile} />
            <Route exact path='/signin' component={SignIn} />
            <Route exact path='/signup' component={SignUp} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
