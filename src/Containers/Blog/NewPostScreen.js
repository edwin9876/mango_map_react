import React, { Component } from 'react'
import SearchBar from '../../Components/UI/Layout/SearchBar'
import { Redirect } from 'react-router-dom';


class Posting extends Component {
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
              <h4 className="center gray70">Add New</h4>
  
              <div className="row">
                <div className="input-field col s12">
                <label for="title">Title</label>
                  <input
                    value={this.state.title}
                    onChange={(event) => this.setState({ title: event.target.value })}
                    id="title" type="text" className="validate " />
          
                </div>
              </div>
  
              <div className="row">
  
                <div className="col s12">
                  <label>Categories</label>
                </div>
              </div>
              
            <select className="browser-default">
              <option value="" disabled selected>Choose your option</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </select>
            <br/>
  
  
            <div className="row">
              <div className="input-field col s12">
              <label for="Content">Content</label>
                <textarea
                  value={this.state.content}
                  onChange={(event) => this.setState({ content: event.target.value })}
                  id="Content" className="materialize-textarea" rows="10" cols="50" ></textarea>
         
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
  
  export default Posting;
  