import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Toplogobox from '../UI/Layout/Toplogobox';
import { login, logout } from '../../redux/actions/user';
import { ThemeContext } from '../../Contexts/Theme';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export class ConnetedSignIn extends Component {
  static contextType = ThemeContext;

  constructor(props) {
    super(props);
    this.props.dispatch(logout());

    this.state = {
      email: '',
      password: '',
      submitted: false,
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
    // console.log(this.state)
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ submitted: true });
    const { email, password } = this.state;
    const { dispatch } = this.props;
    if (email && password) {
      console.log('login is though working1');
      await dispatch(login(email, password));
      console.log('login is though working2');
      if (this.props.loggedIn) {
        this.props.history.push(`/profile/`);
        console.log(this.props.user.id);
        console.log('login is though working3');
      }
    }
  };

  render() {
    // setting themecontext
    const { loggingIn } = this.props;
    const { email, password, submitted } = this.state;
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;

    return (
      <div
        id='Post_container'
        style={{ background: theme.low, color: theme.high }}
      >
        <Toplogobox />

        <Form className='margin5 padding5' id='createPost' onSubmit={this.handleSubmit}>
          {/* {submitted&& !this.props.loggedIn&&
                    <p className="text-danger" >Login In Fail</p >
                 } */}
          <FormGroup>
            <Label htmlFor='email'>Email</Label>

            <Input
              invalid={!email && submitted && true}
              style={{
                background: theme.low,
                borderColor: theme.highlight,
                color: theme.high,
              }}
              type='email'
              id='email'
              onChange={this.handleChange}
            />

            {submitted && !email && (
              <p className='text-danger'>* Email is required</p>
            )}
          </FormGroup>

          <FormGroup>
            <Label htmlFor='password'>Password</Label>
            <Input
              invalid={!password && submitted && true}
              style={{
                background: theme.low,
                borderColor: theme.highlight,
                color: theme.high,
              }}
              type='password'
              id='password'
              onChange={this.handleChange}
            />
            {submitted && !password && (
              <p className='text-danger'>* Password is required</p>
            )}
          </FormGroup>

          <div className='input-field d-flex justify-content-center'>
            <button className='transparent_btn grey-text ' id='login_btn'>
              {' '}
              Log In
            </button>
            <div></div>
          </div>
        </Form>

        <div className='justify-content-center d-flex'>
          <div
            style={{ backgroundImage: `url(${theme.img})` }}
            className='login_icons'
          >
          
            <img
              className='icons15 margin1 blur'
              src="https://i.imgur.com/rve0yXl.png"
              alt='googleIC'
            />
          </div>
          <div
            style={{ backgroundImage: `url(${theme.img})` }}
            className='login_icons'
          >
            <img
              className='icons15 margin1 blur'
              src="https://i.imgur.com/k4aOHAQ.png"
              alt='instagramIC'
            />
          </div>
        </div>

        <i className='material-icons justify-content-center d-flex'>remove</i>
        <p className='d-flex justify-content-center'>Don't have an account? </p>
        <Link className='d-flex justify-content-center' to='/signup'>
          Sign up
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.auth,
  };
};


const SignIn = connect(mapStateToProps)(ConnetedSignIn)

export default SignIn
