import React, { Component } from 'react';
import { ThemeContext } from '../../Contexts/Theme'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { connect } from 'react-redux';
import { createLocationImages } from '../../redux/actions/map'
import Select from 'react-select';


class ConnectedNewPic extends Component {
  static contextType = ThemeContext;

  constructor(props) {
    super(props)
    this.state = {
      location_id: 1,
      images64: [],
      locations: []
    }
  }
  async componentDidMount() {
    let locations = [...this.props.map.locations]
    let listLocations = locations.map((location) => {
      return {
        label: `${location.en} ${location.cn}`,
        value: location.id
      }
    })
    if (this.props.map.locations) {
      this.setState({
        ...this.state,
        locations: listLocations,
        location_id:parseInt(this.props.history.location.pathname.split('/')[3]),
        style: { color: 'green' }
      })
    }
  }

  componentWillUnmount() {
    this.setState({
      location_id: '',
      images64: [],
      locations: []
    })
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
    this.setState({
      ...this.state,
      location_id: e.value
    })
    console.log(this.state)
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

    let label, value
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
    if (this.props.history.location) {
      label = this.props.history.location.pathname.split('/')[2]
      value = parseInt(this.props.history.location.pathname.split('/')[3])
    }

    return (
      <div>
        <div className="margin5">
          <Label for="title" className="bold">Choose location</Label>
          <Select defaultValue={label && value ? { label: label, value: value } : undefined} onChange={this.handleChange} name='location_id' styles={customStyles} options={this.state.locations} />
        </div>

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