import React, { Component } from 'react';
import { ThemeContext } from '../../Contexts/Theme'
// Global - index.css , Local - Blog.css
import './Blog.css';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


export default class NewPost extends Component {
    static contextType = ThemeContext;

  state = {
    buttonId: null,
    title: '',
    category: '',
    content: '',
    author: 'Max',
    submitted: false,
  };
    render() {
        const { isLightTheme, light, dark } = this.context;
        const theme = isLightTheme ? light : dark;
    

        return (
            <div>
            <Form className="margin5" id="createPost" onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label for="title">Title</Label>
              <Input style={{ background: theme.low, borderColor: theme.highlight, color: theme.high }} onChange={this.handleChange} type="text" name="title" id="title" placeholder="Title" />
            </FormGroup>
  
            <FormGroup>
              <Label for="exampleSelectMulti">Choose Category</Label>
              <Input style={{ background: theme.low, borderColor: theme.highlight, color: theme.high }} type="select" name="selectMulti" id="exampleSelectMulti" multiple>
                <option id="category" >1</option>
                <option id="category" >2</option>
                <option id="category" >3</option>
                <option id="category" >4</option>
                <option id="category" >5</option>
              </Input>
            </FormGroup>
  
            <FormGroup>
              <Label for="contents">Contents</Label>
              <Input style={{ background: theme.low, borderColor: theme.highlight, color: theme.high }} onChange={this.handleChange} type="textarea" name="contents" id="contents" placeholder="Write here" rows="10" />
            </FormGroup>
  
            <FormGroup>
              <Label for="exampleFile">Pictures</Label>
              <Input style={{ background: theme.low, color: theme.high }} type="file" name="file" id="exampleFile" />
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
