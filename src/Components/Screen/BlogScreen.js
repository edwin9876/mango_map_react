import React, { Component } from 'react'
import WeeklyPost from '../Dashboard/WeeklyPost'
import SearchBar from '../Layout/SearchBar'
import TopPics from '../Dashboard/TopPics'
import TopUsers from '../Dashboard/TopUsers'
import WeeklyPic from '../Dashboard/WeeklyPic'




export default class BlogScreen extends Component {
    render() {
        return (
            <div className="mb10vh">
                <SearchBar />
                <WeeklyPic />
                <div className="col s12 m12 center margin1"><a href='/blog/new'class=" waves-effect waves-light btn">add new post</a></div>

                <div className="card-tabs">
                    <ul className="tabs tabs-fixed-width">
                        <li className="tab"><a href="#test6" className="bold black-text">Pictures</a></li>
                        <li className="tab"><a href="#test4" className="bold black-text">Top users</a></li>
                    </ul>
                </div>
                <TopPics />
                {/* <TopUsers/> */}
            </div>
        )
    }
}
