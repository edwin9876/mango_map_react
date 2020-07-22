import React, { Component } from 'react'
import { connect } from 'react-redux'



const mapStateToProps = (state) => {
    return {
        post: state.blog.post
    }
}


class BlogDetails extends Component {
    render() {

        return (
            <div>
                <br />
                <a href="/blog"><i class="material-icons margin1 black-text">arrow_back</i></a>

                <div className="row mb10vh">
                    <div className="col s12 m12">
                        <div className="card">
                            <div className="card-image">
                                <img src="https://media.timeout.com/images/105559599/image.jpg" />
        <span className="card-title">{this.props.post[0].title}</span>
                            </div>
                            <div className="card-content">

        <p>by {this.props.post[0].author}</p><br/>

                                <p className="flow-text">{this.props.post[0].content}</p>
                            </div>
                            <div className="card-action">
                                <a href="#">This is a link</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>)
    }
}

export default connect(mapStateToProps)(BlogDetails)