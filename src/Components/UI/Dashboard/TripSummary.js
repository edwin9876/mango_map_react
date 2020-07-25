import React from 'react'
import { ThemeContext } from '../../../Contexts/Theme'
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap';


const TripSummary = () => {
    return (
        <ThemeContext.Consumer>{(context) => {
            const { isLightTheme, light, dark } = context;
            const theme = isLightTheme ? light : dark;
            return (

                <div>
                    <Card style={{ background: theme.low, borderColor: theme.high }}>
                    <CardImg width="100%" src="https://www.rainforest-alliance.org/sites/default/files/styles/900w/public/2019-07/misty%20forest%20ferns.jpg?itok=knEAi7E3" alt="Card image cap" />
                        <CardBody>
                            <CardTitle className="bold">My Trip</CardTitle>
                            <CardSubtitle>by Pullip123</CardSubtitle><br/>
                            <CardText>My trip to Busan with group1</CardText>
                            <a href="/trip/:id" className="d-flex justify-content-center"><Button className="noBorder" style={{ background: theme.highlight }}>View more</Button></a>
                        </CardBody>
                    </Card>

                </div>)
        }}
        </ThemeContext.Consumer>
    )
}

export default TripSummary
