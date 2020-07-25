// this is the individual blog page, set route to '/blog/:id'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ThemeContext } from '../../Contexts/Theme'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Form, FormGroup, Label, Input, InputGroup, InputGroupAddon
} from 'reactstrap';

import Comments from '../../Components/Blog/Comments'


const mapStateToProps = (state) => {
    return {
        post: state.blog.post,
        comments: state.blog.post[0].comments
    }
}


class BlogDetails extends Component {
    static contextType = ThemeContext;

    // post comments on submit form
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        // console.log(this.props.comments)
        const { isLightTheme, light, dark } = this.context;
        const theme = isLightTheme ? light : dark;

        return (
            <div id="blog_container" className="padding1" style={{ background: theme.low, borderColor: theme.high }}>
                <br />
                <a href="/blog"><i className="material-icons black-text">arrow_back</i></a>

                <Card style={{ background: theme.low, borderColor: theme.high }}>

                    <CardImg top width="100%" src="https://media.timeout.com/images/105559599/image.jpg" alt="Card image cap" />

                    <CardBody>
                        <CardTitle className="bold">{this.props.post[0].title}</CardTitle>
                        <CardSubtitle >by {this.props.post[0].author}</CardSubtitle>
                        <CardText>{this.props.post[0].content}</CardText>
                        <br />
                        <a href="/blog/:id"><Button className="noBorder" style={{ background: theme.highlight }}>View more</Button></a>
                    </CardBody>
                </Card>


                {/* comment */}

                <div className="center paddingy1">

                    <Form action="post" onSubmit={this.handleSubmit}>
                        <InputGroup>
                            <Input style={{background:theme.low, borderColor: theme.highlight, color:theme.high }} onChange={this.handleChange} type="text" name="contents" id="contents" placeholder="Please comment here" />

                            <InputGroupAddon addonType="append">
                                <button style={{ borderColor: theme.highlight }} id="ice" name="submit" type="submit" className="btn">Submit</button>
                            </InputGroupAddon>

                        </InputGroup>
                    </Form>

                    <Comments comments={this.props.comments} />

                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(BlogDetails)