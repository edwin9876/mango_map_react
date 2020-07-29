import React from 'react'
import { ThemeContext } from '../../../Contexts/Theme'
import {
    Card, CardImg,CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

const WeeklyPost = (props) => {

    console.log(props)
    return (

        <ThemeContext.Consumer>{(context) => {
            const { isLightTheme, light, dark } = context;
            const theme = isLightTheme ? light : dark;

            return (
                <div>
                    <Card style={{background: theme.low, borderColor:theme.high}}>
                        <CardImg top width="100%" src={props.post.id}alt="Card image cap" />
                        <CardBody>
                            <CardTitle className="bold">{props.post.title}</CardTitle>
                            <CardSubtitle >by {props.post.userName}</CardSubtitle>
                            <br />
                            <a href="/blog/:id" className="d-flex justify-content-center"><Button className="noBorder" style={{background:theme.highlight}}>View more</Button></a>
                        </CardBody>
                    </Card>
                </div>) }}
        </ThemeContext.Consumer>
    )
}

export default WeeklyPost