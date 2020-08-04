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
                            <CardImg top src={props.post.images[0].url} alt="Card image cap" className="postImg"/>
                            <CardTitle  className="d-flex justify-content-center">{props.post.title}</CardTitle>
                            <CardSubtitle className="d-flex justify-content-center">by {props.post.userName}</CardSubtitle>
                            {/* <CardText >by {props.post.body}</CardText> */}
                            <br />

                            <a className="d-flex justify-content-center">
                            <Button onClick={() => props.history.push(`/blog/${props.post.id}`)} className="noBorder" style={{ background: theme.highlight }}>View more
                            </Button>
                            </a>

                        </CardBody>
                    </Card>
                </div>)
        }}
        </ThemeContext.Consumer>
    )
}

export default WeeklyPost