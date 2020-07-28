import React from 'react'
import { ThemeContext } from '../../../Contexts/Theme'
import {
    Card, CardImg, CardBody, CardTitle, CardSubtitle, Button
} from 'reactstrap';


const MyPost = (props) => {
    console.log(props)

    return (

        <ThemeContext.Consumer>{(context) => {
            const { isLightTheme, light, dark } = context;
            const theme = isLightTheme ? light : dark;

            return (
                <div>
                    {(props.posts) ?
                    props.posts.map((item,i) => {
                        return <Card key={i}style={{ background: theme.low, borderColor: theme.high}}>
                            <CardImg top width="100%" src={item.main_picture_URL} alt="Card image cap" />
                            <CardBody>
                                <CardTitle className="bold">{item.title}</CardTitle>
                                <CardSubtitle >{item.created_at}</CardSubtitle>
                                <br />
                                <a href="/blog/:id" className="d-flex justify-content-center"><Button className="noBorder" style={{ background: theme.highlight }}>View more</Button></a>
                            </CardBody>
                        </Card>
                    }):null
                    }

                </div>)
        }}
        </ThemeContext.Consumer>
    )
}

const PostSummary = ( props) => {
    return (
        <ThemeContext.Consumer>{(context) => {
            const { isLightTheme, light, dark } = context;
            const theme = isLightTheme ? light : dark;
            return (
                <div>
                    <MyPost posts={props.posts} />
                </div>)
        }}
        </ThemeContext.Consumer>
    )
}

export default PostSummary
