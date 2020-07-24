import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { ThemeContext } from '../../../Contexts/Theme'



const Weekly = ({ post }) => {
    console.log({ post })

    return (

        <ThemeContext.Consumer>{(context) => {
            const { isLightTheme, light, dark } = context;
            const theme = isLightTheme ? light : dark;

            return (
                <div>
                    <Card style={{background: theme.low, borderColor:theme.high}}>
                        <CardImg top width="100%" src={post[0].main_picture_url} alt="Card image cap" />
                        <CardBody>
                            <CardTitle className="bold">{post[0].title}</CardTitle>
                            <CardSubtitle >by {post[0].author}</CardSubtitle>
                            <br />
                            <a href="/blog/:id"><Button>View more</Button></a>
                        </CardBody>
                    </Card>
                </div>) }}
        </ThemeContext.Consumer>
    )
}

const WeeklyPost = ({ post }) => {
    return (
        <div className="margin1">
            <p className="d-flex justify-content-center bold gray70">This week's best post</p>
            <Weekly post={post} key={post.id} />
        </div>
    )
}

export default WeeklyPost
