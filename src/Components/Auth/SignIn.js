import React, { Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom' 
import Toolbox from '../UI/Layout/Toolbox'
import googleIC from '../../Icons/google_black.png'
import instagramIC from '../../Icons/instagram_black.png'
import {login} from '../../redux/actions/user'
import { ThemeContext } from '../../Contexts/Theme'
import {Form, FormGroup, Label, Input } from 'reactstrap';


const mapStateToProps = state=>{
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
}

export class ConnetedSignIn extends Component {
    static contextType = ThemeContext;

    constructor(props){
        super(props)
        // this.props.dispatch(logout());

        this.state = {
            email: '',
            password: '',
            submitted:false,
        }
    }
    

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
        this.setState({submitted:true})
        const {email,password} = this.state
        const { dispatch } = this.props;
        if (email && password) {
            // dispatch(login(email, password));
        }
    }


    render() {
        // setting themecontext
        const { isLightTheme, light, dark } = this.context;
        const theme = isLightTheme ? light : dark;

        return (
            <div id="Post_container" style={{ background: theme.low, color: theme.high }}>
                <Toolbox />

                <Form className="margin5" id="createPost" onSubmit={this.handleSubmit}>

                    <FormGroup>
                        <Label htmlFor="email">Email</Label>
                        <Input style={{background:theme.low, borderColor: theme.highlight, color:theme.high }}  type="email" id="email" onChange={this.handleChange} />
                    </FormGroup>

                    <FormGroup>
                        <Label htmlFor="password">Password</Label>
                        <Input style={{background:theme.low, borderColor: theme.highlight, color:theme.high }}  type="password" id="password" onChange={this.handleChange} />
                    </FormGroup>

                    <div className="input-field d-flex justify-content-center">
                        <button className="transparent_btn grey-text " id="login_btn"
                        > Log In
                        </button>
                    </div>

                </Form>


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

const SignIn = connect(mapStateToProps)(ConnetedSignIn)

export default SignIn

