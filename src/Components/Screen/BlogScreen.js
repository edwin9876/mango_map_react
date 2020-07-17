import React, { Component } from 'react'
import WeeklyPost from '../Dashboard/WeeklyPost'
import SearchBar from '../Layout/SearchBar'
import TopPics from '../Dashboard/TopPics'
import TopUsers from '../Dashboard/TopUsers'
import WeeklyPic from '../Dashboard/WeeklyPic'




export default class BlogScreen extends Component {
    render() {
        return (
            <div>
                <SearchBar />
                <WeeklyPic/>

                <div className="card-tabs">
                    <ul className="tabs tabs-fixed-width">
                        <li className="tab"><a href="#test6" className="bold black-text">Pictures</a></li>
                        <li className="tab"><a href="#test4" className="bold black-text">Top users</a></li>
                    </ul>
                </div>
<TopPics/>
{/* <TopUsers/> */}
            </div>
        )
    }
}
