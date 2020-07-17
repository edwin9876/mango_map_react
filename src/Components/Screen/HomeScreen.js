import React, { Component } from 'react'
import SearchBar from '../Layout/SearchBar'
import PopularSpots from '../Dashboard/PopularSpots'
import Weekly from '../Dashboard/Weekly'



export default class HomeScreen extends Component {
    render() {
        return (
            <div>
                <br /><br /><br />
                {/* <h4 className="welcomeMsg gray50 center bold" >WELCOME USER!</h4> */}
                <SearchBar />
                <PopularSpots />
                <Weekly />
            </div>
        )
    }
}
