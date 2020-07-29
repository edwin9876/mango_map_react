import React from 'react'
import { ThemeContext } from '../../../Contexts/Theme'
import {
    Card, CardImg, CardBody, CardTitle, CardSubtitle, Button
} from 'reactstrap';


const PostSummary = (props) => {
    console.log(props)

    return (

        <ThemeContext.Consumer>{(context) => {
            const { isLightTheme, light, dark } = context;
            const theme = isLightTheme ? light : dark;
            console.log( props)

            return (
                <div>
                   
                         <Card className="margin5" style={{ background: theme.low, borderColor: theme.high }}>
                            <CardImg top width="100%" src={props.posts.main_picture_URL} alt="Card image cap" />
                            <CardBody>
                                <CardTitle className="bold">{props.posts.title}</CardTitle>
                                <CardSubtitle >{props.posts.created_at}</CardSubtitle>
                                <br />
                                <a href="/blog/:id" className="d-flex justify-content-center"><Button className="noBorder" style={{ background: theme.highlight }}>View more</Button></a>
                            </CardBody>
                        </Card>
                    
                </div>)
        }}
        </ThemeContext.Consumer>
    )
}

// const PostSummary = ( props) => {
//     return (
//         <ThemeContext.Consumer>{(context) => {
//             const { isLightTheme, light, dark } = context;
//             const theme = isLightTheme ? light : dark;
//             return (
//                 <div>
//                     <MyPost posts={props.posts} />
//                 </div>)
//         }}
//         </ThemeContext.Consumer>
//     )
// }

export default PostSummary
