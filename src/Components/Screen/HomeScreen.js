import React, { Component } from 'react'
import SearchBar from '../Layout/SearchBar'
import PopularSpots from '../Dashboard/PopularSpots'
import WeeklyPost from '../Dashboard/WeeklyPost'



export default class HomeScreen extends Component {
    render() {
        return (
            <div>
                    <SearchBar /> 
                {/* <h4 className="welcomeMsg gray50 center bold" >WELCOME USER!</h4> */}
                <WeeklyPost />
          
                <PopularSpots />
           
            </div>
        )
    }
}
