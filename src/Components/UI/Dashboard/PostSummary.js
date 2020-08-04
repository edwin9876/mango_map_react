import React, { Component } from 'react'
import { ThemeContext } from '../../../Contexts/Theme'
import {
    Card, CardImg, CardBody, CardTitle, CardSubtitle, Button
} from 'reactstrap';


class PostSummary extends Component {
    static contextType = ThemeContext;

    constructor(props) {
        super(props)
        this.state = {
        }

    }

    handleClick = async (e) => {
        console.log(this.props)
        this.props.history.push(`/blog/${this.props.posts.id}`);
        

    }

    render() {
        const { isLightTheme, light, dark } = this.context;
        const theme = isLightTheme ? light : dark;

                return (
                    <div>

                        <Card className="margin5" style={{ background: theme.low, borderColor: theme.high }}>
                            <CardBody>
                                <CardTitle className="bold d-flex justify-content-center">{this.props.posts.title.toUpperCase()}</CardTitle>
                                <CardSubtitle className="d-flex justify-content-center">{this.props.posts.created_at.slice(0, 10)}</CardSubtitle>
                                <br />
                                <a className="d-flex justify-content-center">
                                <Button onClick={this.handleClick} className="noBorder" style={{ background: theme.highlight }}>View more
                                </Button>
                                </a>
                            </CardBody>
                        </Card>

                    </div>)
            }

    }


    export default PostSummary
