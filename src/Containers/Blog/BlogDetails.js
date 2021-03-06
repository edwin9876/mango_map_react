// this is the individual blog page, set route to '/blog/:id'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ThemeContext } from '../../Contexts/Theme'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Form, Input, InputGroup, InputGroupAddon,
} from 'reactstrap';

import Comments from './Comments'
import { fetchPost, createComment,createFavPost,removeFavPost} from '../../redux/actions/blog'


class ConnectedBlogDetails extends Component {
    static contextType = ThemeContext;

    constructor(props) {
        super(props)
        this.state = {
            post: {},
            comment: '',
            color: "black",
            updateComment: '',
            user_id: '',
            user_fav: [],
        }

    }

    async componentDidMount() {
        console.log(this.props)
        const { dispatch } = this.props
        let blog_id = parseInt(this.props.match.params.id)
        console.log(blog_id)

        //get individual post
        await dispatch(fetchPost(blog_id))

        let user_id
        let matchUser
        if (localStorage.getItem('user')) {
            user_id = JSON.parse(localStorage.getItem('user')).id
        }
        if (this.props.blog.post.favUsers) {
            matchUser = [...this.props.blog.post.favUsers].filter((user) => user.user_id === user_id)
            console.log(matchUser)
        }

        if (this.props.blog.post) {
            this.setState({
                ...this.state,
                post: this.props.blog.post,
                user_id: user_id,
                user_fav: matchUser,
            })
        }
        if (this.state.user_fav.length) {
            this.setState({
                ...this.state,
                color: '#ccd637',
            })
        }
        console.log(this.state)
    }


    //change color addfavourite, alert upon click
    addFav = async (e) => {

        const { dispatch } = this.props

        if (this.state.color === "black") {
            alert('Added to your Likes!')
            this.setState({
                color: "#ccd637"
            })
            await dispatch(createFavPost(this.state.post.id,this.state.user_id))
        }
        else {
            alert('Removed from your Likes!')
            this.setState({
                color: "black"
            })
            await dispatch(removeFavPost(this.state.post.id,this.state.user_id))

        }
    }

    handleChange = (e) => {
        this.setState({
            ...this.state,
            comment: { [e.target.name]: e.target.value }
        })

    }

    // post comments on submit form
    handleSubmit = async (e) => {
        e.preventDefault();
        const { dispatch } = this.props

        const comment = {
            ...this.state.comment,
            user_id: this.props.auth.user.id,
            blog_id: this.props.blog.post.id
        }

        if (comment) {
            await dispatch(createComment(comment))

            await dispatch(fetchPost(comment.blog_id))

            if (this.props.blog.post) {
                this.setState({
                    ...this.state,
                    post: this.props.blog.post,
                    comment: { body: '' }
                })
            }
            console.log(this.state)
        }

        console.log(this.props)
    }

    render() {
        const { isLightTheme, light, dark } = this.context;
        const theme = isLightTheme ? light : dark;
        console.log(this.props)

        return (
            <div id="blogdetail_container" style={{ background: theme.low, borderColor: theme.high }}>
                <br />

                <i onClick={this.props.history.goBack} style={{ cursor: 'pointer' }} className="material-icons gray50">arrow_back</i>


                <Card style={{ background: theme.low, borderColor: theme.high }}>

                    {this.state.post.images && this.state.post.images.map((img, i) => {
                        return <CardImg key={i} top width="100%" src={img.url} alt="Card image cap" />

                    })}

                    <CardBody>
                        <CardTitle className="bold d-flex justify-content-between">{this.state.post.title}
                            <i onClick={this.addFav} style={{ cursor: 'pointer', color: this.state.color }} className="material-icons">thumb_up</i>
                        </CardTitle>

                        <CardSubtitle >{this.state.post.locationName}</CardSubtitle>
                        <CardText >by {this.state.post.userName}</CardText>
                        <CardText> {this.state.post.body}</CardText>
                        <div className="d-flex">
                            {this.state.post.categories && this.state.post.categories.map((cat, i) => {
                                return <CardText className="blur" key={i} > #{cat.category}</CardText>
                            })}
                        </div>
                    </CardBody>
                </Card>


                {/* comment */}

                <div className="center">
                    {this.state.user_id &&
                        <Form action="post" onSubmit={this.handleSubmit} className=" paddingy1">
                            <InputGroup>
                                <Input value={this.state.comment.body} style={{ background: theme.low, borderColor: theme.highlight, color: theme.high }} onChange={this.handleChange} type="text" name="body" id="body" placeholder="Please comment here" />

                                <InputGroupAddon addonType="append">
                                    <button style={{ borderColor: theme.highlight }} id="ice" name="submit" type="submit" className="btn">Submit</button>
                                </InputGroupAddon>

                            </InputGroup>
                        </Form>}

                    {this.state.post.comments && this.state.post.comments.map((com, i) => {
                        return <Comments key={com.id} comment={com} />
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