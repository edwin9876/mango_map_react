import React, { Component } from 'react';
import { ThemeContext } from '../../Contexts/Theme'
// Global - index.css , Local - Blog.css
import { connect } from 'react-redux';

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { createPost, fetchAllCategory, createPostImages } from '../../redux/actions/blog';


class ConnectedNewPost extends Component {
  static contextType = ThemeContext;

  constructor(props) {
    super(props)
    this.state = {
      post: {
        title: '',
        category: '',
        body: '',
        location_id: 1
      },
      categories: [],
      images64: [],
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
        categories: this.props.blog.categories,
      })
    }
    console.log(this.state)
  }

  componentWillUnmount() {
    this.setState({
      buttonId: null,
      categories: [],
      image64: [],
      post: {
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
    let newBlog_id
    let images64

    if (title && body && category && location_id && user_id) {
      await dispatch(createPost(newBlog, user_id))
    }
    console.log(this.props.blog.post)

    if (this.props.blog.post && this.state.post) {
      newBlog_id = this.props.blog.post.id
      images64 = this.state.images64
      console.log(newBlog_id)
    }

    
    if (images64 && newBlog_id) {
      console.log(images64)
      await dispatch(createPostImages(images64, newBlog_id))

      this.setState({
        buttonId: null,
        categories: [],
        image64: [],
        post: {
          title: '',
          category: '',
          body: '',
          location_id: 1
        },
        submitted: true,
      })
    }

  }


  handleImageChange = (e) => {
    let file = e.target.files[0];
    let reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onloadend = () => {
      let images64 = [...this.state.images64]
      images64.push(reader.result.split('base64,')[1])
      this.setState({
        ...this.state,
        images64: images64
      })

      console.log(this.state)

    }
  }

  handleChange = (e) => {
    let opts = []
    if (e.target.name === 'category') {
      for (let opt of e.target.options) {

        if (opt.selected) {
          opts.push({ id: opt.id, name: opt.value })
        }

      }
      this.setState({
        post: {
          ...this.state.post,
          category: opts
        }
      })

    } else {
      this.setState({
        post: {
          ...this.state.post,
          [e.target.name]: e.target.value
        }
      })

    }

  }

  render() {
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;

    return (
      <div>
        <Form className="margin5" id="createPost" onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="title" className="bold">Title</Label>
            <Input style={{ background: theme.low, borderColor: theme.highlight, color: theme.high }} onChange={this.handleChange} type="text" name="title" placeholder="Title" />
          </FormGroup>

          <FormGroup>
            <Label for="exampleSelectMulti" className="bold">Choose Category<span className="light">(select 1 or more)</span></Label>
            <Input style={{ background: theme.low, borderColor: theme.highlight, color: theme.high }} onChange={this.handleChange} type="select" name="category" multiple >
              {this.state.categories ?
                this.state.categories.map((c, i) => {
                  return <option key={i} id={c.id}> {c.category}</option>
                }) : null}


            </Input>
          </FormGroup>

          <FormGroup>
            <Label for="body" className="bold">Contents</Label>
            <Input style={{ background: theme.low, borderColor: theme.highlight, color: theme.high }} onChange={this.handleChange} type="textarea" name="body" placeholder="Write here" rows="10" />
          </FormGroup>

          <FormGroup>
            <Label for="exampleFile" className="bold">Pictures</Label>
            <Input onChange={this.handleImageChange} style={{ background: theme.low, color: theme.high }} type="file" name="file" />
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