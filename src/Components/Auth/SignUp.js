import React, { Component } from 'react'
import Toplogobox from '../Layout/Toplogobox'

export class SignUp extends Component {

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
        
    
            const changeBG = (e)=>{
             e.target.style.border = 'solid grey 1px';
             e.target.style.borderRadius = '50px';
          }
          const backBG = (e)=>{
             e.target.style.border = 'none';
          }
        return (
            
            <div>
                <Toplogobox />
                <form onSubmit={this.handleSubmit} className="form-container white" >
                    
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange} />
                    </div>

                    <div className="input-field">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" onChange={this.handleChange} />
                    </div>

                    <div className="input-field">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id="lastName" onChange={this.handleChange} />
                    </div>

                    <div className="justify-content-center d-flex input-field">
                    <button className="transparent_btn grey-text " id="login_btn"
                           onMouseOver={changeBG}
                           onMouseLeave={backBG}> Sign Up
                           
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignUp
