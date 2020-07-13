import React, { Component } from 'react'
import SearchBar from '../Layout/SearchBar'
import PopularSpots from '../Dashboard/PopularSpots'
import MapPlaceholder from '../../Icons/mapSample.JPG'



export default class HomeScreen extends Component {
    render() {
        return (
            <div>
                <h4 className="welcomeMsg gray50 d-flex justify-content-center">WELCOME USER!</h4>
            <SearchBar />
            <PopularSpots />
            <div id="mapTab" class="d-flex justify-content-center">
            <img id="mapScreen" src={MapPlaceholder} alt="mapsample" />
            <p id="indicationMsg" class="position-absolute white100">SELECT OR SEARCH YOUR LOCATION</p>
            </div>
            </div>
        )
    }
}
