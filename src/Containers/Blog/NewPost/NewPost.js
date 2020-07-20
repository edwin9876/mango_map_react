import React, { Component } from 'react';
// import axios from '../../../axios';
import { Redirect } from 'react-router-dom';
import SearchBar from '../../../Components/Layout/SearchBar'

// import './NewPost.css';

class NewPost extends Component {
  state = {
    title: '',
    content: '',
    author: 'Max',
    submitted: false,
  };

  componentDidMount() {
    console.log(this.props);

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
      <div className="row">
        <SearchBar />

        <form className="col s12">
          <div className="row"></div>

          <div >
            {redirect}
            <h4>Add a Post</h4>

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
                <label>Categories</label>
              </div>
            </div>
            
          <select class="browser-default">
            <option value="" disabled selected>Choose your option</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </select>


          <div className="row">
            <div className="input-field col s12">
              <textarea
                value={this.state.content}
                onChange={(event) => this.setState({ content: event.target.value })}
                id="Content" className="materialize-textarea"></textarea>
              <label for="Content">Content</label>
            </div>
          </div>

          <button className="btn waves-effect waves-light"
            onClick={this.postDataHandler}
            type="submit" name="action">Add Post
    
          </button>
          </div>
        </form>
      </div >
    );
  }
}

export default NewPost;
