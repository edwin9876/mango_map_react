import React, { Component} from 'react'
import {Link} from 'react-router-dom' 
import Toolbox from '../UI/Layout/Toolbox'
import googleIC from '../../Icons/google_black.png'
import instagramIC from '../../Icons/instagram_black.png'

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
    
       const changeBG = (e)=>{
        e.target.style.border = 'solid grey 1px';
        e.target.style.borderRadius = '50px';
     }
     const backBG = (e)=>{
        e.target.style.border = 'none';
     }
 
 
        return (
            <div>
                <Toolbox />
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

                        <button className="transparent_btn grey-text " id="login_btn"
                           onMouseOver={changeBG}
                           onMouseLeave={backBG}> Log In
                           
                        </button>
                    </div>
                </form>
      

                <div className="justify-content-center d-flex">
                    <div className="login_icons">
                        <img className="icons15 active margin1" src={googleIC} alt="googleIC" />
                    </div>
                    <div className="login_icons">
                        <img className="icons15 active margin1" src={instagramIC} alt="instagramIC" />
                    </div>
                </div>

                <i class="material-icons justify-content-center d-flex">remove</i>

                <p className="d-flex justify-content-center">Don't have an account? </p>
                <Link className="d-flex justify-content-center" to='/signup'>Sign up</Link>

                

            </div>
        )
    }
}

export default SignIn
