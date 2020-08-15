import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import axios from 'axios';
import { ThemeContext } from '../../Contexts/Theme';

class CreateTrip extends Component {
  static contextType = ThemeContext;
  constructor(props) {
    super(props);
    this.state = {
      date: null,
      description: null,
    };
  }

  componentDidMount() {}

  dateHandler = (event) => {
    this.setState({ ...this.state, date: event.target.value });
  };
  descriptionHandler = (event) => {
    this.setState({ ...this.state, description: event.target.value });
  };

  onSubmitHandler = async () => {
    let lat, lng;
    if (this.props.location.search) {
      let queryString = this.props.location.search.split('?');
      if (queryString[1].includes('lat') && queryString[2].includes('lng')) {
        lat = queryString[1].split('=')[1];
        lng = queryString[2].split('=')[1];
      }
      await axios
        .post(`${process.env.REACT_APP_DEV_URL}chatroom/trips`, {
          lat: lat,
          lng: lng,
          date: this.state.date,
          description: this.state.description,
          chatroomId: this.props.currentRoomId,
        })
        .then(() => {
          alert('You have created a trip');
          this.props.history.push('/chat');
        });
    }
  };

  render() {
    let string = this.props.location.search.split('?')[1];
    if (string.split('=')[0] === 'exist') {
      string = string.split('=')[1];
      string = string.split('%20');
      string = string.join(' ');
    } else {
      string = 'A New Location';
    }

    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;

    return (
      <div
        className="margin5"
        id="Post_container"
        style={{ background: theme.low, color: theme.high }}
      >
        <div
          className="d-flex justify-content-between paddingt1"
          onClick={() => this.props.history.push('/chat')}
        >
          <i className="material-icons gray50">arrow_back</i>
        </div>
        <div className="margin5x paddingt1">
          <Label for="date" className="bold">
            Location
          </Label>
          <p classNam="gray70">{string}</p>
        </div>
        <Form
          id="createPost"
          onSubmit={this.descriptionHandler}
          className="uploader margin5"
          encType="multipart/form-data"
        >
          <FormGroup>
            <Label for="date" className="bold">
              Date
            </Label>
            <Input
              style={{
                background: theme.low,
                borderColor: theme.highlight,
                color: theme.high,
              }}
              onChange={(event) => {
                this.dateHandler(event);
              }}
              type="date"
              name="date"
            />
          </FormGroup>

          <FormGroup>
            <Label for="description" className="bold">
              Description
            </Label>
            <Input
              style={{
                background: theme.low,
                borderColor: theme.highlight,
                color: theme.high,
              }}
              onChange={(event) => {
                console.log(event.target.value);
                this.descriptionHandler(event);
              }}
              type="text"
              name="description"
              placeholder="Description"
            />
          </FormGroup>

          <div className="d-flex justify-content-center">
            <Button
              style={{ backgroundColor: theme.highlight }}
              className="btn margin5 noBorder"
              name="action"
              onClick={this.onSubmitHandler}
            >
              Create Trip
            </Button>
          </div>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentRoomId: state.chatroom.currentRoomId,
  };
};

export default connect(mapStateToProps)(CreateTrip);
