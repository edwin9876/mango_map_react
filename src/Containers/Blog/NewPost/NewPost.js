import React, { Component } from 'react';
// import axios from '../../../axios';
import { Redirect } from 'react-router-dom';
import SearchBar from '../../../Components/UI/Layout/SearchBar'
import '../../../index.css'

import './NewPost.css';

class NewPost extends Component {
  state = {
    title: '',
    content: '',
    author: 'Max',
    submitted: false,
  };

  componentDidMount() {
    // console.log(this.props);

  }

  postDataHandler = () => {
    const data = {
      title: this.state.title,
      body: this.state.content,
      author: this.state.author,
    };

    //   axios.post(`/posts`, data).then((response) => {
    //     console.log(response);
    //     this.setState({ submitted: true });
    //   });
  };

  render() {
    let redirect = null;
    if (this.state.submitted) {
      redirect = <Redirect to='/posts' />;
    }

    return (
      <div className="row margin1" id="Post_container">
        <SearchBar />

        <form className="col s12" enctype="multipart/form-data" method="post">


          <div>
            {redirect}

            <div className="row">
              <div className="input-field col s12">
                <input
                  value={this.state.title}
                  onChange={(event) => this.setState({ title: event.target.value })}
                  id="title" type="text" className="validate" />
                <label for="title">Title</label>
              </div>
            </div>

            <div className="row">

              <div className="col s12">
                <label className="bold">Categories</label>
              </div>
            </div>

            <select className="browser-default">
              <option value="" disabled selected>Choose your option</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </select>


            <div className="row margin5">
              <div className="col s12">
                <textarea rows="10" cols="10"
                  value={this.state.content}
                  onChange={(event) => this.setState({ content: event.target.value })}
                  id="Content" >
                  Write your story here
                </textarea>
              </div>
            </div>

            <div>
              <label for="fileToUpload">
                Upload Picture
              </label>
            
              <input type="file" name="fileToUpload" id="fileToUpload" onchange="fileSelected();" accept="image/*" />
            </div>
            <br/>

            <div className="center">
              <button className="btn margin5"
                onClick={this.postDataHandler}
                type="submit" name="action">Add Post
          </button>
            </div>

          </div>
        </form>
      </div >
    );
  }
}

export default NewPost;
