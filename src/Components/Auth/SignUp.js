import React, { Component } from 'react'
import Toolbox from '../UI/Layout/Toolbox'
import { ThemeContext } from '../../Contexts/Theme'
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export class SignUp extends Component {
    static contextType = ThemeContext;

    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    }


    render() {
        
        const {isLightTheme, light, dark} = this.context;
    const theme = isLightTheme ? light : dark;
    
    
        return (
            <div id= "Post_container" style={{ background: theme.low, color : theme.high}}>
                <Toolbox />

                <Form style={{ background: theme.low, color : theme.high }} onSubmit={this.handleSubmit} className="form-container" >
                    
                <FormGroup>
                        <Label htmlFor="email">Email</Label>
                        <Input type="email" id="email" onChange={this.handleChange} style={{background:theme.low, borderColor: theme.highlight, color:theme.high }}  />
                </FormGroup>


          <FormGroup>
                        <Label htmlFor="password">Password</Label>
                        <Input type="password" id="password" onChange={this.handleChange}style={{background:theme.low, borderColor: theme.highlight, color:theme.high }}  />
                    </FormGroup>

          <FormGroup>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input type="text" id="firstName" onChange={this.handleChange} style={{background:theme.low, borderColor: theme.highlight, color:theme.high }} />
                    </FormGroup>

          <FormGroup>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input type="text" id="lastName" onChange={this.handleChange} style={{background:theme.low, borderColor: theme.highlight, color:theme.high }} />
                    </FormGroup>

                    <div className="justify-content-center d-flex Input-field">
                    <button className="transparent_btn grey-text " id="login_btn"
                         > Sign Up
                           
                        </button>
                    </div>
                </Form>
            </div>
        )
    }
}

export default SignUp
