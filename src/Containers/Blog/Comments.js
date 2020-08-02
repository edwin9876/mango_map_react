import React, { Component, useState } from 'react';

import {
    Form, Input, InputGroup, Button, InputGroupAddon, Alert
} from 'reactstrap';

import { connect } from 'react-redux'
import { updateComment, removeComment, fetchPost } from '../../redux/actions/blog'

// unpacking individual comments from comments array

class ConnectedIndiComment extends Component {

    constructor(props) {
        super(props)
        this.state = {
            update: false,
            updateComment: { body: this.props.comment.body },
            deleted: false
        }

    }

    handleChange = (e) => {
        this.setState({
            ...this.state,
            updateComment: { body: e.target.value }
        })
    }

    handleDelete = async (e) => {
        const { dispatch } = this.props
        const comment_id = this.props.comment.id
        const blog_id = this.props.comment.blog_id

        await dispatch(removeComment(comment_id))
        // await dispatch(fetchPost(blog_id))

        window.location.reload(false)

    }

    handleSubmit = async (e) => {
        e.preventDefault()
        const { dispatch } = this.props
        const comment = {
            ...this.state.updateComment,
            user_id: this.props.comment.user_id,
            blog_id: this.props.comment.blog_id
        }
        const comment_id = this.props.comment.id
        await dispatch(updateComment(comment, comment_id))

        this.setState({
            ...this.state,
            update: false,
        })

    }


    render() {

        let user_id
        if (localStorage.getItem('user')) {
            user_id = JSON.parse(localStorage.getItem('user')).id
        }
        console.log(this.state.deleted)
        return (
            <div>
                <div className="d-flex justify-content-between">
                    <div>
                        {!this.state.deleted && <p className="bold margin1x">{this.props.comment.user_name}</p>}
                    </div>

                    {!this.state.deleted && user_id === this.props.comment.user_id &&
                        <div className="d-flex">
                        <i onClick={() => this.setState({ ...this.state, update: !this.state.update })} className="margin1x material-icons tiny gray70">edit</i>
                        <i onClick={this.handleDelete} className="material-icons tiny gray70">delete_forever</i>
                    </div>
                    }

                </div>
                <div>
                    {this.state.update ?
                        <Form action="post" onSubmit={this.handleSubmit} className="d-flex justify-content-center">

                            <InputGroup className="paddingy1" id="editbox" >
                                <Input value={this.state.updateComment.body} onChange={this.handleChange} type="textarea" rows={3} name='updateComment' id={this.props.num} placeholder="Please comment here" />
                                <InputGroupAddon addonType="append">
                                    <Button color="secondary">ADD</Button>
                                </InputGroupAddon>
                            </InputGroup>
                        </Form> : !this.state.deleted ?
                            <p className="padding1">{this.state.updateComment.body} </p> : null
                    }
                </div>
            </div>

        );
    };
}


const Comments = ({ comment }) => {

    return (
        <div className="blog-list section">
            {/* in case there's no posts */}

            <IndiComment comment={comment} />


        </div>
    )
}


const IndiComment = connect()(ConnectedIndiComment)



export default Comments