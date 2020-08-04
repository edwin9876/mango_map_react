import React, { Component } from 'react';
import { ThemeContext } from '../../Contexts/Theme'
import { connect } from 'react-redux';

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { createLocation, createUserLocation } from '../../redux/actions/map';


class ConnectedNewLocation extends Component {
    static contextType = ThemeContext;

    constructor(props) {
        super(props)
        this.state = {
            location: {
                en: '',
                cn: '',
                description: null,
                lat: '',
                lng: ''
            },
            submitted: false
        };
    }

    async componentDidMount() {
        this.setState({
            ...this.state,
            location: { ...this.state.location, ...this.props.map.lat_lng }
        })
        console.log(this.state)
    }

    componentWillUnmount() {
        this.setState({
            location: {
                en: [],
                cn: [],
                description: null,
                lat: '',
                lng: ''
            },
            submitted: false

        })
    }
    handleSubmit = async (e) => {
        e.preventDefault();

        console.log('/ss')
        this.setState({ submitted: true })
        const user_id = this.props.auth.user.id
        const { dispatch } = this.props
        const newLocation = this.state.location
        let { en, cn } = this.state.location
        if (en && cn) {
            await dispatch(createLocation(newLocation))

            if (this.props.map.new_location.id) {
                let location_id = this.props.map.new_location.id
                await dispatch(createUserLocation(user_id, location_id))
                this.props.history.push('/')
            }
        }
    }


    handleChange = (e) => {

        this.setState({
            ...this.state,
            location: {
                ...this.state.location,
                [e.target.name]: e.target.value
            }
        })
        console.log(this.state)

    }



    render() {
        const { isLightTheme, light, dark } = this.context;
        const theme = isLightTheme ? light : dark;

        return (
            <div>
                <br />
                <i onClick={this.props.history.goBack} style={{ cursor: 'pointer' }} className="material-icons gray50">arrow_back</i>
                <br />
                {this.state.submitted && !this.props.map.new_location &&
                    <p className='text-align-center'>Submission Failed</p>
                }
                <Form id="createPost" onSubmit={this.handleSubmit} className="uploader margin5" encType="multipart/form-data">
                    <FormGroup>
                        <Label for="title" className="bold" >Location Name(English)</Label>
                        <Input style={{ background: theme.low, borderColor: theme.highlight, color: theme.high }} onChange={this.handleChange} type="text" name="en" placeholder="Title" />
                    </FormGroup>

                    <FormGroup>
                        <Label for="title" className="bold">Location Name(Chinese)</Label>
                        <Input style={{ background: theme.low, borderColor: theme.highlight, color: theme.high }} onChange={this.handleChange} type="text" name="cn" placeholder="Title" />
                    </FormGroup>

                    <FormGroup>
                        <Label for="body" className="bold">Description</Label>
                        <Input style={{ background: theme.low, borderColor: theme.highlight, color: theme.high }} onChange={this.handleChange} type="textarea" name="description" placeholder="Please explain about the location" rows="10" />
                    </FormGroup>


                    <div className="d-flex justify-content-center">
                        <Button style={{ backgroundColor: theme.highlight }} className="btn margin5 noBorder"
                            type="submit" name="action" >Add Location
            </Button>
                    </div>


                </Form>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        ...state
    }
}

const NewLocation = connect(mapStateToProps)(ConnectedNewLocation);

export default NewLocation