import React, { Component } from 'react'
import Toolbox from '../UI/Layout/Toolbox'
import { ThemeContext } from '../../Contexts/Theme'
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {connect} from 'react-redux'
import {signUp} from '../../redux/actions/user'

 export class ConnectedSignUp extends Component {

    static contextType = ThemeContext;



    constructor(props){
        super(props)
            this.state={
                email: '',
                password: '',
                user_name: '',
                description: '',
                gender:true,
                profile_picture_URL:''
            }
        }
    
    
    

    handleChange = (e) => {
        // console.log(this.state)

        if(e.target.name=='profile_picture_URL'){
            this.handleImageChange(e)
        }
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    

    handleImageChange =  (e) =>{
        let file = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      this.setState({
        profile_picture_URL: reader.result
      });


    }
}

    handleSubmit = (e) => {
        
        e.preventDefault();
        const userInfo = {...this.state}
        console.log(userInfo)
        const { dispatch } = this.props;
        if(userInfo){
        dispatch(signUp(userInfo))
        }
    }


    render() {
        
        const {isLightTheme, light, dark} = this.context;
    const theme = isLightTheme ? light : dark;

        return (
            <div id= "Post_container" style={{ background: theme.low, color : theme.high}}>
                <Toolbox />

                <Form style={{ background: theme.low, color : theme.high }} onSubmit={this.handleSubmit} className="form-container" >
                    
                <FormGroup>
                        <Label htmlFor="user_name">User Name</Label>
                        <Input type="text" id="user_name" name="user_name" onChange={this.handleChange} style={{background:theme.low, borderColor: theme.highlight, color:theme.high }} />
                    </FormGroup>

                    <FormGroup>
                    <Label htmlFor="gender">Gender</Label>
                    <FormGroup>
        <FormGroup check inline>
          <Label check>
            <Input onChange={this.handleChange} type="radio" name="gender" value={true} />{' '}Male
          </Label>
        </FormGroup>
        <FormGroup check inline>
          <Label check>
            <Input onChange={this.handleChange}  type="radio" name="gender" value={false} />{' '}Female
          </Label>
        </FormGroup>
        </FormGroup>
        </FormGroup>
        
                <FormGroup>
                        <Label htmlFor="email">Email</Label>
                        <Input type="email" id="email" name="email"  onChange={this.handleChange} style={{background:theme.low, borderColor: theme.highlight, color:theme.high }}  />
                </FormGroup>


                    
                    

          <FormGroup>
                        <Label htmlFor="password">Password</Label>
                        <Input type="password" id="password" name="password" onChange={this.handleChange}style={{background:theme.low, borderColor: theme.highlight, color:theme.high }}  />
                    </FormGroup>



                    <FormGroup row>
        <Label for="description" sm={2}>Description</Label>
        <Col sm={10}>
          <Input type="textarea"  id="description" name="description" onChange={this.handleChange} style={{background:theme.low, borderColor: theme.highlight, color:theme.high }} />
        </Col>
      </FormGroup>

      <FormGroup>
        <Label for="profile_picture_URL">Profile Image</Label>
        <Input type="file"  id="profile_picture_URL" name="profile_picture_URL" onChange={this.handleChange} />
        
      </FormGroup>

                    <div className="justify-content-center d-flex Input-field">
                    <button className="transparent_btn white-text " id="login_btn"
                         > Sign Up
                           
                        </button>
                    </div>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return {
        ...state.auth
    }
}
const SignUp = connect(mapStateToProps)(ConnectedSignUp)



export default SignUp
