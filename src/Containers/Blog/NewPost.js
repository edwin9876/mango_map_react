import React, { Component } from 'react';
import { ThemeContext } from '../../Contexts/Theme'
// Global - index.css , Local - Blog.css
import { connect } from 'react-redux';

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { createPost, fetchAllCategory, createPostImages } from '../../redux/actions/blog';
import { fetchAllLocations } from '../../redux/actions/map'
import Select from 'react-select';


class ConnectedNewPost extends Component {
  static contextType = ThemeContext;

  constructor(props) {
    super(props)
    this.state = {
      post: {
        title: '',
        category: '',
        body: '',
        location_id: ''
      },
      categories: [],
      images64: [],
      submitted: false,
    };
  }
  async componentDidMount() {
    let { dispatch } = this.props

    await dispatch(fetchAllCategory())
    await dispatch(fetchAllLocations())

    let locations = [...this.props.map.locations]
    let listLocations = locations.map((location) => {
      return {
        label: `${location.en} ${location.cn}`,
        value: location.id
      }
    })
    console.log(this.props)
    if (this.props.blog.categories) {
      this.setState({
        ...this.state,
        categories: this.props.blog.categories,
        locations: listLocations,
        style: { color: 'green' }
      })
    }
    console.log(this.state)
  }

  selectLocation = (e) => {
    console.log('selected')
    this.setState({
      ...this.state,
      selected: !this.state.selected
    })
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

      this.props.history.push(`/blog/${newBlog_id}`)

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

    if (e.label) {
      this.setState({
        post: {
          ...this.state.post,
          location_id: e.value
        }
      })
    }
    else if (e.target.name && e.target.name === 'category') {
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

    }

    else {
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
    // dummy data for location list. must have label and value attributes inside of object.

    //search select styling 
    const customStyles = {
      container: (base, state) => ({
        ...base,
        borderRadius: '5px',
        border: state.isFocused ? "1px thin #ccd637" : "1px solid #ccd637",
        color: "#858684",
        transition:
          null,
        "&:hover": {
          boxShadow: null
        }
      }),
      control: (base, state) => ({
        ...base,
        border: 'transparent',
        background: "transparent"
      }),
      valueContainer: (base, state) => ({
        ...base,
        border: 'none',
        background: state.isFocused ? "#ccd637" : "transparent",
      }),
      multiValue: (base, state) => ({
        ...base,
        background: "lightYellow",
        maxWidth: "100px"
      })
    }

    return (
      <div>
        <div className="margin5">
          <Label for="title" className="bold">Choose location</Label>
          <Select onChange={this.handleChange} name='location_id' styles={customStyles} options={this.state.locations} />
        </div>

        <Form id="createPost" onSubmit={this.handleSubmit} className="uploader margin5" encType="multipart/form-data">

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
            <Input onChange={this.handleImageChange} style={{ background: theme.low, color: theme.high }} type="file" id="file" multiple />
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