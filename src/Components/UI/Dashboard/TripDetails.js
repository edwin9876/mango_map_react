// this is the individual blog page, set route to '/trip/:id'
import React, { Component } from 'react'
import { connect } from 'react-redux'

import { ThemeContext } from '../../../Contexts/Theme'
import {Card, CardImg, CardText, CardBody,CardTitle,CardSubtitle} from 'reactstrap';

import { fetchUserLocation } from '../../../redux/actions/user'



const mapStateToProps = (state) => {
    return {
        ...state
    }
}

class ConncectedTripDetails extends Component {
    static contextType = ThemeContext;

    constructor(props) {
        super(props)
        this.state = {
            location: {}
        }

    }

    async componentDidMount() {
            const { dispatch } = this.props
            console.log(this.props)
            const user_id = parseInt(this.props.auth.user.id)
            const location_id = parseInt(this.props.match.params.id)
            await dispatch(fetchUserLocation(user_id, location_id))

            if (this.props.user.user.location) {
                this.setState({
                    location: this.props.user.user.location
                })
            }
            console.log(this.state)
        }


        componentWillUnmount() {
            this.setState = {
                location: {}
            }
        }

        render() {
            console.log(this.props)
            const { isLightTheme, light, dark } = this.context;
            const theme = isLightTheme ? light : dark;

            return (
                <div id="blog_container" className="padding1" style={{ background: theme.low, borderColor: theme.high }}>
                    <br />

                  <i  onClick={this.props.history.goBack}  className="material-icons gray50">arrow_back</i>


                    <Card style={{ background: theme.low, borderColor: theme.high }}>



                        <CardBody>

                            <CardTitle className="bold justify-content-center d-flex">Trip to {this.state.location.en} {this.state.location.cn}</CardTitle>

                            <CardSubtitle className=" justify-content-center d-flex" > Group1, {this.state.location.created_at}</CardSubtitle><br />

                            {this.state.location.images && this.state.location.images.map((img, i) => {
                                return (
                                    <div key={i}>
                                        <CardImg top width="100%" src={img.url} alt="trip images" className="margin1vw"/>
                                        <CardText>{img.created_at}</CardText>
                                    </div>)
                            })
                            }



                        </CardBody>
                    </Card>
                </div>
            )
        }
    }

    const TripDetails = connect(mapStateToProps)(ConncectedTripDetails)


    export default TripDetails