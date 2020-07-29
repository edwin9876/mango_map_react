// this is the individual blog page, set route to '/trip/:id'
import React, { Component } from 'react'
// import { connect } from 'react-redux'
import { ThemeContext } from '../../../Contexts/Theme'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Form, Input, InputGroup, InputGroupAddon
} from 'reactstrap';



// const mapStateToProps = (state) => {
//     return {

//     }
//
class TripDetails extends Component {
    static contextType = ThemeContext;

    render() {

        const { isLightTheme, light, dark } = this.context;
        const theme = isLightTheme ? light : dark;

        return (
            <div id="blog_container" className="padding1" style={{ background: theme.low, borderColor: theme.high }}>
                <br />
                <a href="javascript:history.back()"><i className="material-icons black-text">arrow_back</i></a>

                <Card style={{ background: theme.low, borderColor: theme.high }}>



                    <CardBody>

                        <CardTitle className="bold justify-content-center d-flex">Trip to Tai po</CardTitle>

                        <CardSubtitle className=" justify-content-center d-flex" > Group1, 2nd June 2020</CardSubtitle><br/>

                        <CardImg top width="100%" src="https://media.timeout.com/images/105629341/630/472/image.jpg" alt="trip images" />
                        <CardText>image timestamp</CardText>

                        <CardImg top width="100%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRE-bRqV31-X6AKd4FQK39pizKcs1Kwc2YcKg&usqp=CAU" alt="trip images" />
                        <CardText>image timestamp</CardText>

                        <CardImg top width="100%" src="https://weareexplorers.co/wp-content/uploads/2018/05/IMG-8553.jpg" />
                        <CardText>image timestamp</CardText>

                        <CardImg top width="100%" src="https://img.etimg.com/thumb/width-640,height-480,imgsize-201359,resizemode-1,msid-65975178/magazines/panache/travel-in-a-clique-be-sane-4-point-guide-to-organise-a-big-group-trip/travellinginagroup.jpg" />
                        <CardText>image timestamp</CardText>
                        
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default TripDetails