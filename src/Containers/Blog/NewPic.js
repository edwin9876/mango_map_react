import React, { Component } from 'react';
import { ThemeContext } from '../../Contexts/Theme'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


export default class NewPost extends Component {
    static contextType = ThemeContext;

  state = {
    submitted: false,
  };
    render() {
        const { isLightTheme, light, dark } = this.context;
        const theme = isLightTheme ? light : dark;
    

        return (
            <div>
            <Form className="margin5" id="createPost" onSubmit={this.handleSubmit}>
  
            <FormGroup>
              <Input style={{ background: theme.low, color: theme.high }} type="file" name="file" id="exampleFile" />
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
