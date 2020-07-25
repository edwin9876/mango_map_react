import React from 'react'
import { ThemeContext } from '../../../Contexts/Theme'
import {Card, CardImg, CardBody,CardTitle, CardSubtitle, Button
} from 'reactstrap';


const MyPost = ({ post }) => {
    console.log({ post })

    return (

        <ThemeContext.Consumer>{(context) => {
            const { isLightTheme, light, dark } = context;
            const theme = isLightTheme ? light : dark;

            return (
                <div>
                    <Card style={{ background: theme.low, borderColor: theme.high }}>
                        <CardImg top width="100%" src="https://www.tokyoweekender.com/wp-content/uploads/2018/01/Tokyo-Weekender-Hotel-Iya-Onsen.jpg" alt="Card image cap" />
                        <CardBody>
                            <CardTitle className="bold">PostSummary Title</CardTitle>
                            <CardSubtitle >by author</CardSubtitle>
                            <br />
                            <a href="/blog/:id"  className="d-flex justify-content-center"><Button className="noBorder" style={{ background: theme.highlight }}>View more</Button></a>
                        </CardBody>
                    </Card>
                </div>)
        }}
        </ThemeContext.Consumer>
    )
}

const PostSummary = ({ post }) => {
    return (
        <ThemeContext.Consumer>{(context) => {
            const { isLightTheme, light, dark } = context;
            const theme = isLightTheme ? light : dark;
            return (
                <div>
                    <MyPost />
                </div>)
        }}
        </ThemeContext.Consumer>
    )
}

export default PostSummary
