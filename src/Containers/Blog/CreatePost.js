import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPost } from '../../redux/actions/blog';
// import axios from '../../../axios';
import { Redirect } from 'react-router-dom';
import SearchBar from '../../Components/UI/Layout/SearchBar'
// Global - index.css , Local - Blog.css
import './Blog.css';

class CreatePost extends Component {
  state = {
    title: '',
    category:'',
    content: '',
    author: 'Max',
    submitted: false,
  };


  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createPost(this.state);
  }

  //set the id as state 
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  // axios.post(`/posts`, data).then((response) => {
  //       console.log(response);
  //       this.setState({ submitted: true });
  //     });

  render() {
    let redirect = null;
    if (this.state.submitted) {
      redirect = <Redirect to='/blog' />;
    }

    return (
      <div className="row margin1" id="Post_container">
        <SearchBar />
        {redirect}

        <form onSubmit={this.handleSubmit} className="col s12 white" enctype="multipart/form-data">

          <div className="input-field col s12">
            <input type="text" id='title' onChange={this.handleChange} />
            <label htmlFor="title">Title</label>
          </div>

          <div className="row">

            <div className="col s12">
              <label className="bold">Categories</label>
            </div>
          </div>

          <select className="browser-default" id="category" onChange={this.handleChange}>
            <option id="category" value="" disabled selected>Choose your option</option>
            <option id="category" value="1">Option 1</option>
            <option id="category" value="2">Option 2</option>
            <option id="category" value="3">Option 3</option>
          </select>


          <div className="margin1">
            <label htmlFor="content">Contents</label>
            <textarea className="" onChange={this.handleChange} rows="10" cols="10" ></textarea>
          </div>

          {/* <div>
              <label for="fileToUpload">
                Upload Picture
              </label>
            
              <input type="file" name="fileToUpload" id="fileToUpload" onchange="fileSelected();" accept="image/*" />
            </div> */}
          {/* <br /> */}

          <div className="center">
            <button className="btn margin5"
              type="submit" name="action">Add Post
          </button>
          </div>
        </form>
      </div >
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createPost: (post) => dispatch(createPost(post))
  }
}


export default connect(null, mapDispatchToProps)(CreatePost);
