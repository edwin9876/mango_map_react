import React from 'react'
import SearchBar from './SearchBar'
import PopularSpots from './PopularSpots'
import Map from '../../Icons/mapSample.JPG'

const Home = () => {

    return (
        <div>
            <h2 id="welcomeMsg" className="gray50 d-flex justify-content-center">Welcome USER!</h2>
            <SearchBar />
            <PopularSpots />
            <div id="mapTab" class="d-flex justify-content-center">
            <img id="mapScreen" src={Map} alt="mapsample" />
            <p id="indicationMsg" class="position-absolute white100">SELECT OR SEARCH YOUR LOCATION</p>
            </div>
        </div>
    )
}

export default Home
