import React, { Component } from 'react'
import SearchBar from '../../Components/UI/Layout/SearchBar'
import TopPics from '../../Components/UI/Dashboard/TopPics'
import TopUsers from '../../Components/UI/Dashboard/TopUsers'
import WeeklyPic from '../../Components/UI/Dashboard/WeeklyPic'
import WeeklyPost from '../../Components/UI/Dashboard/WeeklyPost'
import BlogList from './BlogList/BlogList'
import { connect } from 'react-redux'




class BlogScreen extends Component {
    render() {

        const { blogs } = this.props;

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
                <BlogList blogs={blogs}/>
                {/* <TopPics /> */}
                {/* <TopUsers/> */}
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        blogs: state.blog.blogs
    }
}

export default connect(mapStateToProps)(BlogScreen)