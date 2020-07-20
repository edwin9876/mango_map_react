import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
import FullPost from './FullPost/FullPost';
// import NewPost from './NewPost/NewPost';

import asyncComponent from '../../hoc/asyncComponent';



const AsyncNewPost = asyncComponent(() => import('./NewPost/NewPost'));

class Blog extends Component {
  render() {
    return (
      <div className='Blog'>
        <header>
          <nav>
            <ul>
              <li>
                <NavLink to='/posts/'>Posts</NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: '/new-post',
                    hash: '#submit',
                    search: '?quick-submit=true',
                  }}
                  exact
                >
                  New Post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route path='/new-post' exact component={AsyncNewPost} />
          <Route path='/posts' component={Posts} />
          {/* <Redirect from='/' to='/posts' /> */}
        </Switch>
      </div>
    );
  }
}

export default Blog;
