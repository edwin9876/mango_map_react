import React, { Component } from 'react'
import Toolbox from '../UI/Layout/Toolbox'

export class SignUp extends Component {
    constructor(props){
        super(props)
            this.state={
                email: '',
                password: '',
                user_name: '',
                description: ''
            }
        
    }
    

    handleChange = (e) => {
        console.log(this.state)
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
                <form onSubmit={this.handleSubmit} className="form-container white" >
                    <div className="input-field">
                        <input type="email" id="email" onChange={this.handleChange} value={this.state.email}/>
                        <label htmlFor="email">Email</label>
                    </div>

                    <div className="input-field">
                        <input type="text" id="user_name" onChange={this.handleChange} value={this.state.user_name} />
                        <label htmlFor="user_name">User Name</label>
                    </div>

                    <div className="input-field">
                        <input type="password" id="password" onChange={this.handleChange} value={this.state.password}/>
                        <label htmlFor="password">Password</label>
                    </div>


                    <div className="input-field">
                        <textarea className='materialize-textarea' id="description" onChange={this.handleChange} value={this.state.description}/>
                        <label htmlFor="description">Description</label>
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
