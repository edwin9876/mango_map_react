import React, { Component } from 'react';
import { ThemeContext } from '../../Contexts/Theme'
import { connect } from 'react-redux';
import { updateUser } from '../../redux/actions/user'

import { Button, Form, FormGroup, Label, Input, Col, Media } from 'reactstrap';



class ConnectedEditProfile extends Component {
    static contextType = ThemeContext;

    constructor(props) {
        super(props);
        this.state = {
            userInfo: {},
            submitted: false,
            resetpw: false,
        };
    }


    async componentDidMount() {
        console.log(this.props)
        let user = await JSON.parse(localStorage.getItem('user'))
        delete user['token']
        if (user) {
            this.setState({
                ...this.state,
                userInfo: { ...user }
            })
        }
        console.log(this.state)

    }

    componentWillUnmount() {
        this.setState({
            buttonId: null,
            userInfo: {
            },
            submitted: false,
        })
    }

    handleResetPw = (e) => {
        let { resetpw } = this.state
        this.setState({
            ...this.state,
            resetpw: !resetpw
        })
    }

    handleImageChange = (e) => {
        let file = e.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            this.setState({
                userInfo: {
                    ...this.state.userInfo,
                    profile_picture_url: reader.result.split('base64,')[1],
                },
            });

            console.log(this.state);
        };
    };


    handleSubmit = async (e) => {
        e.preventDefault();
        this.setState({ submitted: true })
        const { user_name, email, gender ,password} = this.state.userInfo
        const payload = {
            ...this.state.userInfo,
            updated_at:new Date()
        }
        const { dispatch } = this.props;
        if (user_name && email && gender && password && payload) {
            await dispatch(updateUser(payload))
            console.log(this.state)
        }
    }
    handleChange = (e) => {
        console.log(this.state)

        if (e.target.name == 'profile_picture_url') {
            this.handleImageChange(e);
        }
        console.log(this.state);
        this.setState({
            userInfo: { ...this.state.userInfo, [e.target.name]: e.target.value },
        });
    }


    render() {
        const { isLightTheme, light, dark } = this.context;
        const theme = isLightTheme ? light : dark;


        return (
            <div>
                <Form
                    style={{ background: theme.low, color: theme.high }}
                    onSubmit={this.handleSubmit}
                    className='form-container'
                >
                    {/* {submitted && this.props.signedUpFail && (
              <p className='text-danger'>Sign Up Fail</p>
            )} */}
                    <FormGroup>
                        <Label htmlFor='user_name'>User Name</Label>
                        <Input
                            type='text'
                            id='user_name'
                            name='user_name'
                            value={this.state.userInfo.user_name}
                            onChange={this.handleChange}
                            style={{
                                background: theme.low,
                                borderColor: theme.highlight,
                                color: theme.high,
                            }}
                        />
                        {/* {submitted && !user_name && (
                <p className='text-danger'>* User Name is required</p>
              )} */}
                    </FormGroup>

                    <FormGroup>
                        <Label htmlFor='gender'>Gender</Label>
                        <FormGroup>
                            <FormGroup check inline>
                                <Label check>
                                    <Input
                                        onChange={this.handleChange}
                                        type='radio'
                                        name='gender'
                                        value='male'
                                    />{' '}
                    Male
                  </Label>
                            </FormGroup>
                            <FormGroup check inline>
                                <Label check>
                                    <Input
                                        onChange={this.handleChange}
                                        type='radio'
                                        name='gender'
                                        value='female'
                                    />{' '}
                    Female
                  </Label>
                            </FormGroup>
                        </FormGroup>
                        {/* {submitted && !gender && (
                <p className='text-danger'>* Gender is required</p>
              )} */}
                    </FormGroup>

                    <FormGroup>
                        <Label htmlFor='email'>Email</Label>
                        <Input
                            type='email'
                            id='email'
                            name='email'
                            onChange={this.handleChange}
                            value={this.state.userInfo.email}
                            style={{
                                background: theme.low,
                                borderColor: theme.highlight,
                                color: theme.high,
                            }}
                        />
                        {/* {submitted && !email && (
                <p className='text-danger'>* Email is required</p>
              )} */}
                    </FormGroup>

                    <FormGroup>
                        <Label htmlFor='password'>Password</Label>
                        <Input
                            type='password'
                            id='password'
                            name='password'
                            onChange={this.handleChange}
                            value={this.state.userInfo.password}
                            style={{
                                background: theme.low,
                                borderColor: theme.highlight,
                                color: theme.high,
                            }}
                        />
                        {/* {submitted && !password && (
                <p className='text-danger'>* Password is required </p>
              )} */}
                    </FormGroup>
                    <FormGroup row>
                        <Label for='description' sm={2}>
                            Description
              </Label>
                        <Col sm={10}>
                            <Input
                                type='textarea'
                                id='description'
                                name='description'
                                onChange={this.handleChange}
                                value={this.state.userInfo.description}
                                style={{
                                    background: theme.low,
                                    borderColor: theme.highlight,
                                    color: theme.high,
                                }}
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Label for='profile_picture_url'>Profile Image</Label>
                        <Input
                            type='file'
                            id='profile_picture_url'
                            name='profile_picture_url'
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <Media object data-src={this.state.userInfo.profile_picture_url} alt="Generic placeholder image" />


                    <div className='justify-content-center d-flex Input-field'>
                        <button className='transparent_btn white-text ' id='login_btn'>
                            {' '}
                Edit
              </button>
                    </div>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ...state
    };
};


const EditProfile = connect(mapStateToProps)(ConnectedEditProfile)

export default EditProfile