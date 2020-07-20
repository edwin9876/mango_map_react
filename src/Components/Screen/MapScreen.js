import React, { Component } from 'react'
// import CurrentMap from '../../Icons/mapSample.JPG'
import MapPreview from '../Map/MapPreview'
import SearchBar from '../Layout/SearchBar'
import MapContainer from '../../Containers/Map/Map'


export default class Map extends Component {
    constructor(props) {
        super(props);
        this.state = { isClicked: true };
    }

    // handleLocationClick =()=> {
    //     this.setState({isClicked: true})
    // }

    // handleLocationUnclick =()=>{
    //     this.setState({isClicked:false})
    // }

    render() {
        const isClicked = this.state.isClicked;
       
        return (
            <div>
                {/* {isClicked 
                ?<MapPreview/> 
                : null} */}
            <MapPreview/>
                <SearchBar/>
                <MapContainer />
            </div >
               )
    }
}
