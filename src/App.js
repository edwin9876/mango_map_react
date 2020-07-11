import React, { Component } from 'react';
import Navbar from './Components/Layout/Navbar'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './Components/Home/Home'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
