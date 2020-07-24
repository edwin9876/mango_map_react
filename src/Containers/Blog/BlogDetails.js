// this is the individual blog page, set route to '/blog/:id'

import React, { Component } from 'react'
import Comments from '../../Components/Blog/Comments'
import { connect } from 'react-redux'



const mapStateToProps = (state) => {
    return {
        post: state.blog.post,
        comments: state.blog.post[0].comments
    }
}


class BlogDetails extends Component {

    // post comments on submit form
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
console.log(this.props.comments)

        return (
            <div>
                <br />
                <a href="/blog"><i className="material-icons margin1 black-text">arrow_back</i></a>

                <div className="row mb10vh">
                    <div className="col s12 m12">
                        <div className="card">
                            <div className="card-image">
                                <img src="https://media.timeout.com/images/105559599/image.jpg" />
                                <span className="card-title">{this.props.post[0].title}</span>
                            </div>
                            <div className="card-content">

                                <p>by {this.props.post[0].author}</p><br />

                                <p className="flow-text">{this.props.post[0].content}</p>
                            </div>

                        </div>
                    </div>

                    {/* comment */}

                    <div className="center margin1">

                        <form action="post" onSubmit={this.handleSubmit}>
                            <input type="text" className="validate" placeholder="Please share your comments" />
                            <button id="ice" name="submit" type="submit" className="btn">Submit</button>
                        </form>

                        <Comments comments={this.props.comments}/>

                    </div>
                </div>


            </div>)
    }
}

export default connect(mapStateToProps)(BlogDetails)