// this is the individual blog page, set route to '/blog/:id'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ThemeContext } from '../../Contexts/Theme'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Form, Input, InputGroup, InputGroupAddon,
} from 'reactstrap';

import Comments from './Comments'
import { fetchPost } from '../../redux/actions/blog'
import { fetchComment } from '../../redux/actions/blog'


class ConnectedBlogDetails extends Component {
    static contextType = ThemeContext;


    constructor(props) {
        super(props)
        this.state = {
            post: {},
        }

    }

    async componentDidMount() {
        console.log(this.props)
        const { dispatch } = this.props
        let blog_id = parseInt(this.props.match.params.id)
        console.log(blog_id)

        //get individual post
        await dispatch(fetchPost(blog_id))

        if (this.props.blog.post) {
            this.setState({
                ...this.state,
                post: this.props.blog.post
            })
        }

        console.log(this.state)


    }


    // post comments on submit form
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        const { isLightTheme, light, dark } = this.context;
        const theme = isLightTheme ? light : dark;

        return (
            <div id="blogdetail_container" style={{ background: theme.low, borderColor: theme.high }}>
                <br />
                <i onClick={this.props.history.goBack} style={{cursor: 'pointer'}} className="material-icons gray50">arrow_back</i>

                <Card style={{ background: theme.low, borderColor: theme.high }}>

                    {this.state.post.images && this.state.post.images.map((img, i) => {
                        return <CardImg key={i} top width="100%" src={img.url} alt="Card image cap" />

                    })}

                    <CardBody>
                        <CardTitle className="bold">{this.state.post.title}</CardTitle>
                        <CardSubtitle >{this.state.post.locationName}</CardSubtitle>
                        <CardText >by {this.state.post.userName}</CardText>
                        {this.state.post.categories && this.state.post.categories.map((cat, i) => {
                            return <CardText key={i} > {cat.category}</CardText>

                        })}
                        <CardText> {this.state.post.body}</CardText>
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

                    {this.state.post.comments && this.state.post.comments.map((com, i) => {
                        return <Comments key={i} comment={com} />

                    })}

                    

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