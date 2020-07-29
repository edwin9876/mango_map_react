import React, { Component } from 'react';
import { ThemeContext } from '../../Contexts/Theme'
// Global - index.css , Local - Blog.css
import './Blog.css';
import { connect } from 'react-redux';

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { createPost, fetchAllCategory } from '../../redux/actions/blog';


class ConnectedNewPost extends Component {
    static contextType = ThemeContext;

    constructor(props) {
      super(props)
      this.state = {
        post: {
          categories: [],
          title: '',
          category: '',
          body: '',
          location_id: 1
        },
        submitted: false,
      };
    }
    async componentDidMount() {
      let { dispatch } = this.props
  
      await dispatch(fetchAllCategory())
      console.log(this.props)
      if (this.props.blog.categories) {
        this.setState({
          ...this.state,
          post: {
            ...this.state.post,
            categories: this.props.blog.categories
          }
        })
      }
      console.log(this.state)
    }
  
    componentWillUnmount() {
      this.setState({
        buttonId: null,
        post: {
          categories: [],
          title: '',
          category: '',
          body: '',
          location_id: 1
        },
        submitted: false,
      })
    }
    handleSubmit = async (e) => {
      e.preventDefault();
      this.setState({ submitted: true })
      const { title, body, location_id, category } = this.state.post
      const user_id = this.props.auth.user.id
      const { dispatch } = this.props
      const newBlog = this.state.post
      console.log(newBlog)
      console.log(user_id)
      if (title && body && category && location_id && user_id){
        await dispatch(createPost(newBlog, user_id))
        console.log(this.state)
      }
    }
    handleChange = (e) => {
      let opts = []
      if (e.target.name === 'category') {
        for (let opt of e.target.options) {
  
          if (opt.selected) {
            opts.push(opt.value)
          }
  
        }
        this.setState({
          post: {
            ...this.state.post,
            category: opts
          }
        })
        console.log(this.state)
  
      } else {
        this.setState({
          post: {
            ...this.state.post,
            [e.target.name]: e.target.value
          }
        })
  
      }
      console.log(this.state)
  
    }

    render() {
        const { isLightTheme, light, dark } = this.context;
        const theme = isLightTheme ? light : dark;
    
      console.log(this.props)
        return (
            <div>
             <Form className="margin5" id="createPost" onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="title">Title</Label>
            <Input style={{ background: theme.low, borderColor: theme.highlight, color: theme.high }} onChange={this.handleChange} type="text" name="title" placeholder="Title" />
          </FormGroup>

          <FormGroup>
            <Label for="exampleSelectMulti">Choose Category</Label>
            <Input style={{ background: theme.low, borderColor: theme.highlight, color: theme.high }} onChange={this.handleChange} type="select" name="category" multiple >
              {this.state.post.categories ?
                this.state.post.categories.map((c, i) => {
                  return <option key={i} > {c.category}</option>
                }) : null}


            </Input>
          </FormGroup>

          <FormGroup>
            <Label for="body">body</Label>
            <Input style={{ background: theme.low, borderColor: theme.highlight, color: theme.high }} onChange={this.handleChange} type="textarea" name="body" placeholder="Write here" rows="10" />
          </FormGroup>

          <FormGroup>
            <Label for="exampleFile">Pictures</Label>
            <Input style={{ background: theme.low, color: theme.high }} type="file" name="file" />
            <FormText color="muted">
              Upload pictures you want to attach to the post
            </FormText>
          </FormGroup>

          <div className="d-flex justify-content-center">
            <Button style={{ backgroundColor: theme.highlight }} className="btn margin5 noBorder"
              type="submit" name="action" >Add Post
            </Button>
          </div>


        </Form>
            </div>
        )
    }
}


const mapStateToProps = state => {
  return {
    ...state
  }
}

const NewPost = connect(mapStateToProps)(ConnectedNewPost);

export default NewPost