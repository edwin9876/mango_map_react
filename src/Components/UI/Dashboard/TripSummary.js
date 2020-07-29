import React from 'react'
import { ThemeContext } from '../../../Contexts/Theme'
import {Card,CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap';


const TripSummary = (props) => {
    return (
        <ThemeContext.Consumer>{(context) => {
            const { isLightTheme, light, dark } = context;
            const theme = isLightTheme ? light : dark;
            return (

                <div>
                    <Card className="margin5" style={{ background: theme.low, color: theme.high, borderColor: theme.high }}>
                        <CardBody>
                            <CardTitle className="bold">{props.location.en}</CardTitle>
                            <CardTitle className="bold">{props.location.cn}</CardTitle>
                            <CardSubtitle>{props.location.created_at}</CardSubtitle><br/>
                            <a href="/trip/:id" className="d-flex justify-content-center"><Button className="noBorder" style={{ background: theme.highlight }}>View more</Button></a>
                        </CardBody>
                    </Card>

                </div>)
        }}
        </ThemeContext.Consumer>
    )
}

export default TripSummary
