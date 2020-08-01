// this is the individual blog page, set route to '/trip/:id'
import React, { Component } from 'react'
import { connect } from 'react-redux'

import { ThemeContext } from '../../Contexts/Theme'
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

import { fetchLocation } from '../../redux/actions/map'



const mapStateToProps = (state) => {
    return {
        ...state
    }
}

class ConncectedSpotDetails extends Component {
    static contextType = ThemeContext;

    constructor(props) {
        super(props)
        this.state = {
            location: {}
        }

    }

    componentWillUnmount() {
        this.setState = {
            location: {}
        }
    } 

    async componentDidMount() {
        const { dispatch } = this.props
        console.log(this.props)

        const location_id = parseInt(this.props.match.params.id)
        await dispatch(fetchLocation(location_id))

        if (this.props.map.location) {
            this.setState({
                location: {...this.props.map.location}
            })
        }
        console.log(this.state)
    }




    render() {
        console.log(this.props)
        const { isLightTheme, light, dark } = this.context;
        const theme = isLightTheme ? light : dark;

        return (
            <div id="blog_container" className="padding1" style={{ background: theme.low, borderColor: theme.high }}>
                <br />

                <i onClick={this.props.history.goBack} className="material-icons gray50">arrow_back</i>


                <Card style={{ background: theme.low, borderColor: theme.high }}>



                    <CardBody>

                        <CardTitle className="bold justify-content-center d-flex">{this.state.location.en}</CardTitle>
                        <CardSubtitle className="bold justify-content-center d-flex"> {this.state.location.cn}</CardSubtitle>
                        <CardText>{this.state.location.description}</CardText>


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

const SpotDetails = connect(mapStateToProps)(ConncectedSpotDetails)


export default SpotDetails