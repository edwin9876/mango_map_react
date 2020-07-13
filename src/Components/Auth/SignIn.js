import React, { Component } from 'react'
import Toplogobox from '../Layout/Toplogobox'

export class SignIn extends Component {

    state = {
        email: '',
        password: ''
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
        return (
            <div>
                 <Toplogobox/>
                <form className="form-container" onSubmit={this.handleSubmit}  >
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange} />
                    </div>

                    <div className="input-field d-flex justify-content-center">
                        <button className="btn transparent transparent_btn grey-text lighten-1 z-depth-0">Login</button>
                    </div>
                </form>
                <i class="material-icons justify-content-center d-flex">remove</i>

            </div>
        )
    }
}

export default SignIn
