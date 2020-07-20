import React, { Component } from 'react'
import SearchBar from '../Layout/SearchBar'
import PopularSpots from '../Dashboard/PopularSpots'
import WeeklyPost from '../Dashboard/WeeklyPost'
import WeeklyPic from '../Dashboard/WeeklyPic'



export default class HomeScreen extends Component {
    render() {
        return (
            <div className="mb10vh">
                <SearchBar />
                <PopularSpots />
                <WeeklyPic />
                <div className="col s12 m12 center margin1"><a href='/blog/new' class=" waves-effect waves-light btn">add new post</a></div>
                <WeeklyPost />
            </div>
        )
    }
}
