import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Post from '../../../Components/Blog/Post';
import '../../../Components/Blog/Post.css';
import FullPost from '../FullPost/FullPost';
import { connect } from 'react-redux'

class Posts extends Component {
  
  render() {
    console.log(this.state)

    const post = this.props.post ? (
      <div className="post">
        <h4 className="center">{this.props.post.title}</h4>
        <p>{this.props.post.body}</p>
      </div>
    ) : (
      <div className="center">Loading post...</div>
    );

    return (
      <div>
       {post}
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.post_id;
  return {
    post: state.posts.find(post => post.id === id)
  }
}

export default connect(mapStateToProps)(Posts)




// posts = this.state.posts.map((post) => {
//         return (
//           <Post
//             key={post.id}
//             title={post.title}
//             author={post.author}
//             clicked={() => this.postSelectedHandler(post.id)}
//           />
//         )})