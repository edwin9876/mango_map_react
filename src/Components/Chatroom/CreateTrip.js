import React, { Component } from 'react';
import { ThemeContext } from '../../Contexts/Theme';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class CreateTrip extends Component {
  static contextType = ThemeContext;
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = () => {};

  handleSubmit = async () => {};

  render() {
    console.log(this.props);

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
          <p classNam="gray70">Lizard's back, New Territories</p>
        </div>
        <Form
          id="createPost"
          onSubmit={this.handleSubmit}
          className="uploader margin5"
          encType="multipart/form-data"
        >
          <FormGroup>
            <Label for="date" className="bold">
              Date and time
            </Label>
            <Input
              style={{
                background: theme.low,
                borderColor: theme.highlight,
                color: theme.high,
              }}
              onChange={this.handleChange}
              type="text"
              name="date"
              placeholder="Date and time"
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
              onChange={this.handleChange}
              type="text"
              name="description"
              placeholder="Description"
            />
          </FormGroup>

          <div className="d-flex justify-content-center">
            <Button
              style={{ backgroundColor: theme.highlight }}
              className="btn margin5 noBorder"
              type="submit"
              name="action"
            >
              Create Trip
            </Button>
          </div>
        </Form>
      </div>
    );
  }
}

export default CreateTrip;
