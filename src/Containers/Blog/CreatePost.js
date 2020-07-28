import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { createPost } from '../../redux/actions/blog';
import { ThemeContext } from '../../Contexts/Theme'
// import axios from 'axios';
import SearchBar from '../../Components/UI/Layout/SearchBar'
// Global - index.css , Local - Blog.css
import './Blog.css';
import { Button, ButtonGroup } from 'reactstrap';
import NewPost from './NewPost'
import NewPic from './NewPic'

class CreatePost extends Component {
  static contextType = ThemeContext;

  state = {
    buttonId: null,
    title: '',
    category: '',
    content: '',
    author: 'Max',
    submitted: false,
  };

  //change what to render upon click
  handleRender = (id) => {
    this.setState({ buttonId: id });
  }

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

  render() {
    // setting themecontext
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;

    let redirect = null;

    if (this.state.submitted) {
      redirect = <Redirect to='/blog' />;
    }

    return (
      <div id="Post_container" style={{ background: theme.low, color: theme.high }}>
        <SearchBar />
        {redirect}

        <ButtonGroup className="d-flex justify-content-center paddingy1">
          <Button onClick={() => this.handleRender(1)} style={{ background: theme.low, color: theme.high, borderColor: theme.low }}> <i className="material-icons">create</i></Button>

          <Button onClick={() => this.handleRender(2)} style={{ background: theme.low, color: theme.high, borderColor: theme.low }}> <i className="material-icons">add_a_photo</i></Button>
        </ButtonGroup>

        {this.state.buttonId === 1 && <NewPost />}
        {this.state.buttonId === 2 && <NewPic />}
        {this.state.buttonId !== 1 && this.state.buttonId !== 2 && <NewPost />}
        
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
