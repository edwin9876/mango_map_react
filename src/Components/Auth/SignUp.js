import React, { Component } from 'react'
import Toolbox from '../UI/Layout/Toolbox'
import { ThemeContext } from '../../Contexts/Theme'

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
            <div className="">
                <Toolbox />
                <form style={{ background: theme.low, color : theme.high }} onSubmit={this.handleSubmit} className="form-container" >
                    
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange} style={{ borderColor: theme.highlight}} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange} style={{ borderColor: theme.highlight}} />
                    </div>

                    <div className="input-field">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" onChange={this.handleChange} style={{ borderColor: theme.highlight}}/>
                    </div>

                    <div className="input-field">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id="lastName" onChange={this.handleChange} style={{ borderColor: theme.highlight}}/>
                    </div>

                    <div className="justify-content-center d-flex input-field">
                    <button className="transparent_btn grey-text " id="login_btn"
                         > Sign Up
                           
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignUp
