import React from 'react'
import Map from './Map'
import SearchBar from '../../Components/UI/Layout/SearchBar'
import { useHistory } from "react-router";

const MapScreen = () => {
    const history = useHistory();

    return (
        <div>
            <SearchBar/>
            <Map history={history}/>
        </div>
    )
}


export default MapScreen
