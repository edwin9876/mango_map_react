import React, { Component } from 'react'
import PopularSpots from '../Dashboard/PopularSpots'
import CurrentMap from '../../Icons/mapSample.JPG'
import MapPreview from '../Map/MapPreview'


export default class Map extends Component {
    constructor(props) {
        super(props);
        this.state = { isClicked: false };
    }

    handleLocationClick =()=> {
        this.setState({isClicked: true})
    }

    handleLocationUnclick =()=>{
        this.setState({isClicked:false})
    }

    render() {
        const isClicked = this.state.isClicked;
       
        return (
            <div>
                <h5 className="welcomeMsg gray50 d-flex justify-content-center">YOU ARE AT SAI KUNG!</h5>
                <PopularSpots />
                {isClicked 
                ?<MapPreview/> 
                : null}
                <img onClick={this.handleLocationClick} id="googleMap" src={CurrentMap} alt="this is placeholder for googlemap embed" />
            </div >
               )
    }
}
