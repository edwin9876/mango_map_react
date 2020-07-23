import React, { Component } from 'react'
import { connect } from 'react-redux'

import SearchBar from '../../Components/UI/Layout/SearchBar'
import WeeklyPic from '../../Components/UI/Dashboard/WeeklyPic'
import WeeklyPost from '../../Components/UI/Dashboard/WeeklyPost'
import TopPics from '../../Components/UI/Dashboard/TopPics'
import TopUsers from '../../Components/UI/Dashboard/TopUsers'
import BlogList from '../../Components/Blog/BlogList'


const mapStateToProps = (state) => {
    return {
        post: state.blog.post,
        posts: state.blog.posts,
        pictures: state.blog.images,
        users: state.user.users
    }
}

class BlogScreen extends Component {
    // constructior(props) {
    //     super(props);
    //     state = {
    //         currentRendering: <BlogList />
    //     };

    //     toBlogList = () => {
    //         // Change to immutable setState
    //         this.setState({ ...this.state, currentRendering: <BlogList /> });
    //     };
    //     toPicList = () => {
    //         // Change to immutable setState
    //         this.setState({ ...this.state, currentRendering: <TopPics /> });
    //     };
    //     toUsers = () => {
    //         // Change to immutable setState
    //         this.setState({ ...this.state, currentRendering: <TopUsers /> });
    //     };


        render() {
            
            return (

                <div className="mb10vh">
                    <SearchBar />
                    <WeeklyPost post={this.props.post} />
                    {/* <WeeklyPic /> */}

                    <div className="card-tabs">
                        <ul className="tabs tabs-fixed-width">
                            <li className="tab"><a href="#"  className="bold grey-text">New posts</a></li>
                            <li className="tab"><a href="#"  className="bold grey-text">New Pictures</a></li>
                            <li className="tab"><a href="#" className="bold grey-text">Top users</a></li>
                        </ul>
                    </div>
                    {/* <BlogList posts={this.props.posts} /> */}
                    {/* <TopPics pictures={this.props.pictures} /> */}
                    <TopUsers users={this.props.users} />
                </div>
            )
        }
    }



export default connect(mapStateToProps)(BlogScreen)