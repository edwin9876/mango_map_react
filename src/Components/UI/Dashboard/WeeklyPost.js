import React from 'react'
import { ThemeContext } from '../../../Contexts/Theme'
import {
    Card, CardImg, CardBody,
    CardTitle, CardSubtitle, Button,
    CardText
} from 'reactstrap';

const WeeklyPost = (props) => {

    console.log(props)
    return (
        <ThemeContext.Consumer>{(context) => {
            const { isLightTheme, light, dark } = context;
            const theme = isLightTheme ? light : dark;

            return (
                <div>
                    <Card style={{ background: theme.low, borderColor: theme.high }}>

                        <CardBody>
                            <CardImg top width="100%" src={props.post.id} alt="Card image cap" />
                            <CardTitle className="bold">{props.post.title}</CardTitle>
                            <CardSubtitle >by {props.post.userName}</CardSubtitle>
                            {/* <CardText >by {props.post.body}</CardText> */}
                            <br />
                            <Button onClick={() => props.history.push(`/blog/${props.post.id}`)} className="d-flex justify-content-center noBorder" style={{ background: theme.highlight }}>View more</Button>
                        </CardBody>
                    </Card>
                </div>)
        }}
        </ThemeContext.Consumer>
    )
}

export default WeeklyPost