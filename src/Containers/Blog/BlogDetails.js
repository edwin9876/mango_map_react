// this is the individual blog page, set route to '/blog/:id'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ThemeContext } from '../../Contexts/Theme'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Form, Input, InputGroup, InputGroupAddon
} from 'reactstrap';

import Comments from './Comments'
import { fetchPost } from '../../redux/actions/blog'
import { fetchUserLocation } from '../../redux/actions/user'
import { fetchUser } from '../../redux/actions/user'
import { fetchComment} from '../../redux/actions/blog'


class ConnectedBlogDetails extends Component {
    static contextType = ThemeContext;


    constructor(props) {
        super(props)
        this.state = {
            post: [],
            location: {},
            user_id: '',
            user_name: '',
            comments: []
        }

    }

    async componentDidMount() {
        console.log(this.props)
        const { dispatch } = this.props
        let blog_id = parseInt(this.props.match.params.id)
        let location_id = parseInt(this.props.blog.post.userLocation_id)
        let user_id

        //get individual post
        await dispatch(fetchPost(blog_id))

        if (this.props.blog.post) {
            this.setState({
                ...this.state,
                post: this.props.blog.post
            })
        }
       //use location_id in post, grab user_id
        await dispatch(fetchUserLocation(location_id))

        if (this.props.user.user.location) {
            this.setState({
                ...this.state,
                location: this.props.user.user.location,
                user_id: this.props.user.user.location.user_id
            })
        }
        console.log(this.state)

       //use user_id to grab user_name
        await dispatch(fetchUser(user_id))

        if (this.props.user.user) {
            this.setState({
                ...this.state,
                user_name: this.state.user_name
            })
        }
        //get comments with blog_id
        await dispatch(fetchUser(blog_id))

        if (this.props.blog.post) {
            this.setState({
                ...this.state,
                comments: this.state.comments
            })
        }
        
    }


    // post comments on submit form
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        console.log(this.props)
        const { isLightTheme, light, dark } = this.context;
        const theme = isLightTheme ? light : dark;

        return (
            <div id="blog_container" className="padding1" style={{ background: theme.low, borderColor: theme.high }}>
                <br />
                <a href="/blog"><i className="material-icons black-text">arrow_back</i></a>

                <Card style={{ background: theme.low, borderColor: theme.high }}>

                    <CardImg top width="100%" src="https://media.timeout.com/images/105559599/image.jpg" alt="Card image cap" />

                    <CardBody>
                        <CardTitle className="bold">{this.state.post.title}</CardTitle>
                        <CardSubtitle >by {this.state.user_name}</CardSubtitle>
                        <CardText>body {this.state.post.body}</CardText>
                    </CardBody>
                </Card>


                {/* comment */}

                <div className="center">

                    <Form action="post" onSubmit={this.handleSubmit} className=" paddingy1">
                        <InputGroup>
                            <Input style={{ background: theme.low, borderColor: theme.highlight, color: theme.high }} onChange={this.handleChange} type="text" name="contents" id="contents" placeholder="Please comment here" />

                            <InputGroupAddon addonType="append">
                                <button style={{ borderColor: theme.highlight }} id="ice" name="submit" type="submit" className="btn">Submit</button>
                            </InputGroupAddon>

                        </InputGroup>
                    </Form>

                    <Comments comments={this.state.comments} />

                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        ...state
    }
}



const BlogDetails = connect(mapStateToProps)(ConnectedBlogDetails)


export default BlogDetails