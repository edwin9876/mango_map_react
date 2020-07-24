import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { createPost } from '../../redux/actions/blog';
import { ThemeContext } from '../../Contexts/Theme'
// import axios from '../../../axios';
import SearchBar from '../../Components/UI/Layout/SearchBar'
// Global - index.css , Local - Blog.css
import './Blog.css';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class CreatePost extends Component {
  static contextType = ThemeContext;

  state = {
    title: '',
    category: '',
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
    // setting themecontext
    const {isLightTheme, light, dark} = this.context;
    const theme = isLightTheme ? light : dark;

    let redirect = null;
    if (this.state.submitted) {
      redirect = <Redirect to='/blog' />;
    }

    return (
      <div id="Post_container" style={{ background: theme.low, color : theme.high}}>
        <SearchBar />
        {redirect}


        <Form className="margin5" id="createPost" onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="title">Title</Label>
            <Input style={{ borderColor: theme.highlight}} onChange={this.handleChange} type="text" name="title" id="title" placeholder="Title" />
          </FormGroup>

          <FormGroup>
          <Label for="exampleSelectMulti">Choose Category</Label>
          <Input style={{ borderColor: theme.highlight}} type="select" name="selectMulti" id="exampleSelectMulti" multiple>
            <option id="category" >1</option>
            <option id="category" >2</option>
            <option id="category" >3</option>
            <option id="category" >4</option>
            <option id="category" >5</option>
          </Input>
        </FormGroup>

          <FormGroup>
            <Label for="contents">Contents</Label>
            <Input style={{ borderColor: theme.highlight}} onChange={this.handleChange} type="textarea" name="contents" id="contents" placeholder="Write here" rows="10" />
          </FormGroup>

          <FormGroup>
          <Label for="exampleFile">File</Label>
          <Input style={{ borderColor: theme.highlight}} type="file" name="file" id="exampleFile" />
          <FormText color="muted">
            Upload pictures you want to attach to the post
          </FormText>
        </FormGroup>

          <div className="d-flex justify-content-center">
            <Button style={{ backgroundColor: theme.highlight}} className="btn margin5 noBorder"
              type="submit" name="action" >Add Post
          </Button>
          </div>


        </Form>
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
