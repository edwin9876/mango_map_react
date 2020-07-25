import React from 'react'
import { ThemeContext } from '../../../Contexts/Theme'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';


const TripSummary = () => {
    return (
        <ThemeContext.Consumer>{(context) => {
            const { isLightTheme, light, dark } = context;
            const theme = isLightTheme ? light : dark;
            return (

                <div>
                    <Card className="card horizontal" style={{ background: theme.low, borderColor: theme.high }}>
                        <CardImg top width="90vw" src="https://images.unsplash.com/photo-1503435980610-a51f3ddfee50?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"alt="Card image cap" />
                        <CardBody>
                            <CardTitle>My Trip</CardTitle>
                            <CardSubtitle>by Pullip123</CardSubtitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <a href="/trip/:id"><Button>View more</Button></a>
                        </CardBody>
                    </Card>

                </div>)
        }}
        </ThemeContext.Consumer>
    )
}

export default TripSummary
