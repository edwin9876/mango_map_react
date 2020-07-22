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
        posts:state.blog.posts
    }
}

class BlogScreen extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state={
    //         posts:[],
    // }
    // }
    // componentDidMount() {
    //     this.setState({
    //         posts: this.props.posts
    //     })
    // }
    render() {

        console.log(this.props)

        return (
            <div className="mb10vh">
                <SearchBar />
                <WeeklyPost />
                <WeeklyPic />

                <div className="card-tabs">
                    <ul className="tabs tabs-fixed-width">
                        <li className="tab"><a href="#test4" className="bold black-text">New posts</a></li>
                        <li className="tab"><a href="#test6" className="bold black-text">Pictures</a></li>
                        <li className="tab"><a href="#test4" className="bold black-text">Top users</a></li>
                    </ul>
                </div>
                <BlogList posts={this.props.posts} />
                {/* <TopPics /> */}
                {/* <TopUsers/> */}
            </div>
        )
    }
}




export default connect(mapStateToProps)(BlogScreen)