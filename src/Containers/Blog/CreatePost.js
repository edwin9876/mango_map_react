import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText, ButtonGroup } from 'reactstrap';
import { ThemeContext } from '../../Contexts/Theme'
import SearchBar from '../../Components/UI/Layout/SearchBar'
import NewPost from './NewPost'
import NewPic from './NewPic'



class CreatePost extends Component {
  static contextType = ThemeContext;
  constructor(props) {
    super(props)
    this.state = {
      buttonId: 1,
    };
  }

 

  //change what to render upon click
  handleRender = (id) => {
    this.setState({ buttonId: id });
  }

  
  // handleImageChange = (e) => {
  //   let file = e.target.files[0];
  //   let reader = new FileReader();
  //   reader.readAsDataURL(file);
  //   reader.onloadend = () => {
  //     this.setState({
  //       userInfo: { ...this.state.userInfo, profile_picture_URL: reader.result.split('base64,')[1] }
  //     });

  //     console.log(this.state)

  //   }
  // }

  //set the id as state 

  

  render() {
    // setting themecontext
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;

    let redirect = null;

    // if (this.state.submitted) {
    //   redirect = <Redirect to='/post' />;
    // }

    return (
      <div id="Post_container" style={{ background: theme.low, color: theme.high }}>
        <SearchBar />
        {redirect}

        <ButtonGroup className="d-flex justify-content-center paddingy1">
          <Button onClick={() => this.handleRender(1)} style={{ background: theme.low, color: theme.high, borderColor: theme.low }}> <i className="material-icons">create</i></Button>

          <Button onClick={() => this.handleRender(2)} style={{ background: theme.low, color: theme.high, borderColor: theme.low }}> <i className="material-icons">add_a_photo</i></Button>
        </ButtonGroup>

        {this.state.buttonId === 1 && <NewPost />}
        {this.state.buttonId === 2 && <NewPic />}
        {this.state.buttonId !== 1 && this.state.buttonId !== 2 && this.state.categories ? <NewPost categories={this.state.categories} /> : null}
       
      </div >
    );
  }
}






export default CreatePost