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


     componentDidMount() {

        if (this.props.user.user) {
            this.setState({
                ...this.state,
                userInfo: { ...this.props.user.user }
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
        const payload = {
            ...this.state.userInfo,
            updated_at: new Date()
        }
        const { dispatch } = this.props;
        if ( this.state.userInfo) {
            await dispatch(updateUser(payload))
            this.props.history.push(`/profile/${this.props.auth.user.id}`)
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
        let main_url
        if(this.state.userInfo.profile_picture_url){
         main_url = this.state.userInfo.profile_picture_url}
        return (
            <div className="vh100 padding5" style={{ background: theme.low, color: theme.high }}>
                <Form
                    onSubmit={this.handleSubmit}
                >
                    
                <div className="justify-content-center d-flex paddingb1">
                    { main_url&& main_url < 100 ?
                        <img id="profile_pic" src={main_url} alt="profile img" /> :
                        <img id="profile_pic" src={`data:image/png;base64, ${main_url}`} alt="profile img" />
                    }
                    </div>
                    <FormGroup>
                        <Label for='profile_picture_url'>Profile Image</Label>
                        <Input
                            type='file'
                            id='profile_picture_url'
                            name='profile_picture_url'
                            onChange={this.handleChange}
                        />
                    </FormGroup>

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




                    <div className='justify-content-center d-flex Input-field'>
                        <Button className='margin1x'  onClick={this.props.history.goBack}   >
                            {' '}
                Cancel
              </Button>
                        <Button className='margin1x' type="submit" >
                            {' '}
                Save
              </Button>
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