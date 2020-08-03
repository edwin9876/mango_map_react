import React, { Component } from 'react';
import { ThemeContext } from '../../Contexts/Theme'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { connect } from 'react-redux';
import { createLocationImages } from '../../redux/actions/map'


class ConnectedNewPic extends Component {
  static contextType = ThemeContext;

  constructor(props) {
    super(props)
    this.state = {
      location_id: 1,
      images64: []
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

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ submitted: true })
    const user_id = this.props.auth.user.id
    const location_id = this.state.location_id
    const { dispatch } = this.props
    let images64


    if (this.state.images64) {
      images64 = this.state.images64
    }


    if (images64 && user_id && location_id) {
      console.log(images64)
      await dispatch(createLocationImages(images64, user_id, location_id))

      this.props.history.push(`/spot/${location_id}`)

    }

  }
  render() {
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;


    return (
      <div>

        <Form className="margin5" id="createPost" onSubmit={this.handleSubmit} className="uploader margin5" encType="multipart/form-data">

          <FormGroup onSubmit={this.handleSubmit}>
            <Input onChange={this.handleImageChange} style={{ background: theme.low, color: theme.high }} type="file" id="file" multiple />
            <FormText color="muted">
              Upload pictures you want to attach to the post
            </FormText>
          </FormGroup>

          <div className="d-flex justify-content-center">
            <Button style={{ backgroundColor: theme.highlight }} className="btn margin5 noBorder"
              type="submit" name="action" >Add Picture
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

const NewPic = connect(mapStateToProps)(ConnectedNewPic)

export default NewPic